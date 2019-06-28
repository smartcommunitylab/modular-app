import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/services/config.service';
import { MapService } from './map.service';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private language: string;
  private activedNots: any = [];
  private notifiedStreets: any = [];
  private streets: any = [];
  constructor(
    private notify: LocalNotifications,
    private platform: Platform,
    private translate: TranslateService,
    private config: ConfigService,
    private map: MapService
  ) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
    this.streets = this.map.getData();
    this.buildActived();
    this.checkIfFurtherCleanings();
  }

  public setNotification(street) {
    street.forEach(s => this.notifiedStreets.push(s));
    localStorage.setItem('ps-st-not', JSON.stringify(this.notifiedStreets));
    this.platform.ready().then(() => {
      this.translate.get('IN-CLEANING').subscribe(tr => {
        const tmp = new Date(new Date().getTime() + 20000).getTime(); // SOLO PER DEBUG; DA TOGLIERE
        const noti = [];
        street.forEach(s => {
          if (!this.checkIfNotify(s.idNumber, s.cleaningDay)) {
            noti.push({
              id: s.idNumber,
              text: `${tr} ${s.streetName}`,
              data: s.streetName,
              vibrate: true,
              trigger: { at: tmp } // new Date(s.cleaningDay).getTime() }
            });
          }
        });
        this.notify.schedule(noti);
        this.buildActived();
      });
    });
  }
  public disableNotification(street) {

    street.forEach(s => {
      let id = this.notifiedStreets.findIndex(n => n.streetName === s.streetName);
      console.log(id)
      if(id){
        this.notifiedStreets.splice(id, 1);
      }
    });

    localStorage.setItem('ps-st-not', JSON.stringify(this.notifiedStreets));
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
  public getNotStreets(): any[] {
    return JSON.parse(localStorage.getItem('ps-st-not'));
  }
  public checkIfNotify(id: number, date: number): boolean {
    this.activedNots.forEach(n => {
      if (n.id === id && n.trigger.at === date) {
        return true;
      }
    });
    return false;
  }
  private checkIfFurtherCleanings() {
    this.streets.forEach(s => {
      this.getNotStreets().forEach(n => {
        if (s.streetName === n.streetName) {
          if (n.cleaningDay > (new Date().getTime())) {
            this.setNotification(s);
          }
        }
      });
    });
  }
}
