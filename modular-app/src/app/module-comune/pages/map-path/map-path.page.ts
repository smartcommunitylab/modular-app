import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { DbService } from 'src/app/module-trasporti/services/db.service';
import { ConfigService } from '../../../services/config.service';
import { GeoService } from 'src/app/services/geo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-map-path',
  templateUrl: './map-path.page.html',
  styleUrls: ['./map-path.page.scss'],
})
export class MapPathPage implements OnInit {
  fullPois: any;
  mapPoints: any = [];
  language: any;
  myPos: any;
  myPosParam: any;
  tracciato: any;

  constructor(
    private route: ActivatedRoute,
    private utils: UtilsService,
    private geoSrv: GeoService,
    private router: Router,
    private translate: TranslateService,
    private location: Location,
    private config: ConfigService) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
  }

  ngOnInit() {
    if (window[this.config.getAppModuleName()]['geolocation'])
      this.myPos = {
        lat: window[this.config.getAppModuleName()]['geolocation']['lat'],
        long: window[this.config.getAppModuleName()]['geolocation']['long']
      };
    else {
      this.myPos = this.config.getDefaultPosition();
    }
    if (localStorage.getItem('path'))
    {this.fullPois = JSON.parse(localStorage.getItem('path'));
    localStorage.removeItem('path');

  }
    if (localStorage.getItem('tracciato'))
    {this.tracciato = JSON.parse(localStorage.getItem('tracciato'));
    localStorage.removeItem('tracciato');
    }

    const element = document.getElementById('wc-map');
    element.addEventListener('poiSelected', async (poiParam) => {
      var poiId = (<any>poiParam).detail;
      console.log(poiId);
      this.router.navigate(['/ddetail-comune'], { queryParams: { id: poiId } });

    });
    this.myPosParam = JSON.stringify(this.myPos);
    this.buildMapPoints();

  }

  ionViewDidEnter() {
  }

  goBack() {
    this.location.back();
  }

  buildMapPoints() {
    this.fullPois.forEach(element => {
      this.mapPoints.push({
        id: element.id,
        lat: element.location[0],
        lon: element.location[1],
        name: element.title,
        img: element.image,
        distance: this.geoSrv.getDistanceKM(this.myPos, { lat: element.location[0], lon: element.location[1] })
      });
    });
    this.mapPoints = JSON.stringify(this.mapPoints);
  }
}
