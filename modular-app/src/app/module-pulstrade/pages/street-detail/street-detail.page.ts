import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/services/config.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MapService } from '../../services/map.service';
import { DatePipe } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
import { Platform } from '@ionic/angular';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-street-detail',
  templateUrl: './street-detail.page.html',
  styleUrls: ['./street-detail.page.scss'],
})
export class StreetDetailPage implements OnInit {
  language: string;
  myPos: any;
  streets: any;
  streetDetails: any = [];
  notif: any;
  streetName: any;
  idNumber: any;
  constructor(private translate: TranslateService,
    private config: ConfigService,
    private router: Router,
    private mapSrv: MapService,
    private datePipe: DatePipe,
    private notSrv: NotificationService,
    private route: ActivatedRoute,
    private platform: Platform
  ) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
    this.myPos = window[this.config.getAppModuleName()]['geolocation'];
  }

  ngOnInit() {
    this.streets = this.mapSrv.getData();
    this.notif = this.convertToMapId(this.notSrv.getNotStreets());

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
          this.idNumber = params.street;
          this.search(params.street);
        });
    } catch { } 
  }

  convertToMapId(array: any[]): any {
    var map = {}
    if (array)
      array.forEach(el => {
        if (el && el.idNumber)
          map[el.idNumber] = el;
      })
    return map;
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
        this.streetDetails = [];
      } else {
        if (this.streets) {
          this.streetDetails = this.streets.filter((el) => {
            return (String(el.idNumber) === val);
          });
          if (this.streetDetails && this.streetDetails.length > 0)
            this.streetName = this.streetDetails[0].streetName;

          //  this.streetDetails = this.getUnique(this.streetDetails, 'streetCode')
        }

      }
    }
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
  toggleNotification() {
    var street = this.notif[this.idNumber];
    if (this.notif[this.idNumber] != undefined) {
      this.streetDetails.forEach(element => {
        this.notSrv.disableNotification(element);
      })
    } else {
      this.streetDetails.forEach(element => {
        this.notSrv.setNotification(element);
      })
    }
    this.notif = this.convertToMapId(this.notSrv.getNotStreets());
  }
  isEnabled() {
    if (this.streetName)
      return this.notif[this.idNumber] != undefined
  }
  /**
   * Go to map page with specified coordinates
   * @param coord Street coordinates
   */
  showInMap(coord) {
    this.router.navigate(['/ps'], { queryParams: { coord: JSON.stringify(coord) } });
  }


}
