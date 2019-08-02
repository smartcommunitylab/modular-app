import { Injectable } from '@angular/core';
import {  ToastController } from '@ionic/angular';
// import { LoadingModalComponent } from '../shared/loading-modal/loading-modal/loading-modal.component';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private toastController: ToastController/*, private loadingModal: LoadingModalComponent*/) { }
  async showToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  async showSpinner(): Promise<any> {
    // this.loadingModal.show();

    // setTimeout(() => {
    //     this.loadingModal.hide();
    // }, 2000);
    }
}
