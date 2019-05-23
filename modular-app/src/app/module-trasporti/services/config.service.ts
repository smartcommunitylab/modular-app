import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config: any;
  constructor(private http: HttpClient) {
    this.init();
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
}
