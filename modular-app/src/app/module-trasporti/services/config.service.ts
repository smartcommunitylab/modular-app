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
    return this.config['agencies'];
  }
  getServerURL(): any {
    return this.config['serverURL'];
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
    return this.http.get("assets/module-trasporti/configuration/config.json").toPromise().then(response => {
      this.config = response;
      return Promise.resolve(this.config);
    }, err => {
    })
  }
  getTtJsonConfig(): Promise<any> {
    if (this.ttConfig) {
      return Promise.resolve(this.ttConfig);
    }
    return this.http.get("assets/module-trasporti/data/tt.json").toPromise().then(response => {
      this.ttConfig = response;
      return Promise.resolve(this.ttConfig);
    }, err => {
    })
  }
}
