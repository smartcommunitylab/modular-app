import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {


  appId = 'trento';
  ttConfig: Object;
  config: any;
  constructor(private http: HttpClient) {
    this.init();
  }
  getAppAgencies(): any {
    if (this.config)
      return this.config['agencies'];
  }
  getServerURL(): any {
    if (this.config)
      return this.config['serverURL'];
  }
  getMaxMarkers(): any {
    if (this.config)
      return this.config['maxMarkers'];

  }
  getTTData(ref?, agencyId?, groupId?, routeId?) {
    var res: any = this.ttConfig;
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
      return res;
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
    return res;
  }

  getMapPosition(): any {
    return {
      lat: this.config['center_map'][0],
      long: this.config['center_map'][1],
      zoom: this.config['zoom_map']
    };
  }
  getAppId(): string {
    return this.appId;
    // return this.config['appId'];
  }
  getHomeButtons(): Promise<any> {
    if (this.config)
      return Promise.resolve(this.config["visualization"]["primaryLinks"])
    else {
      return this.init().then(res => {
        return Promise.resolve(res["visualization"]["primaryLinks"]);
      })
    }
  }
  init(): Promise<any> {
    return this.http.get("assets/trasporti/configuration/config.json").toPromise().then(response => {
      this.config = response;
      return Promise.resolve(this.config);
    }, err => {
    })
  }
  getTtJsonConfig(): Promise<any> {
    if (this.ttConfig) {
      return Promise.resolve(this.ttConfig);
    }
    return this.http.get("assets/trasporti/data/tt.json").toPromise().then(response => {
      this.ttConfig = response;
      return Promise.resolve(this.ttConfig);
    }, err => {
    })
  }
}
