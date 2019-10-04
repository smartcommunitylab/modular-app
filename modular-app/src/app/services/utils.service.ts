import { Injectable } from '@angular/core';
import {  ToastController, LoadingController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  urlMappa = 'https://www.google.com/maps/search/?api=1&query=';
  pattern = /^((http|https|ftp):\/\/)/;

  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private socialSharing: SocialSharing,
    private translate: TranslateService) {}

  openAddressMap(address) {
    window.open(encodeURI(this.urlMappa + address), '_system');
  }

  async showToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 10000
    });
    return await loading.present();
  }
  hideLoading() {
    this.loadingController.dismiss();
  }

  openUrl(value: any): any {
    if (!this.pattern.test(value)) {
      value = 'https://' + value;
    }
    window.open(value, `_system`);

  }
  openShare(value: any): any {
    const object = JSON.parse(value);
    const text = object.title;
    const imgUrl = object.image;
    const webUrl = object.url;
    this.socialSharing.share(text, text, imgUrl, webUrl);
  }

  openContact(data: any) {
    switch (data.type) {
      case 'phone': {
        window.open('tel:' + data.value, '_system');
        break;
      }
      case 'share': {
        this.openShare(data.value);
        break;
      }
      case 'address': {
        this.openAddressMap(data.value);
        break;
      }
      case 'url': {
        this.openUrl(data.value);
        break;
      }
    }
  }



  convertObject(data: any, i18nFields?: string[], plainFields?: string[]): any {
    const res = {};
    if (i18nFields) {
      i18nFields.forEach((f) => {
        if (data[f]) {
          if (data[f][this.translate.currentLang]) {
            res[f] = data[f][this.translate.currentLang];
          } else {
            res[f] = data[f][this.translate.defaultLang || 'it'];
          }
        }
      });
      if (plainFields) {
        plainFields.forEach((f) => {
          if (data[f]) {
            res[f] = data[f];
          }
        });
      }
    }
    return res;
  }

}

