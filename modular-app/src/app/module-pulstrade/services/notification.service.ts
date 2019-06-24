import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notify: LocalNotifications) { }

  public setNotification(street) {
    street.forEach(s => {
      this.notify.schedule({
        id: s.idNumber,
        text: 'Strada in pulizia',
        data: s.streetName,
        trigger: {at: new Date(s.cleaningDay)}
      });
    });
  }
  public disableNotification(street) {
    street.forEach(s => {
      this.notify.cancel(s.idNumber);
      this.notify.clear(s.idNumber);
    });
  }
  public getNotifications() {
    this.notify.getAllScheduled().then(data => {
      console.log(data);
    });
  }
}
