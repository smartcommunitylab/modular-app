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
        id: s.id,
        text: 'Strada in pulizia',
        data: s.streetName,
        trigger: {at: new Date(s.cleaningDay)}
      });
    });
  }
  public disableNotification(street) {
    street.forEach(s => {
      this.notify.cancel(s.id);
      this.notify.clear(s.id);
    });
  }
}
