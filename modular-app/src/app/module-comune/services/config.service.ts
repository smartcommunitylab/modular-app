import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private appModuleName = 'app-module';
  private defaultPosition = {
    lat: 46.0748,
    long: 11.1217
  };
  private menu = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    }
  ];
  constructor() {}

  init() {
    localStorage.setItem('comune-menu-', JSON.stringify(this.menu));

  }
  getStringContacts(translate, language): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      translate.get('phone_contacts').subscribe((p: string) => {
        const phone = p;

        const address = translate.instant('address_contacts');
        const url = translate.instant('url_contacts');
        const share = translate.instant('share_contacts');
        const contacts = JSON.stringify({
          'phone': phone,
          'address': address,
          'url': url,
          'share': share
        });
        resolve(contacts);
      });
    });
  }
  getAppModuleName(): string {
    return this.appModuleName;
  }
  getDefaultPosition() {
    return this.defaultPosition;
  }
}
