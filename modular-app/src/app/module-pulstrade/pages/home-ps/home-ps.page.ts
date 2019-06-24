import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/services/config.service';
import { Router, ActivatedRoute } from '@angular/router';
import leaflet from 'leaflet';
import { GeoService } from 'src/app/services/geo.service';
import { MapService } from '../../services/map.service';
import { DatePipe } from '@angular/common';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home-ps',
  templateUrl: './home-ps.page.html',
  styleUrls: ['./home-ps.page.scss'],
  providers: [DatePipe]
})
export class HomePage implements OnInit {

  language: string;
  myPos: any = {};
  streets: any;
  map: any;
  selectedDate: Date;
  showDate: string;
  mapCenter: any = [];
  private toast: any;
  constructor(private translate: TranslateService,
    private config: ConfigService,
    private router: Router,
    private geo: GeoService,
    private mapSrv: MapService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private toastCtrl: ToastController
  ) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
    // this.myPos = window[this.config.getAppModuleName()]['geolocation'];
  }
  parseUrlParams(params) {
    if (Object.keys(params).length > 0) {
      let coord;
      coord = JSON.parse(params.coord);
      console.log(coord);
      this.myPos.lat = coord[0].lat;
      this.myPos.long = coord[0].lng;

    } else {
      this.myPos = window[this.config.getAppModuleName()]['geolocation'];
    }
  }

  ngOnInit() {

    this.route.queryParams
      .subscribe(params => {
        this.parseUrlParams(params);
        this.selectedDate = new Date();
        this.showDate = this.selectedDate.toISOString();
        this.mapCenter = [this.myPos.lat, this.myPos.long];
        this.streets = this.mapSrv.getData().sort(function (a, b) {
          return a.cleaningDay - b.cleaningDay;
        });
        console.log(this.streets);
        this.buildMap();
      });
  }

  ionViewWillLeave() {
    this.myPos = {};
  }

  goToLink(path: string) {
    if (path.indexOf('home-module') > -1) {
      this.router.navigate(['/home-module']);
    } else {
      this.router.navigate([this.router.url + '/' + path]);
    }
  }

  buildMap() {
    try { this.map.remove(); } catch { }
    const _this = this;
    const searchControl = leaflet.Control.extend({
      options: {
        position: 'topright'
      },
      onAdd: function (map) {
        const container = leaflet.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
        container.style.backgroundColor = 'white';
        container.style.width = '30px';
        container.style.height = '30px';
        container.style.borderRadius = '50%';
        container.innerHTML = '<ion-icon style="width: 25px; height: 25px;" name="search"></ion-icon>';
        container.onclick = function () {
          _this.router.navigate(['/ps-search']);
        };
        return container;
      }
    });

    this.map = new leaflet.Map('home-map', { zoomControl: false, attributionControl: false }).setView(this.mapCenter, 15);

    this.map.on('dragend', function (e) {
      this.mapCenter = [e.target.getCenter().lat, e.target.getCenter().lng];
      _this.buildPolyline(this.mapCenter);
    });
    this.map.on('zoomend', function (e) {
      this.mapCenter = [e.target.getCenter().lat, e.target.getCenter().lng];
      _this.buildPolyline(this.mapCenter);
    });

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

    this.map.addControl(new searchControl());

    this.buildPolyline(this.mapCenter);
  }

  async buildPolyline(center) {
    let counter = 0;
    let noCleaning, forStr, to, inDateStr, noPark, inZone, details;
    this.translate.get('NO-CLEANING').subscribe(s => {
      noCleaning = s;
    });
    this.translate.get('FOR').subscribe(s => {
      forStr = s;
    });
    this.translate.get('TO').subscribe(s => {
      to = s;
    });
    this.translate.get('IN-DATE').subscribe(s => {
      inDateStr = s;
    });
    this.translate.get('NO-PARKING-FROM').subscribe(s => {
      noPark = s;
    });
    this.translate.get('IN-ZONE').subscribe(s => {
      inZone = s;
    });
    this.translate.get('DETAILS').subscribe(s => {
      details = s;
    });

    if (this.map) {
      this.clearPolyline(this.map);
    }

    this.streets.forEach(s => {
      const dist = this.geo.getDistanceKM(
        { lat: center[0], lon: center[1] },
        { lat: s.centralCoords[0]['lat'], lon: s.centralCoords[0]['lng'] }
      );

      const inDate = (new Date(this.selectedDate).setHours(0, 0, 0, 0) === new Date(s.cleaningDay).setHours(0, 0, 0, 0));
      const color = (inDate) ? 'red' : 'green';

      const freeStreetContent =
        `${noCleaning} <br/><b>${this.datePipe.transform(this.selectedDate, 'dd/MM/yyyy')}</b> ${forStr}<br/>
        <b> ${s.streetName}</b>`;
      const closedStreetContent = `<b>${s.streetName}</b><br/>${noPark} <b>${new Date(s.stopStartingTime).getHours()}</b> ${to}
        <b> ${new Date(s.stopEndingTime).getHours()}</b> ${inDateStr} <br/>
        <b>${this.datePipe.transform(this.selectedDate, 'dd/MM/yyyy')}</b><br/>
        <a style="float:right; margin-top: -5%">${details}</a>`;


      if (inDate && ((dist < ((18 % this.map.getZoom()) - 1) || dist < 0.3))) {
        const popupContent = (inDate) ? closedStreetContent : freeStreetContent;

        const polyline = leaflet.polyline(s.polylines, { color: color }).addTo(this.map);
        const popup = leaflet.popup({ className: `pop-${s.streetName.replace(/\s/g, '')}` }).setContent(popupContent);
        polyline.bindPopup(popup).on('popupopen', (e) => {
          const el = document.getElementsByClassName(`pop-${s.streetName.replace(/\s/g, '')}`)[0].addEventListener('click', () => {
            this.goToSearch(s.streetName);
          });
        });
        counter++;
      }
    });
    if (counter === 0 && inZone && noCleaning) {
      this.toast = await this.toastCtrl.create({
        message: `${noCleaning} ${this.datePipe.transform(this.selectedDate, 'dd/MM/yyyy')} ${inZone}`,
        duration: 3000,
        showCloseButton: true
      });
      await this.toast.present();
    }
  }
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

  dayBack() {
    this.selectedDate.setDate(this.selectedDate.getDate() - 1);
    this.showDate = this.selectedDate.toISOString();
    this.mapCenter = [this.map.getCenter().lat, this.map.getCenter().lng];
    this.buildPolyline(this.mapCenter);
  }
  dayForward() {
    this.selectedDate.setDate(this.selectedDate.getDate() + 1);
    this.showDate = this.selectedDate.toISOString();
    this.buildPolyline(this.mapCenter);
  }
  firstDayFwd() {
    const center = this.mapCenter;
    this.streets.forEach(s => {
      const dist = this.geo.getDistanceKM(
        { lat: center[0], lon: center[1] },
        { lat: s.centralCoords[0]['lat'], lon: s.centralCoords[0]['lng'] }
      );
      if (s.cleaningDay > this.selectedDate) {
        if ((dist < ((18 % this.map.getZoom()) - 1) || dist < 0.3)) {
          this.selectedDate = new Date(s.cleaningDay);
          this.showDate = this.selectedDate.toISOString();
          this.buildPolyline(center);
        }
      }
    });
  }
  firstDayBck() {
    const center = this.mapCenter;
    this.streets.forEach(s => {
      const dist = this.geo.getDistanceKM(
        { lat: center[0], lon: center[1] },
        { lat: s.centralCoords[0]['lat'], lon: s.centralCoords[0]['lng'] }
      );
      if (s.cleaningDay < this.selectedDate) {
        if ((dist < ((18 % this.map.getZoom()) - 1) || dist < 0.3)) {
          this.selectedDate = new Date(s.cleaningDay);
          this.showDate = this.selectedDate.toISOString();
          this.buildPolyline(center);
        }
      }
    });
  }
  setDate(event: any) {
    this.selectedDate = new Date(event.detail.value);
    this.showDate = this.selectedDate.toISOString();
    this.buildPolyline(this.mapCenter);
  }

  goToSearch(name: string) {
    this.router.navigate(['ps-search'], { queryParams: { street: name } });
  }
}
