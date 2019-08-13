import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private defaultPosition = {
    lat: 46.0748,
    long: 11.1217
  }
  getDefaultPos(): any {
    return this.defaultPosition;
  }

  constructor(private toastController: ToastController) { }
  async showErrorConnectionMessage(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
