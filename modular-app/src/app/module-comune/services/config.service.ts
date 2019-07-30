import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private appModuleName: string = "app-module";
  private defaultPosition = {
    lat: 0,
    long: 0
  }
  private menu = [
    {
      title: "Home",
      url: "/home",
      icon: "home"
    }
  ]
  constructor() {

  }
  init() {
    localStorage.setItem('comune-menu-', JSON.stringify(this.menu));

  }
  getStringContacts(translate,language): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      translate.get('phone_contacts').subscribe((phone: string) => {
        var phone = phone;

        const address = translate.instant('address_contacts');
        const url = translate.instant('url_contacts');
        const share = translate.instant('share_contacts');
        var contacts = JSON.stringify({
          "phone": phone,
          "address": address,
          "url":url,
          "share":share
        })
        resolve(contacts)
      });
    })
  }
  getAppModuleName(): string {
    return this.appModuleName;
  }
  getDefaultPosition() {
    return this.defaultPosition;
  }
}
