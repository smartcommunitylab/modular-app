import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private appModuleName: string = "app-module";


  private defaultPosition = {
    lat: 46.0748,
    long: 11.1217
  }
  getDefaultPos(): any {
    return this.defaultPosition;
  }
  getAppModuleName(): string {
    return this.appModuleName;
  }
  constructor(private toastController: ToastController, private loadingController: LoadingController) { }
  async showErrorConnectionMessage(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      // spinner: null,
      // message: `<img src="assets/animation/loading.gif" />`,
      // cssClass: 'custom-loading',
      duration: 10000
    });
    return await loading.present();
  }
  hideLoading() {
    this.loadingController.dismiss()
  }
}
