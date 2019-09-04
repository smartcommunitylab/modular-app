import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/services/config.service';
import { Router, ActivatedRoute } from '@angular/router';
import leaflet from 'leaflet';
import { GeoService } from 'src/app/services/geo.service';
import { MapService } from '../../services/map.service';
import { DatePipe } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { UtilService } from '../../services/util.service';
import { NotificationService } from '../../services/notification.service';
import moment from 'moment';

@Component({
  selector: 'app-home-ps',
  templateUrl: './home-ps.page.html',
  styleUrls: ['./home-ps.page.scss'],
  providers: [DatePipe]
})
export class HomePage implements OnInit {

  language: string; /** Actived language */
  myPos: any = this.util.getDefaultPos();
  past: boolean = true;
  future: boolean = true;
  sideLabel: any;
  trattoLabel: any;
  ; /** Current GPS location */
  streets: any; /** Main street object */
  map: any; /** Leaflet map object */
  selectedDate: Date; /** Selected date */
  showDate: string; /** String based on "selected Date" */
  mapCenter: any; /** Coordinates of map center */
  noCleaning: string;
  noStreetFuture: string;
  noStreetPast: string;
  labelResult: number = 0;
  today: number = new Date().setHours(0, 0, 0, 0);
dailyStreets:any=[];
  forStr: string; to: string; inDateStr: string; noPark: string; inZone: string; details: string;

