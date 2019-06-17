import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/app/services/config.service';
import { Router } from '@angular/router';
import leaflet from 'leaflet';
import { GeoService } from 'src/app/services/geo.service';
import { MapService } from '../../services/map.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-ps',
  templateUrl: './home-ps.page.html',
  styleUrls: ['./home-ps.page.scss'],
  providers: [DatePipe]
})
export class HomePage implements OnInit {

  language: string;
  myPos: any;
  streets: any;
  map: any;
  selectedDate: Date;
  showDate: string;
  mapCenter: any = [];
  constructor(private translate: TranslateService,
    private config: ConfigService,
    private router: Router,
    private geo: GeoService,
    private mapSrv: MapService,
    private datePipe: DatePipe
  ) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
    this.myPos = window[this.config.getAppModuleName()]['geolocation'];
  }

  ngOnInit() {
    this.selectedDate = new Date();
    this.showDate = this.selectedDate.toISOString();
    this.mapCenter = [this.myPos.lat, this.myPos.long];
    this.streets = this.mapSrv.getData();
    console.log(this.streets);
    this.buildMap();
  }

  goToLink(path: string) {
    if (path.indexOf('home-module') > -1) {
      this.router.navigate(['/home-module']);
    } else {
      this.router.navigate([this.router.url + '/' + path]);
    }
  }

  buildMap() {
    this.map = new leaflet.Map('home-map', { zoomControl: false, attributionControl: false }).setView(this.mapCenter, 15);
    const _this = this;
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

    this.buildPolyline(this.mapCenter);
  }

  buildPolyline(center) {
    this.clearPolyline(this.map);

    this.streets.forEach(s => {
      const dist = this.geo.getDistanceKM(
        { lat: center[0], lon: center[1] },
        { lat: s.centralCoords[0]['lat'], lon: s.centralCoords[0]['lng'] }
      );

      const inDate = (this.selectedDate.getDate() === new Date(s.cleaningDay).getDate());
      const color = (inDate) ? 'red' : 'green';

      const freeStreetContent =
        `Non sono previste pulizie in data <br/><b>${this.datePipe.transform(this.selectedDate, 'dd/MM/yyyy')}</b> per<br/>
        <b> ${s.streetName}</b>`;
      const closedStreetContent = `<b>${s.streetName}</b><br/>Divieto di sosta dalle <b>${new Date(s.stopStartingTime).getHours()}</b> alle
        <b> ${new Date(s.stopEndingTime).getHours()}</b> in data <br/>
        <b>${this.datePipe.transform(this.selectedDate, 'dd/MM/yyyy')}</b>`;

      if ((dist < ((18 % this.map.getZoom()) - 1) || dist < 0.3)) {
        const popupContent = (inDate) ? closedStreetContent : freeStreetContent;

        const polyline = leaflet.polyline(s.polylines, { color: color }).addTo(this.map);
        polyline.bindPopup(popupContent);
      }
    });
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
  setDate(event: any) {
    this.selectedDate = new Date(event.detail.value);
    this.showDate = this.selectedDate.toISOString();
    this.buildPolyline(this.mapCenter);
  }
}
