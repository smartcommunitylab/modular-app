import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const CHOOSEN_KEY: string = "choosen";
const MODULE_ENTRIES_KEY: string = "moduleEntries";

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  private appModuleName: string = "app-module";
  private menu: any;
  private carousel: any;
  private moduleEntries: any;
  private allModuleEntries: any;
  private defaultPosition= {
    lat:0,
    long:0
  }
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
  getDefaultPosition() {
    return this.defaultPosition;
  }
  setChoosen(type) {
    localStorage.setItem(CHOOSEN_KEY, type);

  }
  getChoosen(): string {
    return localStorage.getItem(CHOOSEN_KEY);
  }
  chooseProfile(type): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      this.setDefaultHome(type).then(() => {
        this.setChoosen(type);
        resolve();

      }, error => {
        reject();
      })
    })
  }
  setDefaultHome(type: any): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      //read profile from local json file e set localStorage
      this.moduleEntries = JSON.parse(localStorage.getItem(MODULE_ENTRIES_KEY));
      if (!this.moduleEntries) {
        this.http.get("assets/configuration/default-profiles-module.json").toPromise().then(response => {
          this.storeModuleEntries(response[type]);
          resolve();
        }, errror => {
          reject();
        });
      }
      else {
        resolve();
      }
    });

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

  getCarousel(): any {
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
  getModuleEntries(): any {
    return this.moduleEntries;
  }
  loadModuleEntries(): any {
    if (this.moduleEntries) {
      return Promise.resolve(this.moduleEntries);
    }
    //load stored from localstorage
    this.moduleEntries = JSON.parse(localStorage.getItem(MODULE_ENTRIES_KEY))

  }
  storeModuleEntries(entries: any) {
    this.moduleEntries = entries;
    localStorage.setItem(MODULE_ENTRIES_KEY, JSON.stringify(entries));

  }
  getAllModuleEntries(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.allModuleEntries) {
        resolve(this.allModuleEntries);
      }
      this.http.get("assets/configuration/module-entries.json").toPromise().then(response => {
        this.allModuleEntries = response;
        resolve(this.allModuleEntries);
      }, err => {
        reject()
      });
    })

  }
  getAppModuleName(): string {
    return this.appModuleName;
  }



}
