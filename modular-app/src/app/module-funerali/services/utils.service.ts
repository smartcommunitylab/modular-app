import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private appModuleName: string = "app-module";



  constructor(private loadingController: LoadingController) { }
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
  getAppModuleName(): any {
   return this.appModuleName;
  }
}
