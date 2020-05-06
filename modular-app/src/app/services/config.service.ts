import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as moment from 'moment';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
const CHOOSEN_KEY: string = "choosen";
const MODULE_ENTRIES_KEY: string = "moduleEntries";

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  expiringDate = '20-09-2019'
  // version = 'test';
  version = 'prod';
  numberVersion = '2.0.1';
  carouselUrl = 'https://cit.platform.smartcommunitylab.it/comuneintasca-multi/highlights/TrentoInTasca';
  private appModuleName: string = "app-module";
  private menu: any;
  private carousel: any;
  private moduleEntries: any;
  private allModuleEntries: any;
  private defaultPosition = {
    lat: 46.0748,
    long: 11.1217
  }
  constructor(private http: HttpClient, private alertController: AlertController, private platform: Platform) { }

  async showPopUpExpired(): Promise<any> {
    const alert = await this.alertController.create({
      header: 'La versione di test è scaduta',
      message: 'Questa applicazione di test è scaduta il ' + this.expiringDate,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            navigator['app'].exitApp();
          }
        }]
    }
    );

    await alert.present();
  }
  async showPopupExpiring(): Promise<any> {
    const alert = await this.alertController.create({
      header: 'La versione di test sta scadendo',
      message: 'Questa applicazione di test  scadrá il ' + this.expiringDate,
      buttons: ['OK']
    });

    await alert.present();
  }
  isExpired(): any {
    var today = moment()
    var expiringDate = moment(this.expiringDate, 'DD-MM-YYYY');
    if (expiringDate.isBefore(today))
      return true;
    return false

  }
  getNumberVersion() {
    return this.numberVersion;
  }
  getVersion(): any {
    return this.version;
  }


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

  getCarousel(): Promise<any> {
    if (this.carousel)
    return  Promise.resolve(this.carousel);
    else  return this.loadCarousel()
  }
  loadCarousel(): any {
    let params = new HttpParams().set('profile', this.getChoosen())
    console.log("load carousel");
    if (this.carousel) {
      return Promise.resolve(this.carousel);
    }
    return this.http.get(this.carouselUrl, { params: params }).toPromise().then(response => {
      console.log("response" + response);

      this.carousel = response;
      return Promise.resolve(this.carousel);
    }, err => {
      return Promise.resolve();});
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
