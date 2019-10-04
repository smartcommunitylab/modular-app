import { Injectable } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { LoadingController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {



  urlMappa = 'https://www.google.com/maps/search/?api=1&query=';
  pattern = /^((http|https|ftp):\/\/)/;

  constructor(
    private theInAppBrowser: InAppBrowser,
    private loadingController: LoadingController,
    private socialSharing: SocialSharing,
    private translateService: TranslateService) { }
  openAddressMap(address) {
    window.open(encodeURI(this.urlMappa + address), '_system');
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      // spinner: null,
      // message: `<img src='assets/animation/loading.gif' />`,
      // cssClass: 'custom-loading',
      duration: 10000
    });
    return await loading.present();
  }
  hideLoading() {
    this.loadingController.dismiss();
  }
  openUrl(value: any): any {
    if (!this.pattern.test(value)) {
      value = 'http://' + value;
    }
    this.theInAppBrowser.create(value, `_system`);

  }
  openShare(value: any): any {
    const object = JSON.parse(value);
    const text = object.title;
    const imgUrl = object.image;
    const webUrl = object.url;
    this.socialSharing.share(text, text, imgUrl, webUrl);
  }

}
