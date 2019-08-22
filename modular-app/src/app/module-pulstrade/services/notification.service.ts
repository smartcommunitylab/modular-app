import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/services/config.service';
import { MapService } from './map.service';
import { start } from 'repl';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  private language: string; /** Actived language */
  private activedNots: any = []; /** Actived notifications */
  private notifiedStreets: any = []; /** Streets that will be notified */
  private streets: any = []; /** General street object */
  constructor(
    private notify: LocalNotifications,
    private platform: Platform,
    private translate: TranslateService,
    private config: ConfigService,
    private map: MapService
  ) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
    var startingNot = this.getNotStreets()
    if (startingNot)
      this.notifiedStreets = startingNot;
    this.streets = this.map.getData();
    this.buildActived();
    this.checkIfFurtherCleanings();
  }

  /**
   * Schedule notifications based on `cleaningDay` property.
   * It saves the single street object to `LocalStorage` as a JSON string, it will be used for automatic scheduling
   * and for the management page view
   * @param street `Array` of street objects, it could be also one single element
   */
  public setNotification(street) {
    // street.forEach(s => this.notifiedStreets.push(s));
    this.notifiedStreets.push(street);
    localStorage.setItem('ps-st-not', JSON.stringify(this.notifiedStreets));
    this.platform.ready().then(() => {
      /** Get translations */
      this.translate.get('IN-CLEANING').subscribe(tr => {
        // const tmp = new Date(new Date().getTime() + 20000).getTime(); // SOLO PER DEBUG; DA TOGLIERE

        const noti = [];
        var today = new Date().getTime();
        if (today < street.cleaningDay) {
          if (!this.checkIfNotify(street.idNumber, street.cleaningDay)) {
            noti.push({
              id: street.idNumber,
              text: `${tr} ${street.streetName}`,
              data: street.streetName,
              vibrate: true,
              trigger: street.cleaningDay
            });
          }
        }
        // street.forEach(s => {
        //   if (!this.checkIfNotify(s.idNumber, s.cleaningDay)) {
        //     noti.push({
        //       id: s.idNumber,
        //       text: `${tr} ${s.streetName}`,
        //       data: s.streetName,
        //       vibrate: true,
        //       trigger: { at: tmp } // new Date(s.cleaningDay).getTime() }
        //     });
        //   }
        // });
        /** Schedule notifications */
        this.notify.schedule(noti);
        /** Build array for localstorage */
        this.buildActived();
      });
    });
  }
  updateNotification(streets): any {
    var notification = this.getNotStreets();
    //check if notification are more recent
    console.log(JSON.stringify(notification));
  }
  /**
   * Disable notifications and delete streets from `LocalStorage`
   * @param street streets object
   */
  public disableNotification(street) {
    // street.forEach(s => {
    let id = this.notifiedStreets.findIndex(n => n.idNumber === street.idNumber);
    if (id >= 0) {
      this.notifiedStreets.splice(id, 1);
    }
    // });

    localStorage.setItem('ps-st-not', JSON.stringify(this.notifiedStreets));
    this.notify.clear(street.idNumber);
  }
  /**
   * Build the internal variable `activedNots` made by scheduled notifications
   */
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
  /**
   * @return Actived notifications
   */
  public getNotifications() {
    return this.activedNots;
  }
  /**
   * Read `LocalStorage` and return street object
   * @return Streets object of scheduled notifications
   */
  public getNotStreets(): any[] {
    return JSON.parse(localStorage.getItem('ps-st-not'));
  }
  /**
   * Check if that notification is already scheduled.
   * @param id Street ID
   * @param date Trigger notification date
   */
  public checkIfNotify(id: number, date: number): boolean {
    this.activedNots.forEach(n => {
      if (n.id === id && n.trigger.at === date) {
        return true;
      }
    });
    return false;
  }
  /**
   * Automatic scheduling for further cleanings.
   * It checks if in the main `streets` array there is a new cleaning-instance for saved streets.
   * If yes, it will schedule a new notification
   */
  private checkIfFurtherCleanings() {
    if (this.streets && this.streets.lenth > 0)
      this.streets.forEach(s => {
        this.getNotStreets().forEach(n => {
          if (s.idNumber === n.idNumber) {
            if (n.cleaningDay > (new Date().getTime())) {
              this.setNotification(s);
            }
          }
        });
      });
  }
}
