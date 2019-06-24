import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notify: LocalNotifications, private platform: Platform) {
   }


  public setNotification(street) {
    this.platform.ready().then(() => {
      street.forEach(s => {
        this.notify.schedule({
          id: s.idNumber,
          text: 'Strada in pulizia',
          data: s.streetName,
          trigger: { at: new Date(s.cleaningDay) }
        });
      });
    });
  }
  public disableNotification(street) {
    this.platform.ready().then(() => {
      street.forEach(s => {
       // this.notify.cancel(s.idNumber);
        this.notify.clear(s.idNumber);
      });
    });
  }
  public getNotifications() {
    this.platform.ready().then(() => {
      this.notify.getAllScheduled().then(data => {
        console.log(data);
      });
    });
  }
}
