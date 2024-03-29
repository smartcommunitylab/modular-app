import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  getLanguage(): any {
    if (localStorage.getItem('app-module')) {
      var setting = JSON.parse(localStorage.getItem('app-module'));
      var language = setting.language;
      if (language)
        return language
    }
    return 'it';
  }
  private appModuleName: string = "app-module";
  getAppModuleName(): any {
    return this.appModuleName
  }


  appId = 'trento';
  ttConfig: Object;
  config: any;
  constructor(private http: HttpClient) {
    
  }
  getAppAgencies(): any {
    return environment.agencies;
  }
  getServerURL(): any {
    return environment.serverURL;
  }
  getMobilityDataURL(): any {
    return environment.mobilityDataURL;
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
      lat: environment.center_map[0],
      long: environment.center_map[1],
      zoom: environment.zoom_map
    };
  }
  getAppId(): string {
    return this.appId;
    // return this.config['appId'];
  }
  getHomeButtons(): Promise<any> {
      return Promise.resolve(environment.visualization["primaryLinks"]);
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
