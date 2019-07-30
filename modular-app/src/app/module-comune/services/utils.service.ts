import { Injectable } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  urlMappa = "https://www.google.com/maps/search/?api=1&query=";
  pattern = /^((http|https|ftp):\/\/)/;

  constructor(private theInAppBrowser: InAppBrowser) { }
  openAddressMap(address) {
    window.open(encodeURI(this.urlMappa + address), '_system');
  }
  openUrl(value: any): any {
    let target = "_system";
    if (!this.pattern.test(value)) {
      value = "http://" + value;
    }
    this.theInAppBrowser.create(value, `_system`);

  }
  openShare(value: any): any {
    throw new Error("Method not implemented.");
  }


}

