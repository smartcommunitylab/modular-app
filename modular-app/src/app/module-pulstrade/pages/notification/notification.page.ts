import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { NotificationService } from '../../services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/services/config.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  streets: any; /** Full streets object */
  language: string; /** Actived language */
  notif: any; /** Notified streets */
  showStreets: any = []; /** Streets object for page view */
  constructor(
    private notSrv: NotificationService,
    private translate: TranslateService,
    private config: ConfigService,
    private mapSrv: MapService,
    private platform: Platform
  ) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
  }

  ngOnInit() {
    this.notif = this.notSrv.getNotStreets();
    this.streets = this.mapSrv.getData();
    this.buildShowNot();
  }

  /**
   * Build unique streets elements, and put them in `showStreets`
   */
  buildShowNot() {
    let tmp = [];
    this.notif.forEach(s => {
      if (tmp.filter(t => t.streetName === s.streetName ).length === 0) {
        tmp.push(s);
      }
    });
    this.showStreets = tmp;
  }
  /**
   * Enable or disable notifications for the choosen street.
   * It also manipulates DOM for dynamic visualization.
   * @param event `Click` event on ion-toggle
   */
  toggle(event) {
    this.platform.ready().then(() => {
      let element, toggle: any;
      const street = this.streets.filter(function (val) {
        return val.streetName === event.detail.value;
      });
      if (event.detail.checked) {
        street.forEach(s => {
          element = document.getElementById('not-' + s.idNumber);
          toggle = document.getElementById('tog-' + s.idNumber);
          this.notSrv.setNotification(street); /** Enable Notification */
          element.style.color = 'green';
          this.translate.get('NOTIFY-ENA').subscribe(x => {
            element.innerHTML = x;
          });
          toggle.checked = true;
        });
      } else {
        street.forEach(s => {
          element = document.getElementById('not-' + s.idNumber);
          toggle = document.getElementById('tog-' + s.idNumber);
          this.notSrv.disableNotification(street); /** Disable Notification */
          element.style.color = '#737373';
          this.translate.get('NOTIFY-DIS').subscribe(x => {
            element.innerHTML = x;
          });
          toggle.checked = false;
        });
      }
    });
  }
}