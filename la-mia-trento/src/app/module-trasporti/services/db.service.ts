import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Platform } from '@ionic/angular';
import { SQLite } from '@ionic-native/sqlite/ngx';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';
import { HttpClient } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';

declare var cordova: any;

@Injectable({
  providedIn: 'root'
})
export class DbService {
  file = new File();
  db: any;
  LOCAL_DATA_URL = 'assets/trasporti/data/routesdb.zip';

  constructor(private sqlite: SQLite,
    private config: ConfigService,
    public plt: Platform,
    private http: HttpClient) {
    // this.Init();
  }

  Init(): Promise<any> {
    console.log('Init')
    return this.plt.ready().then((readySource: string) => {
      return this.dbSetup();
    }).catch((error: Error) => {
      console.log('Error on open or create database: ', error);
      return Promise.reject(error.message || error);
    });
  }

  getDBFileShortName() {
    return "routesdb_" + this.config.getAppId() + ".db";
  };

  getDBPath() {
    if (this.plt.is('ios')) {
      return cordova.file.documentsDirectory;
    } else if (this.plt.is('android')) {
      var filesdir = cordova.file.dataDirectory;
      if (filesdir.charAt(filesdir.length - 1) == '/') {
        filesdir = filesdir.substr(0, filesdir.length - 1);
      }
      filesdir = filesdir.substr(0, filesdir.lastIndexOf('/')) + '/databases/';
      return filesdir;
    } else {
      return cordova.file.dataDirectory;
    }
  }

  getDBFileName() {
    return this.getDBPath() + this.getDBFileShortName();
  };

  errorDB(deferred, error) {
    alert("##openDatabase: " + error);
    deferred.resolve(false);

  }
  getStopsData(agencies) {
    var res = [];
    agencies.forEach((a) => {
      var local = localStorage[this.config.getAppId() + "_stops_" + a];
      if (local) {
        local = JSON.parse(local);
        if (local && local.length > 0) {
          local.forEach((s) => {
            s.agencyId = a;
            res.push(s);
          });
        }
      }
    });
    return res;
  };
  getNextTrips(agencyId, stopId, numberOfResults): any {
    let promise = new Promise((resolve, reject) => {
      numberOfResults = numberOfResults || 3;
      this.http.get(this.config.getServerURL() + '/getlimitedtimetable/' + agencyId + '/' + stopId + '/' + numberOfResults).toPromise().then(data => {
        resolve(data);
      }, err => {
        reject(err);

      })
    })
    return promise;
  };



  doWithDB(successcallback, errorcallback) {
    console.log('doWithDB()')
    var that = this;
    if (this.db == null) {
      console.log('this.db is null');
      // (<any>window).plugins.sqlDB.copy(this.getDBFileShortName(), 0, () => {
      //   console.log('copied success');
        (<any>window).sqlitePlugin.openDatabase({
          // this.sqlite.create({
          name: this.getDBFileShortName(),
          // location: 'default',
          bgType:1,
          skipBackup:true,
          iosDatabaseLocation:'Documents'
        }, (db) => {
          that.db = db;
          console.log('opened, try to query')
          db.executeSql("select * from version", [], (res) => {
            console.log('version present')
            console.log(JSON.stringify(res))
            successcallback();
          }, (e) => {
            console.log("errror select * from version" + JSON.stringify(e));
            errorcallback();
          });
        })

      // }, (err) => {
      //   console.log('not copied')
      //   console.log(err);
      //   if (err.code = 516) {
      //     console.log('error 516');
      //     (<any>window).sqlitePlugin.openDatabase({
      //       name: this.getDBFileShortName(),
      //       location: 'default'
      //     }, (db) => {
      //       that.db = db;
      //       console.log('opened, try to query')
      //       db.executeSql("select * from version", [], (res) => {
      //         console.log('version present');
      //         console.log(JSON.stringify(res))
      //         successcallback();
      //       }, (e) => {
      //         console.log(JSON.stringify(e));
      //         errorcallback();
      //       });
      //     })
      //   }
      // })
    } else {
      console.log('this.db is NOT null'+JSON.stringify(this.db));
      successcallback();
    }
  };