  private toast: any;
  constructor(private translate: TranslateService,
    private config: ConfigService,
    private router: Router,
    private geo: GeoService,
    private mapSrv: MapService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private util: UtilService,
    private toastCtrl: ToastController,
    private notificationService: NotificationService
  ) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
    /** Get translations for popup */
    this.translate.get('NO-CLEANING').subscribe(s => {
      this.noCleaning = s;
    });
    this.translate.get('FOR').subscribe(s => {
      this.forStr = s;
    });
    this.translate.get('TO').subscribe(s => {
      this.to = s;
    });
    this.translate.get('IN-DATE').subscribe(s => {
      this.inDateStr = s;
    });
    this.translate.get('NO-PARKING-FROM').subscribe(s => {
      this.noPark = s;
    });
    this.translate.get('IN-ZONE').subscribe(s => {
      this.inZone = s;
    });
    this.translate.get('DETAILS').subscribe(s => {
      this.details = s;
    });
    this.translate.get('no_street_future').subscribe(s => {
      this.noStreetFuture = s;
    });
    this.translate.get('no_street_past').subscribe(s => {
      this.noStreetPast = s;
    });
    this.translate.get('side_label').subscribe(s => {
      this.sideLabel = s;
    });
    this.translate.get('tratto_label').subscribe(s => {
      this.trattoLabel = s;
    });
  }
  /**
   * Build center coordinates object `myPos` based on URL params, else use the GPS location
   * @param params URL Params
   */
  parseUrlParams(params) {
    if (Object.keys(params).length > 0 && params.coord) {
      let coord;
      coord = JSON.parse(params.coord);
      console.log(coord);
      this.myPos.lat = coord[0].lat;
      this.myPos.long = coord[0].lng;

    } else
      if (window[this.config.getAppModuleName()]['geolocation']) {
        this.myPos = window[this.config.getAppModuleName()]['geolocation'];
      } else this.myPos = this.util.getDefaultPos()
  }

  /**
   * Set current date, get streets ordered by `cleaningDay` property, build map
   */
  ngOnInit() {
    this.mapSrv.Init().then(() => {
      this.route.queryParams
        .subscribe(params => {
          this.parseUrlParams(params);
          if (!this.selectedDate) {
            this.selectedDate = new Date();
            this.selectedDate.setHours(0, 0, 0, 0);
            this.showDate = this.selectedDate.toISOString();
          }
          if (!this.mapCenter) {
            // if (this.myPos)
            //   this.mapCenter = [this.myPos.lat ? this.myPos.lat : 0, this.myPos.long ? this.myPos.long : 0];
            // else 
            this.mapCenter = this.mapSrv.getDefaultCenter()
          }
          if (!this.streets)
            this.streets = this.mapSrv.getData().sort(function (a, b) {
              return a.cleaningDay - b.cleaningDay;
            });
          if (this.mapSrv.getData()[this.mapSrv.getData().length - 1].cleaningDay < this.selectedDate.getTime()) {
            this.future = false;
          }
          if (!this.map)
            this.buildMap();
          // this.updateNotification(this.streets);
        });
    }, err => {
      this.translate.get('error_init').subscribe(s => {
        this.util.showErrorConnectionMessage(s);
      });
    })

  }
  goToList() {
    this.router.navigate(['list-streets'], { queryParams: { streets: JSON.stringify(this.dailyStreets), date:moment(this.selectedDate).format('DD-MM-YYYY') } });
  }
  updateNotification(streets): any {
    this.notificationService.updateNotification(streets);
  }
  afterFirstDayForward() {
    if (this.selectedDate)
      return this.selectedDate.getTime() > this.today;
    return false
  }
  ionViewDidEnter() {
    setTimeout(() => {
      if (this.map)
        this.map.invalidateSize();
    }, 500);

  }
  /**
   * Reset center map coordinates
   */
  ionViewWillLeave() {
    // this.myPos = {};
    // this.mapSrv.Init().then(() => {
    //   this.route.queryParams
    //     .subscribe(params => {
    //       this.parseUrlParams(params);
    //       this.selectedDate = new Date();
    //       this.showDate = this.selectedDate.toISOString();
    //       if (this.myPos)
    //         this.mapCenter = [this.myPos.lat ? this.myPos.lat : 0, this.myPos.long ? this.myPos.long : 0];
    //       else this.mapCenter = this.mapSrv.getDefaultCenter()
    //       this.streets = this.mapSrv.getData().sort(function (a, b) {
    //         return a.cleaningDay - b.cleaningDay;
    //       });
    //       this.buildMap();
    //     });
    // }, err => {
    //   this.translate.get('error_init').subscribe(s => {
    //     this.util.showErrorConnectionMessage(s);
    //   });
    // })
  }

  /**
   * Go to another page
   * @param path router link
   */
  goToLink(path: string) {
    if (path.indexOf('home-module') > -1) {
      this.router.navigate(['/home-module']);
    } else {
      this.router.navigate([this.router.url + '/' + path]);
    }
  }
  // setFutureAndPast() {

  // }
  /**
   * Build leaflet map, with custom controls and polylines
   */
  buildMap() {
    try { this.map.remove(); } catch { } /** Reset map */
    // const _this = this;
    this.map = new leaflet.Map('home-map', { zoomControl: false, attributionControl: false, dragging: true, tap: false }).setView(this.mapCenter, 14);

    /** Build polyline after drag */
    this.map.on('dragend', (e) => {
      this.mapCenter = [e.target.getCenter().lat, e.target.getCenter().lng];
      this.buildPolyline(this.mapCenter);
      this.glow();

      // _this.setFutureAndPast();
    });
    /** Build polyline after zoom */
    this.map.on('zoomend', (e) => {
      this.mapCenter = [e.target.getCenter().lat, e.target.getCenter().lng];
      this.buildPolyline(this.mapCenter);
      // _this.setFutureAndPast();
      this.glow();
    });

    /** Define marker icon */
    const mainIcon = leaflet.icon({
      iconUrl: 'assets/strade/icons/myMark.png',
      shadowUrl: null,
      iconSize: [40, 40],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    });
    leaflet.marker([this.myPos['lat'], this.myPos['long']], { icon: mainIcon }).addTo(this.map);

    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    /** Add search button to map */
    // this.map.addControl(new searchControl());

    /** Build polylines */
    this.buildPolyline(this.mapCenter);
  }
  glow(): any {
    var runCount = 0;
    var map = document.getElementById("home-map");
    var timerId= setInterval(() => {
      map.classList.toggle("active");
      runCount++;
      if(runCount > 3) clearInterval(timerId);
    },300);
    // setTimeout(() => {
    //   map.classList.toggle("active");
    // },3000);
  }

  locate() {
    this.map.panTo(new leaflet.LatLng(this.myPos.lat, this.myPos.long));

  }
  /**
   * Build polylines, with popup, and add them to map
   * @param center Map center's coordinates
   */
  async buildPolyline(center) {
    this.dailyStreets = [];
    // if (this.toast)
    //   this.toast.dismiss();
    let counter = 0;
    this.labelResult = 0;
    this.past = false;
    this.future = false;
    /** Reset polyline */
    var bounds = this.map.getBounds();

    if (this.map) {
      this.clearPolyline(this.map);
    }
    if (this.streets) {
      /** Check distance from center map and street */
      this.streets.forEach(s => {
        // const dist = this.geo.getDistanceKM(
        //   { lat: center[0], lon: center[1] },
        //   { lat: s.centralCoords[0]['lat'], lon: s.centralCoords[0]['lng'] }
        // );
        s.idNumber = parseInt(s.streetCode.replace(/\_/g, ''), 10);
        var lato = "";
        var tratto = "";
        /** Check if is a 'cleaning day' */
        const inDate = (new Date(this.selectedDate).setHours(0, 0, 0, 0) === new Date(s.cleaningDay).setHours(0, 0, 0, 0));
        const color = (inDate) ? 'red' : 'green';
        if (s.lato)
          lato = `${this.sideLabel}<b> ${s.lato}</b><br/>`
        if (s.note)
          tratto = `${this.trattoLabel} <b>${s.note}</b><br/>`
        /** Build popup content */
        const freeStreetContent =
          `${this.noCleaning} <br/><b>${this.datePipe.transform(this.selectedDate, 'dd/MM/yyyy')}</b> ${this.forStr}<br/>
        <b> ${s.streetName}</b>`;
        const closedStreetContent = `<div style=" display: flex;   justify-content: center;  align-items: center;"> <div style="    margin-right: 8px;"><img src="./assets/strade/icons/divieto.png"></div><div><b>${s.streetName}</b><br/>${this.noPark} <b>${new Date(s.stopStartingTime).getHours()}</b> ${this.to}
        <b> ${new Date(s.stopEndingTime).getHours()}</b> ${this.inDateStr} <br/>
        <b>${this.datePipe.transform(this.selectedDate, 'dd/MM/yyyy')}</b><br/>
        ${lato}
        ${tratto}

        <a style="float:right; margin-top: -5%">${this.details}</a></div></div>`;

        /**
         * Build polyline based on: current day, current zoom, map center
         */
        // if (inDate && ((dist < ((17 % this.map.getZoom()) - 1) || dist < 0.3))) {
        if (inDate && bounds.contains([s.centralCoords[0], s.centralCoords[0]])) {

          this.labelResult++;
          this.dailyStreets.push(s);
          const popupContent = (inDate) ? closedStreetContent : freeStreetContent;

          const polyline = leaflet.polyline(s.polylines, { color: color, weight: 8 }).addTo(this.map);
          const popup = leaflet.popup({ className: `pop-${s.streetName.replace(/\s/g, '')}` }).setContent(popupContent);
          polyline.bindPopup(popup).on('popupopen', (e) => {
            const el = document.getElementsByClassName(`pop-${s.streetName.replace(/\s/g, '')}`)[0].addEventListener('click', () => {
              this.goToDetail(s.idNumber);
            });
          });
          counter++;
        }
        if (!this.past) {
          //se nella regione e ho strade prima prima o sono dopo a oggi metti a true
          if ((new Date(this.selectedDate).setHours(0, 0, 0, 0) > new Date(s.cleaningDay).setHours(0, 0, 0, 0)) && (bounds.contains([s.centralCoords[0], s.centralCoords[0]])) || moment(this.selectedDate).isAfter(moment(), 'day')) {
            this.past = true;
          }
        }
        if (!this.future) {
          //se nella regione e ho strade dopo metti o sono prima di oggi a true
          if ((new Date(this.selectedDate).setHours(0, 0, 0, 0) < new Date(s.cleaningDay).setHours(0, 0, 0, 0)) && (bounds.contains([s.centralCoords[0], s.centralCoords[0]])) || moment(this.selectedDate).isBefore(moment(), 'day')) {
            this.future = true;
          }
        }
      });
    }
    // /**
    //  * If no polylines built in map, show 'toast' element
    //  */
    // if (counter === 0 && this.inZone && this.noCleaning) {
    //   this.toast = await this.toastCtrl.create({
    //     message: `${this.noCleaning} ${this.datePipe.transform(this.selectedDate, 'dd/MM/yyyy')} ${this.inZone}`,
    //     duration: 2000
    //   });
    //   await this.toast.present();
    // }
  }
  /**
   * Clear polylines levels
   * @param m Map object
   */
  clearPolyline(m) {
    for (const i in m._layers) {
      if (m._layers[i]._path !== undefined) {
        try {
          m.removeLayer(m._layers[i]);
        } catch (e) {
          console.log('problem with ' + e + m._layers[i]);
        }
      }
    }
  }
  /**
   * Go one day back
   */
  dayBack() {
    this.glow();

    this.selectedDate.setDate(this.selectedDate.getDate() - 1);
    this.showDate = this.selectedDate.toISOString();
    this.mapCenter = [this.map.getCenter().lat, this.map.getCenter().lng];
    this.buildPolyline(this.mapCenter);
  }
  /**
   * Go one day ahead
   */
  dayForward() {
    this.glow();

    this.selectedDate.setDate(this.selectedDate.getDate() + 1);
    this.showDate = this.selectedDate.toISOString();
    this.buildPolyline(this.mapCenter);
  }
  /**
   * Get last cleaning day and build polylines
   */
  async firstDayFwd() {
    this.glow();

    this.past = true;
    this.labelResult = 0;
    const center = this.mapCenter;
    let nextDay = null;
    var bounds = this.map.getBounds();

    if (this.streets)
      this.streets.forEach(s => {
        if (bounds.contains([s.centralCoords[0], s.centralCoords[0]]))
          if (!nextDay && s.cleaningDay && s.cleaningDay > new Date(this.selectedDate).getTime()) {
            nextDay = s.cleaningDay;
          }
        if (bounds.contains([s.centralCoords[0], s.centralCoords[0]]))

          if (nextDay && s.cleaningDay > this.selectedDate.getTime() && s.cleaningDay <= nextDay && s.cleaningDay > this.today) {
            nextDay = s.cleaningDay;
          }
      });

    var today = moment();
    var nextDate = moment(nextDay);
    var selectedDate = moment(this.selectedDate);
    if (!nextDay || (selectedDate.isBefore(today) && nextDate.isAfter(today, 'day'))) {
      this.selectedDate = new Date();
      this.showDate = this.selectedDate.toISOString();
      this.future = true;
    } else if (nextDay != null && nextDay > this.selectedDate.getTime()) {
      this.selectedDate = new Date(nextDay);
      this.showDate = this.selectedDate.toISOString();
      this.future = true;

    } else {
      this.toast = await this.toastCtrl.create({
        message: this.noStreetFuture,
        duration: 3000,
        // showCloseButton: true
      });
      this.future = false;
      await this.toast.present();
      return;
    }
    this.buildPolyline(center);

  }
  /**
   * Get first cleaning day and build polylines
   */
  async firstDayBck() {
    this.glow();

    this.future = true;
    this.labelResult = 0;
    const center = this.mapCenter;
    let prevDay = null;
    var bounds = this.map.getBounds();
    if (this.streets)
      for (var i = this.streets.length - 1; i >= 0; i--) {
        var s = this.streets[i];
        // const dist = this.geo.getDistanceKM(
        //   { lat: center[0], lon: center[1] },
        //   { lat: s.centralCoords[0]['lat'], lon: s.centralCoords[0]['lng'] }
        // );
        if (bounds.contains([s.centralCoords[0], s.centralCoords[0]]))
          // if ((dist < ((17 % this.map.getZoom()) - 1) || dist < 0.3)) {
          if (!prevDay && s.cleaningDay && s.cleaningDay < new Date(this.selectedDate).getTime()) {
            prevDay = s.cleaningDay;
          }
        // }
        //select first next day of cleaning inside
        if (bounds.contains([s.centralCoords[0], s.centralCoords[0]]))
          if (prevDay && s.cleaningDay < this.selectedDate.getTime() && s.cleaningDay >= prevDay && s.cleaningDay > this.today) {
            prevDay = s.cleaningDay;
          }
        // }
      };
    var today = moment();
    var prevDate = moment(prevDay);
    var selectedDate = moment(this.selectedDate);
    if (!prevDay || (selectedDate.isAfter(today, 'day') && prevDate.isBefore(today, 'day'))) {
      this.selectedDate = new Date();
      this.showDate = this.selectedDate.toISOString();
      this.past = true;
    }
    else if (prevDay != null && prevDay < this.selectedDate.getTime()) {
      this.selectedDate = new Date(prevDay);
      this.showDate = this.selectedDate.toISOString();
      this.past = true;
    } else {
      this.toast = await this.toastCtrl.create({
        message: this.noStreetPast,
        duration: 3000,
        // showCloseButton: true
      });
      this.past = false;
      await this.toast.present();
    }
    this.buildPolyline(center);

  }
  /**
   * Set date based on Ionic Datetime Picker
   * @param event `ion-datetime` change event
   */
  setDate(event: any) {
    this.selectedDate = new Date(event.detail.value);
    this.showDate = this.selectedDate.toISOString();
    if (this.mapSrv.getData()[this.mapSrv.getData().length - 1].cleaningDay < this.selectedDate.getTime()) {
      this.future = false;
    }
    else {
      this.future = true;
    }

    this.buildPolyline(this.mapCenter);
  }
  /**
   * Go to search page with defined searching value
   * @param name Street's name for automatic search
   */
  goToDetail(name: string) {
    this.router.navigate(['street-detail'], { queryParams: { street: name } });
  }
}
