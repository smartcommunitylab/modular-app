import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/services/config.service';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private language: string;
  private activedNots: any = [];
  constructor(
    private notify: LocalNotifications,
    private platform: Platform,
    private translate: TranslateService,
    private config: ConfigService
  ) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
    this.notify.on('schedule').subscribe((n) => {
      console.log('Notifica', n);
    });
    this.buildActived();
  }

  public setNotification(street) {
    // console.log(street)
    this.platform.ready().then(() => {
      this.translate.get('IN-CLEANING').subscribe(tr => {
        const tmp = new Date(new Date().getTime() + 20000).getTime();
        const noti = [];
        street.forEach(s => {
          if (!this.checkIfNotify(s.idNumber, s.cleaningDay)) {
            noti.push({
              id: s.idNumber,
              text: tr,
              data: s.streetName,
              vibrate: true,
              trigger: { at: new Date(new Date().getTime() + 30000000).getTime() } // new Date(s.cleaningDay).getTime() }
            });
          }
        });
        this.notify.schedule(noti);
        this.buildActived();
      });
    });
  }
  public disableNotification(street) {
    this.platform.ready().then(() => {
      street.forEach(s => {
        this.notify.clear(s.idNumber);
      });
    });
  }
  private buildActived() {
    this.platform.ready().then(() => {
      this.notify.getScheduledIds().then((data) => {
        data.forEach(n => {
          this.notify.get(n).then((not) => {
            this.activedNots.push(not);
          });
        });
      });
    });
  }
  public getNotifications() {
    return this.activedNots;
  }
  public checkIfNotify(id: number, date: number): boolean {
   // this.buildActived();
   console.log(this.activedNots);
    this.activedNots.forEach(n => {
      if (n.id === id && n.trigger.at === date) {
        return true;
      }
    });
    return false;
  }
}
