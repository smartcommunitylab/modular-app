import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private appModuleName: string = "app-module";



  constructor(private loadingController: LoadingController, private toastController:ToastController) { }
  async presentLoading() {
    const loading = await this.loadingController.create({
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
  async showErrorConnectionMessage(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
