import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/services/config.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MapService } from '../../services/map.service';
import { DatePipe } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
import { Platform } from '@ionic/angular';

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
  notif: any;
  showStreets: any = [];
  constructor(private translate: TranslateService,
    private config: ConfigService,
    private notSrv: NotificationService,
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
    
  }

  convertToMapId(array: any[]): any {
    var map = {}
    if (array)
      array.forEach(el => {
        map[el.streetName] = el;
      })
    return map;
  }

  /**
   * Set searchbar focus
   */
  ionViewDidEnter() {
    const el = document.querySelector('ion-searchbar');
    if (el) {
      el.setFocus();
    }
    this.notif = this.convertToMapId(this.notSrv.getNotStreets());
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
          this.search(params.street);
        });
    } catch { }
  }

  /**
   * Search streets and put them in `showStreets` object
   * @param input `(change)` event
   */
  typingTimer;                //timer identifier
  doneTypingInterval = 500;  //time in ms, 5 second for example
  search(input: any) {
    let val;
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      if (input) {
        if (input.detail) {
          val = input.detail.target.value;
        } else {
          val = input;
        }
        if (val === '') {
          this.showStreets = [];
        } else {
          if (this.streets) {
            this.showStreets = this.streets.filter((el) => {
              return (el.streetName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            this.showStreets = this.getUnique(this.showStreets, 'streetCode')
          }

        }
      }
    }, this.doneTypingInterval);
  }
  getUnique(arr, comp) {

    const unique = arr
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e]).map(e => arr[e]);

    return unique;
  }

  toggleNotification(street) {
    if (this.notif[street.streetName]!=undefined) {
      this.notificationSrv.disableNotification(street);
    } else {
      this.notSrv.setNotification(street);
    }
    this.notif = this.convertToMapId(this.notSrv.getNotStreets());
  }
  isEnabled(street) {
    return this.notif[street.streetName]!=undefined
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