  size(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  convertData(res) {
    var data = [];
    var rowsize = 0;
    if (res.rows.length > 0) {
      rowsize = this.size(res.rows.item(0));
      for (var i = 0; i < res.rows.length; i++) {
        var row = res.rows.item(i);
        if (rowsize == 1) {
          for (var k in row) data.push(row[k]);
        } else data.push(row);
      }
    }
    if (data.length == 1 && rowsize == 1) return data[0];
    return data;
  };

  openDB(successcallback, errorcallback) {
    console.log('openDB()')
    var that = this;
    var _do = function () {
      that.db.executeSql("select * from version", [], (res) => {
        console.log('opened and present version')
        console.log(JSON.stringify(res))
        var data = that.convertData(res);
        successcallback(data);
      }, (e) => {
        console.log('error query select * from version')
        console.log(JSON.stringify(e));
        errorcallback();
      });
    };
    this.doWithDB(_do, errorcallback);

  }
  process(url): Promise<any> {
    var that = this;
    console.log('process()')
    let promise = new Promise((resolve, reject) => {

      JSZipUtils.getBinaryContent(url, function (err, data) {

        if (err) {
          console.log("Error reading ZIP file: " + err);
          reject(err);

        }
        // console.log("Reading ZIP file");
        // JSZip.support.nodebuffer = false;
        // var jszipobj = new JSZip(data);
        JSZip.loadAsync(data).then(function (jszipobj) {
        Object.keys(jszipobj.files).forEach(function (key) {
          console.log('file'+key);

          that.file.createFile(that.getDBPath(), that.getDBFileShortName(), true)
            .then(async function (success) {
              console.log('created file');

              var f = jszipobj.file(key);
              // that.file.removeFile(that.getDBPath(), that.getDBFileShortName()).then(function () {
                console.log("getDBPath"+that.getDBPath());
                console.log("getDBFileShortName"+that.getDBFileShortName());
              that.file.writeFile(that.getDBPath(), that.getDBFileShortName(), await jszipobj.file(key).async('arraybuffer'), { replace: true })
                .then(function (success) {
                  console.log('success write');
                  // that.db = null;
                  resolve(true);

                }, function (error) {
                  console.log('error write');
                  reject(error);

                });
            })

        }, function (error) {
          console.log('error creation');
          reject(error);
        }), function (error) {
          console.log('error creation');
          reject(error);
        }
      });
      // });
    })
    })
    return promise;

  };



  getDataURL(remote) {
    if (remote) {
      return this.config.getServerURL() + '/routesDB/' + this.config.getAppId();
      // return this.config.getServerURL() + '/routesDB/' + this.config.getAppId();

    } else {
      return this.LOCAL_DATA_URL;
    }
  }

  installDB(remote) {
    console.log('installDB('+remote+')')
    return this.process(this.getDataURL(remote));

  }

  localDBisPresent() {
    console.log('localDBisPresent()')

    var deferred = new Promise((resolve, reject) => {

      //return true if a localdb is present
      this.openDB(function (res) {
        resolve(res.length > 0);
      }, function () {
        console.log("DB file does not exist!");
        resolve(false);
      });
    })
    return deferred;
  }

  mapVersions(arrayOfVersions) {
    console.log('mapVersion()')
    var returnVersions = {};
    for (var i = 0; i < arrayOfVersions.length; ++i) {
      returnVersions['' + arrayOfVersions[i].agencyID] = arrayOfVersions[i].version;
    }
    //        for (var i = 0; i < arrayOfVersions.length; ++i)
    //            returnVersions[arrayOfVersions[i][0]] = parseInt(arrayOfVersions[i][1]);
    return returnVersions;
  }

  getLocalVersion() {
    console.log('getLocalVersion()')

    var that = this;
    var deferred = new Promise((resolve, reject) => {
      //return true if a localdb is present
      that.openDB(function (versions) {
        //turn array into map
        resolve(that.mapVersions(versions));
      }, function (error) {
        reject(error);
      });
    })
    return deferred;
  }


  compareversions(localversions, remoteversions) {
    //compare versions. If localversions<remoteversions for some element return -1, in other case 0
    for (var key in localversions) {
      if (remoteversions.hasOwnProperty(key)) {
        if (localversions[key] < remoteversions[key]) {
          return -1
        }
      }
    }
    return 0;
  }

  synchDB() {
    console.log('synchDB()')
    var that = this;
    var deferred = new Promise((resolve, reject) => {
      var err = function (e) {
        console.log("DB SYNC ERROR: " + e);
        reject(e);
      }
      var success = function () {
        resolve(true);
      }
      that.getLocalVersion().then(function (localversion) {
        console.log('got the local version, try remote');
        that.http.get(that.config.getServerURL() + '/versions').toPromise().then(remoteversion => {
          console.log('remote version'+remoteversion);
          if (that.compareversions(localversion, remoteversion) < 0) {
            that.installDB(true).then(success, err); //remote
          } else {
            success();
          }
          that.syncStops();
        }).catch(err);
      }, err);
    })
    return deferred;
  }

  syncStops() {
    this.http.get(this.config.getServerURL() + '/versions').toPromise().then(remoteversion => {
      this.syncStopsForVersions(remoteversion);
    })
  };

  readLocalStopVersions() {
    var localStopVersionsKey = this.config.getAppId() + "_localStopVersions";
    var localVersions = localStorage[localStopVersionsKey];
    if (localVersions) localVersions = JSON.parse(localVersions);
    else localVersions = {};
    return localVersions;
  };
  writeLocalStopVersion(agency, version) {
    var localStopVersionsKey = this.config.getAppId() + "_localStopVersions";
    var lv = this.readLocalStopVersions();
    lv[agency] = version;
    localStorage[localStopVersionsKey] = JSON.stringify(lv);
  };

  syncStopsForVersions(remoteversion) {
    var that = this;
    var agencies = this.config.getAppAgencies();
    var versions = {};
    var localStopVersionsKey = this.config.getAppId() + "_localStopVersions";
    var localversion = this.readLocalStopVersions();

    agencies.forEach(function (a) {
      var key = that.config.getAppId() + "_stops_" + a
      var localStops = localStorage[key];
      var localVersion = localversion[a] ? localversion[a] : -1;
      var remoteVersion = remoteversion[a] ? remoteversion[a] : -1;

      if (!localStops || localVersion < remoteVersion) {
        that.http.get(that.config.getServerURL() + '/geostops/' + a + '?lat=' + that.config.getMapPosition().lat + '&lng=' + that.config.getMapPosition().long + '&radius=5').toPromise().then(stops => {
          if (Object.prototype.toString.call(stops) === '[object Array]') {
            localStorage[key] = JSON.stringify(stops);
            that.writeLocalStopVersion(a, remoteVersion);
          }
        }).catch((error: Error) => {
          console.error('ERROR SYNC STOP DATA: ' + error);
        });
      }
    });
  }

  doQuery(query, params) {
    var that = this;
    var deferred = new Promise((resolve, reject) => {
      var _do = function () {
        that.db.executeSql(query, params, (res) => {
          var data = that.convertData(res);
          resolve(data);
        }, (e) => {
          console.log(JSON.stringify(e));
          reject(e);
        });
        //                  cordovaSQLite.execQuerySingleResult(query, params,
        //                      function(result) {
        //                        deferred.resolve(result);
        //                      },
        //                      function(err) {
        //                        deferred.reject(err);
        //                      }
        //                  );
      };
      that.doWithDB(_do, function (e) {
        console.error("!DB ERROR: " + e);
        reject(e);
      });
    })
    return deferred;
  }
  syncStopData() {
    return this.syncStops
  }
  dbSetup() {
    console.log('dbSetup()');
    var that = this;
    var deferred = new Promise((resolve, reject) => {
      var err = function (error) {
        reject(error);
        console.log("NOT synch: " + error);
      }
      var success = function () {
        resolve(true);
        console.log("synch done");
      }

      //try to open db (check if db is present)
      this.localDBisPresent().then(function (result) {
        //use local version of db in data/routesdb.zip
        if (!result) {
          console.log("start install");
          that.installDB(false).then(function () {
            console.log("after install, start synch")
            that.synchDB().then(success, err);
          }, err);
        } else {
          that.synchDB().then(success, err);
        }
      }, err);
    })
    return deferred;

  }

};

