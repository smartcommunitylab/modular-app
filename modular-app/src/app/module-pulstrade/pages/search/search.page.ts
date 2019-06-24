import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/services/config.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MapService } from '../../services/map.service';
import { DatePipe } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

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
    private mapSrv: MapService,
    private datePipe: DatePipe,
    private notificationSrv: NotificationService,
    private route: ActivatedRoute
  ) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
    this.myPos = window[this.config.getAppModuleName()]['geolocation'];
  }

  ngOnInit() {
    this.streets = this.mapSrv.getData();
    this.streets.forEach(s => {
      s.cleaningDayStr = this.datePipe.transform(s.cleaningDay, 'dd/MM/yyyy');
      let tmp = new Date(s.stopStartingTime).toLocaleTimeString().split(':');
      s.stopStartingTimeStr = `${tmp[0]}:${tmp[1]}`;
      tmp = new Date(s.stopEndingTime).toLocaleTimeString().split(':');
      s.stopEndingTimeStr = `${tmp[0]}:${tmp[1]}`;
      s.centralCoordStr = JSON.stringify(s.centralCoords);
      s.idNumber = Math.floor(Math.random() * 10000000);
    });

    try {
      this.route.queryParams
        .subscribe(params => {
          this.search(params.street);
        });
    } catch { }
  }

  search(input: any) {
    let val;
    if (input) {
      if (input.detail) {
        val = input.detail.target.value;
      } else {
        val = input;
      }
      if (val === '') {
        this.showStreets = [];
      } else {
        this.showStreets = this.streets.filter(function (el) {
          return (el.streetName.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
      }
    }
  }

  showInMap(coord) {
    this.router.navigate(['/ps'], { queryParams: { coord: JSON.stringify(coord) } });
  }

  toggle(event) {
    let element, toggle: any;
    const street = this.streets.filter(function (val) {
      return val.streetName === event.detail.value;
    });
    if (event.detail.checked) {
      street.forEach(s => {
        element = document.getElementById('not-' + s.idNumber);
        toggle = document.getElementById('tog-' + s.idNumber);
        this.notificationSrv.setNotification(street);
        element.style.color = 'green';
        this.translate.get('NOTIFY-ENA').subscribe(s => {
          element.innerHTML = s;
        });
        toggle.checked = true;
      });
    } else {
      street.forEach(s => {
        element = document.getElementById('not-' + s.idNumber);
        toggle = document.getElementById('tog-' + s.idNumber);
        this.notificationSrv.disableNotification(street);
        element.style.color = '#737373';
        this.translate.get('NOTIFY-DIS').subscribe(s => {
          element.innerHTML = s;
        });
        toggle.checked = false;
      });
    }
  }
}
