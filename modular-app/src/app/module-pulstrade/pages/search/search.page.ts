import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/services/config.service';
import { Router } from '@angular/router';
import { GeoService } from 'src/app/services/geo.service';
import { MapService } from '../../services/map.service';
import { DatePipe } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  providers: [DatePipe]
})
export class SearchPage implements OnInit {

  language: string;
  myPos: any;
  streets: any;
  showStreets: any = [];
  constructor(private translate: TranslateService,
    private config: ConfigService,
    private router: Router,
    private geo: GeoService,
    private mapSrv: MapService,
    private datePipe: DatePipe,
    private notificationSrv: NotificationService
  ) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
    this.myPos = window[this.config.getAppModuleName()]['geolocation'];
  }

  ngOnInit() {
    console.clear();
    this.streets = this.mapSrv.getData();
    this.streets.forEach(s => {
      s.cleaningDayStr = this.datePipe.transform(s.cleaningDay, 'dd/MM/yyyy');
      let tmp = new Date(s.stopStartingTime).toLocaleTimeString().split(':');
      s.stopStartingTimeStr = `${tmp[0]}:${tmp[1]}`;
      tmp = new Date(s.stopEndingTime).toLocaleTimeString().split(':');
      s.stopEndingTimeStr = `${tmp[0]}:${tmp[1]}`;
      s.centralCoordStr = JSON.stringify(s.centralCoords);
    });
  }

  search(input: any) {
    const val = input.detail.target.value;
    if (val === '') {
      this.showStreets = [];
    } else {
      this.showStreets = this.streets.filter(function (el) {
        return (el.streetName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  showInMap(coord) {
    this.router.navigate(['/ps'], { queryParams: { coord: JSON.stringify(coord) }});
  }

  toggle(event) {
    let element, toggle: any;
    const street = this.streets.filter(function(val) {
      return val.streetName === event.detail.value;
    });
    if (event.detail.checked) {
      street.forEach(s => {
        element =  document.getElementById('not-' + s.id);
        toggle = document.getElementById('tog-' + s.id);
        this.notificationSrv.setNotification(street);
        element.style.color = 'green';
        element.innerHTML = 'Notifiche Abilitate';
        toggle.checked = true;
      });
    } else {
      street.forEach(s => {
        element =  document.getElementById('not-' + s.id);
        toggle = document.getElementById('tog-' + s.id);
        this.notificationSrv.disableNotification(street);
        element.style.color = '#737373';
        element.innerHTML = 'Notifiche Disabilitate';
        toggle.checked = false;
      });
    }
  }
}
