import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { DbService } from './db.service';
import { resolve } from 'dns';
import { reject } from 'q';
import { DatePipe } from '@angular/common';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  calendarCache = {};
  stopCache = {};
  ttMapData = {};
  ttStopData = {};
  elements = {};
  constructor(private config: ConfigService, private platform: Platform, private datePipe: DatePipe, private dbService: DbService,  private http: HttpClient) { 
    console.log("created transport service")
  }
  setElements(elements: any): any {
    this.elements = elements
  }
  getElements(): any {
    return this.elements
  }

  
  getTTData(ref, agencyId?, groupId?, routeId?): Promise<any> {
    return this.config.getTtJsonConfig().then(res => {
      if (!!ref) {
        res = res.elements[ref];
      }
      if (!!agencyId) {
        for (var i = 0; i < res.elements.length; i++) {
          if (res.elements[i].agencyId == agencyId) {
            res = res.elements[i];
            break;
          }
        }
      }

      var searchRec = function (res, groupIds, idx) {
        if (idx >= groupIds.length) return res;
        for (var i = 0; i < res.groups.length; i++) {
          if (res.groups[i].label == groupIds[idx]) {
            res = searchRec(res.groups[i], groupIds, idx + 1);
            break;
          }
        }
        return Promise.resolve(res);
      };

      if (!!groupId) {
        var groupIds = groupId.split(',');
        res = searchRec(res, groupIds, 0);
      }
      if (!!routeId) {
        for (var i = 0; i < res.routes.length; i++) {
          if (res.routes[i].routeId == routeId) {
            res = res.routes[i];
            break;
          }
        }
      }
      return Promise.resolve(res);
    });
  }
  tripTypeExtractor = function (agencyId, tripId) {
    if (agencyId == '5' || agencyId == '6') {
      return tripId.replace(/\d+.*/g, '').toUpperCase();
    }
    return tripId;
  }
  // custom trip name if trip row is shown
  getTripText = function (agencyId, trip) {
    try {
      return this.tripTypeExtractor(agencyId, trip);
    } catch (e) {
      return trip;
    }
  }

  flattenElement = function (e, res, ref, agencyId) {
    var localAgency = agencyId;
    if (e.agencyId != null) localAgency = e.agencyId;
    if (e.groups != null) {
      for (var j = 0; j < e.groups.length; j++) {
        res.push({
          ref: ref,
          agencyId: localAgency,
          group: e.groups[j],
          color: e.groups[j].color,
          label: e.groups[j].label,
          title: e.groups[j].title ? e.groups[j].title : e.groups[j].label,
          gridCode: e.groups[j].gridCode
        });
      }
    }
    if (e.routes != null) {
      for (var j = 0; j < e.routes.length; j++) {
        res.push({
          ref: ref,
          agencyId: localAgency,
          route: e.routes[j],
          color: e.color,
          label: e.routes[j].label ? e.routes[j].label : e.label,
          title: e.routes[j].title ? e.routes[j].title : e.title
        });
      }
    }
  }
  flattenData(data?, ref?, agencyId?) {
    var res = [];
    if (data.elements) {
      for (var i = 0; i < data.elements.length; i++) {
        var e = data.elements[i];
        this.flattenElement(e, res, ref, agencyId);
      }
    } else {
      this.flattenElement(data, res, ref, agencyId);
    }
    return res;
  }



  getStopsData(agencies) {
    var res = [];
    var that = this;
    agencies.forEach(function (a) {
      var local = localStorage[that.config.getAppId() + "_stops_" + a];
      if (local) {
        local = JSON.parse(local);
        if (local && local.length > 0) {
          local.forEach(function (s) {
            s.agencyId = a;
            res.push(s);
          });
        }
      }
    });
    return res;
  };

  getStop(agencyId, stopId) {
    var that = this;
    var key = agencyId + '_' + stopId;
    if (!this.stopCache[key]) {
      var stops = this.getStopsData([agencyId]);
      if (stops) {
        stops.forEach(function (s) {
          that.stopCache[agencyId + '_' + s.id] = s;
        });
      }
    }

    return this.stopCache[key];
  }

  toTrimmedList(str) {
    if (!str) return [];
    try {
      var arr = str.split(',');
      var res = [];
      arr.forEach(function (e) {
        res.push(e.trim());
      });
      return res;
    } catch (e) {
      console.error('ERROR PARSING ARRAY: ' + e);
      return [];
    }
  }

  getDelays(agency, route, date) {
    var that = this;
    var deferred = new Promise((resolve, reject) => {
      var d = new Date(date);
      d.setHours(0);
      d.setMinutes(0);
      d.setSeconds(0);
      d.setMilliseconds(0);
      var from = d.getTime();
      d.setHours(23);
      d.setMinutes(59);
      var to = d.getTime();
      route = encodeURIComponent(route);
      that.http.get(that.config.getServerURL() + '/gettransitdelays/' + agency + '/' + route + '/' + from + '/' + to).toPromise()
        .then(function (data: any) {
          if (data && data.delays) resolve(data.delays[0]);
        }).catch(function (err) {
          reject(err);
        });

    })
    return deferred;
  }

  toWheelChairBoarding(agencyId, stops) {
    var res = [];
    var that = this;
    stops.forEach(function (s) {
      var stop = that.getStop(agencyId, s);
      if (!!stop) res.push(stop.wheelChairBoarding);
      else res.push(0);
    });
    return res;
  }

  /**
   * transform compressed string to matrix of times. string is a sequence of all trip times separated with '|'. Each time (if presented) has 4 chars.
   */
  uncompressTime(str, rowsCount) {
    if (!str) return [];
    var res = [];
    var column = [];
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
      var c = str.charAt(i);
      if (c == ' ') continue;
      if (c == '|') column.push("");
      else {
        column.push(str.substr(i, 2) + ":" + str.substr(i + 2, 2));
        i += 3;
      }
      counter++;
      if (counter == rowsCount) {
        res.push(column);
        column = [];
        counter = 0;
      }
    }
    return res;
  }

  /**
   * Read TT from DB: given a agency/route/date, get a hash and then read stopIds, name,s tripIds, and times from DB.
   * Due to the problem with the plugin (does not escape JSON strings), it is necessary to do 5 DB calls in a row.
   * Parallel calls seems to end up in DB lock sometimes.
   */
  dataFromHash(agency, route, date, resolve, reject) {
    var that = this;
    var cal = this.calendarCache[agency][route];
    var dateStr = this.datePipe.transform(date, 'yyyyMMdd');
    var hash = route + '_' + cal.mapping[cal.entries[dateStr]];
    var errCB = function (err) {
      reject(err);
    };
    var result = {
      stops: [],
      tripIds: [],
      times: [],
      stopsId: [],
      routeIds: [],
      wheelChairBoarding: [],
      delays: []
    };
    this.dbService.doQuery("SELECT * FROM route WHERE agencyID = '" + agency + "' AND linehash = '" + hash + "'", [])
      .then(function (data) {
        if (!data || !data[0] || !data[0].stopsNames) {
          // notify(result);
          resolve(result);
          return;
        }
        result.stops = that.toTrimmedList(data[0].stopsNames);
        result.stopsId = that.toTrimmedList(data[0].stopsIDs);
        result.tripIds = that.toTrimmedList(data[0].tripIds);
        result.wheelChairBoarding = that.toWheelChairBoarding(agency, that.toTrimmedList(data[0].stopsIDs));
        result.times = that.uncompressTime(data[0].times, result.stops.length);
        // deferred.notify(result);
        that.getDelays(agency, route, date).then(function (delays: any) {
          result.delays = delays;
          resolve(result);
        }, function () {
          resolve(result);
        });
        //      DataManager.doQuery("SELECT stopsNames FROM route WHERE agencyID = '"+agency+"' AND linehash = '"+hash+"'",[])
        //      .then(function(data) {
        //        result.stops = toTrimmedList(data);
        //        DataManager.doQuery("SELECT tripIds FROM route WHERE agencyID = '"+agency+"' AND linehash = '"+hash+"'",[])
        //        .then(function(data) {
        //          result.tripIds = toTrimmedList(data);
        //          DataManager.doQuery("SELECT times FROM route WHERE agencyID = '"+agency+"' AND linehash = '"+hash+"'",[])
        //          .then(function(data) {
        //            result.times = uncompressTime(data,result.stopIds.length);
        //            getDelays(agency, route, date).then(function(delays){
        //              result.delays = delays;
        //              deferred.resolve(result);
        //            }, function() {
        //              deferred.resolve(result);
        //            });
        //          }, errCB);
        //        }, errCB);
        //      }, errCB);
      }, errCB);
  };

  getNextTrips(agencyId, stopId, numberOfResults) {
    var deferred = new Promise((resolve, reject) => {


      numberOfResults = numberOfResults || 3;
      this.http.get(this.config.getServerURL() + '/getlimitedtimetable/' + agencyId + '/' + stopId + '/' + numberOfResults).toPromise()
        .then(function (data) {
          resolve(data);
        })
        .catch(function (err) {
          reject(err);
        });
    })
    return deferred;
  };
  // getStopData(ref, agencyId, stopId):any {
  //   let promise = new Promise((resolve, reject) => {
  //     var stop = null;
  //     var stops = this.getStopsData([agencyId]);
  //     if (stops) {
  //       for (var i = 0; i < stops.length; i++) {
  //         if (stops[i].id == stopId) {
  //           stop = stops[i];
  //           break;
  //         }
  //       }
  //       if (stop) {
  //         this.getNextTrips(stop.agencyId, stop.id, 5).then((data)=> {
  //           var ttData = this.config.getTTData(ref);
  //           var flatTTData = this.flattenData(ttData, ref);

  //           flatTTData.forEach( (e) =>{
  //             var list = [];
  //             if (e.group) {
  //               if (e.group.routes) list = list.concat(e.group.routes);
  //               else if (e.group.route) list.push(e.group.route);
  //             } else {
  //               if (e.routes) list = list.concat(e.routes);
  //               else if (e.route) list.push(e.route);
  //             }
  //             list.forEach((r) => {
  //               if (data[r.routeId] != null) {
  //                 data[r.routeId].routeElement = e;
  //                 data[r.routeId].routeObject = r;
  //                 //                routes.push(data[r.routeId]);
  //               } else if (data[r.routeSymId] != null) {
  //                 data[r.routeSymId].routeElement = e;
  //                 data[r.routeSymId].routeObject = r;
  //                 //                routes.push(data[r.routeSymId]);
  //               }
  //             });
  //           });
  //           stop.data = data;
  //           resolve(stop);
  //         },  (err) => {
  //           reject(err);
  //         });
  //       } else {
  //         resolve(null);
  //       }
  //     } else {
  //       resolve(null);
  //     }
  //   })
  //   return promise;
  // }

  getStopData(ref, agencyId, stopId) {
    var deferred = new Promise((resolve, reject) => {

      var stop = null;
      var stops = this.getStopsData([agencyId]);
      if (stops) {
        for (var i = 0; i < stops.length; i++) {
          if (stops[i].id == stopId) {
            stop = stops[i];
            break;
          }
        }
        if (stop) {
          this.getNextTrips(stop.agencyId, stop.id, 5).then(function (data) {
            var ttData = this.config.getTTData(ref);
            var flatTTData = this.config.flattenData(ttData, ref);

            //pass the right agencyid
            //find the agencyId and call the right group
            var flat = null;
            if (flatTTData[0] && flatTTData[0].group && flatTTData[0].group.groups) {
              for (var i = 0; i < flatTTData.length; i++) {
                if (flatTTData[i] && flatTTData[i].group && flatTTData[i].group.groups && flatTTData[i].group.agencyId == stop.agencyId) {
                  flat = flatTTData[i].group.groups;
                  break;
                }
              }
            } else {
              flat = flatTTData;
            }
            flat.forEach(function (e) {
              var list = [];
              if (e.group) {
                if (e.group.routes) list = list.concat(e.group.routes);
                else if (e.group.route) list.push(e.group.route);
              } else {
                if (e.routes) list = list.concat(e.routes);
                else if (e.route) list.push(e.route);
              }
              list.forEach(function (r) {
                if (data[r.routeId] != null) {
                  data[r.routeId].routeElement = e;
                  data[r.routeId].routeObject = r;
                  //                routes.push(data[r.routeId]);
                } else if (data[r.routeSymId] != null) {
                  data[r.routeSymId].routeElement = e;
                  data[r.routeSymId].routeObject = r;
                  //                routes.push(data[r.routeSymId]);
                }
              });
            });
            stop.data = data;
            resolve(stop);
          }, function (err) {
            reject(err);
          });
        } else {
          resolve(null);
        }
      } else {
        resolve(null);
      }
    })

    return deferred;
  }


  /**
   * timetable for specified timestamp: converted to date start/end timestamps
   */
  getTT(agency: string, route: string, date) {
    var that = this;
    var deferred = new Promise((resolve, reject) => {
      if (!that.platform.is('mobileweb')) {
        // use cache of calendar hashes
        if (that.calendarCache[agency] == null) {
          that.calendarCache[agency] = {};
        }
        if (that.calendarCache[agency][route] == null) {
          that.dbService.doQuery("SELECT calendar FROM calendar WHERE agencyID = '" + agency + "' AND route = '" + route + "'", [])
            .then(function (data: any) {
              if (!data || data.length == 0) {
                reject({});
                return;
              }
              that.calendarCache[agency][route] = JSON.parse(data);
              that.dataFromHash(agency, route, date, resolve, reject);
            }, function (err) {
              reject(err);
            });
        } else {
          that.dataFromHash(agency, route, date, resolve, reject);
        }
      } else {
        // use remote call for timetable
        var d = new Date(date);
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(0);
        d.setMilliseconds(0);
        var from = d.getTime();
        d.setHours(23);
        d.setMinutes(59);
        var to = d.getTime();
        route = encodeURIComponent(route);
        that.http.get(that.config.getServerURL() + '/gettransittimes/' + agency + '/' + route + '/' + from + '/' + to).toPromise()
          .then(function (data: any) {
            if (data.times) data.times = data.times[0];
            if (data.tripIds) data.tripIds = data.tripIds[0];
            if (data.delays) data.delays = data.delays[0];
            data.wheelChairBoarding = that.toWheelChairBoarding(agency, data.stopsId);
            // deferred.notify(data);
            resolve(data);
          })
          .catch(function (err) {
            reject(err);
          });
      }

    })
    return deferred;
  }
  /**
   * Find a column that corresponds to the current time
   */
  locateTablePosition(data, time) {
    if (!data) return;
    time = this.datePipe.transform(time, 'HH:mm');
    for (var i = 0; i < data.tripIds.length; i++) {
      if (!data.times[i]) continue;
      for (var j = 0; j < data.times[i].length; j++) {
        if (!!data.times[i][j]) {
          if (data.times[i][j].localeCompare(time) >= 0) {
            return i;
          }
        }
      }
    }
    return data.tripIds.length - 1;
  }



  /**
   * Cache the data for the TT map set up
   */
  getTTMapData() {
    return this.ttMapData;
  }
  setTTMapData(mapData) {
    this.ttMapData = mapData;
  }
  /**
   * Cache the data for the TT stop set up
   */
  getTTStopData() {
    return this.ttStopData;
  }
  getTTStopDataAsync(ref, agencyId, stopId) {
    return this.getStopData(ref, agencyId, stopId);
  }
  setTTStopData(stopData) {
    this.ttStopData = stopData;
  }
}
