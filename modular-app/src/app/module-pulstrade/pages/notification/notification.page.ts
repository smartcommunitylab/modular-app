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

  streets: any;
  language: string;
  notif: any;
  showStreets: any = [];
  constructor(
    private mapSrv: MapService,
    private notSrv: NotificationService,
    private translate: TranslateService,
    private config: ConfigService,
    private platform: Platform
  ) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
  }

  ngOnInit() {
    this.streets = this.mapSrv.getData();
    this.notif = this.notSrv.getNotifications();
    this.buildShowNot();
  }
  printData() {
    console.log(this.notif);
  }

  buildShowNot() {
      this.notif.forEach(n => {
        this.streets.forEach(s => {
          if (s.idNumber === n.id) {
            this.showStreets.push(s);
            return;
          }
        });
        // console.log(tmp, n.data.replace(/\"/g, ''))
      });
      console.log(this.showStreets);
  }
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
          this.notSrv.setNotification(street);
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
          this.notSrv.disableNotification(street);
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
