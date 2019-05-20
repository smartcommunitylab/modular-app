import { Injectable } from '@angular/core';
import { load } from '@angular/core/src/render3';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private appModuleName: string = "app-module";
  private menu: any;
  private carousel: any;
  private moduleEntries: any;

  constructor(private http: HttpClient) { }

  Init(): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      //load menus from json files
      this.loadMenu();
      this.loadCarousel()
      this.loadModuleEntries()
      resolve();
    })
  }


  loadMenu(): Promise<any> {
    if (this.menu) {
      return Promise.resolve(this.menu);
    }
    var promise = new Promise((resolve, reject) => {
      console.log("Async Work Complete");
      this.http.get("assets/configuration/side-menu.json").toPromise().then(response => {
        this.menu = response;
        resolve(this.menu);
      });
    });
    return promise;


  };

  getCarousel():any {
    return this.carousel;
  }
  loadCarousel(): any {
    if (this.carousel) {
      return Promise.resolve(this.carousel);
    }
    this.http.get("assets/configuration/carousel.json").toPromise().then(response => {
      this.carousel = response;
    });
  }
  getModuleEntries():any {
    return this.moduleEntries;
  }
  loadModuleEntries(): any {
    if (this.moduleEntries) {
      return Promise.resolve(this.moduleEntries);
    }
    this.http.get("assets/configuration/module-entries.json").toPromise().then(response => {
      this.moduleEntries = response;
    });
  }
  getAppModuleName(): string {
    return this.appModuleName;
  }



}
