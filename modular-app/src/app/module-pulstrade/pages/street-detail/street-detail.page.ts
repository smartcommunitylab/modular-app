import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/services/config.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MapService } from '../../services/map.service';
import { DatePipe } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-street-detail',
  templateUrl: './street-detail.page.html',
  styleUrls: ['./street-detail.page.scss'],
})
export class StreetDetailPage implements OnInit {
  language: string;
  myPos: any;
  streets: any;
  showStreets: any = [];
  constructor(private translate: TranslateService,
    private config: ConfigService,
    private router: Router,
    private mapSrv: MapService,
    private datePipe: DatePipe,
    private notificationSrv: NotificationService,
    private route: ActivatedRoute,
    private platform: Platform
  ) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
    this.myPos = window[this.config.getAppModuleName()]['geolocation'];
  }

  ngOnInit() {
    this.streets = this.mapSrv.getData();
    /** Add DateTimes in string format */
    if (this.streets)
      this.streets.forEach(s => {
        s.cleaningDayStr = this.datePipe.transform(s.cleaningDay, 'dd/MM/yyyy');
        let tmp = new Date(s.stopStartingTime).toLocaleTimeString().split(':');
        s.stopStartingTimeStr = `${tmp[0]}:${tmp[1]}`;
        tmp = new Date(s.stopEndingTime).toLocaleTimeString().split(':');
        s.stopEndingTimeStr = `${tmp[0]}:${tmp[1]}`;
        s.centralCoordStr = JSON.stringify(s.centralCoords);
        s.idNumber = parseInt(s.streetCode.replace(/\_/g, ''), 10);
      });

    /** Parse URL params */
    try {
      this.route.queryParams
        .subscribe(params => {
          // this.search(params.street);
        });
    } catch { }
  }



  toggleNotification(street) {

  }
  isEnabled(street) {
    return true
  }
  /**
   * Go to map page with specified coordinates
   * @param coord Street coordinates
   */
  showInMap(coord) {
    this.router.navigate(['/ps'], { queryParams: { coord: JSON.stringify(coord) } });
  }

  /**
   * Enable or disable notifications
   * @param event `click` event
   */
  toggle(event) {
    this.platform.ready().then(() => {
      let element, toggle: any;
      if (this.streets) {
        const street = this.streets.filter(function (val) {
          return val.streetName === event.detail.value;
        });
        if (event.detail.checked) {
          street.forEach(s => {
            element = document.getElementById('not-' + s.idNumber);
            toggle = document.getElementById('tog-' + s.idNumber);
            this.notificationSrv.setNotification(street);
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
            this.notificationSrv.disableNotification(street);
            element.style.color = '#737373';
            this.translate.get('NOTIFY-DIS').subscribe(x => {
              element.innerHTML = x;
            });
            toggle.checked = false;
          });
        }
      }
    });

  }
}
