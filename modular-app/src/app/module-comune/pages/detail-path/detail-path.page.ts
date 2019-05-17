import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from '../../services/db.service';
import { GeoService } from 'src/app/services/geo.service';

 @Component({
  selector: 'app-detail-path',
  templateUrl: './detail-path.page.html',
  styleUrls: ['./detail-path.page.scss'],
})
export class DetailPathPage implements OnInit {
  paths: any;
  pois: any = [];
  lang = 'it';
  jsonTabs = JSON.stringify([{target: 'info', icon: 'info'}, {target: 'place', icon: 'place'}, {target: 'map', icon: 'map'}]);
  tabActived = 'info';
  isLoading = false;
  mapPoints: any = [];
  myLat = '';
  myLon = '';
   constructor(private router: Router, private route: ActivatedRoute, private dbService: DbService, private geoSrv: GeoService) { }

   private getPois(path: any) {
    path.steps.forEach(element => {
      const query = {
        selector: {
          'category': 'cultura',
          'localId': element
        }
      };
      this.dbService.getObjectByQuery(query).then(data => {
        if (data.docs[0]) {
          this.pois.push(data.docs[0]);
        }
      }).then(() => {
        this.isLoading = false;
      });
    });
  }

   ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if (params) {
            this.isLoading = true;
            this.dbService.getObjectById(params.id).then(data => {
              this.paths = data.docs[0];
              this.buildLangPaths();
              this.getPois(this.paths);
          });
        }
      });
  }

   ionViewDidEnter() {
    const el = document.getElementById('tabs');
    el.addEventListener('tabSelected', path => {
      this.tabActived = path.detail;
      if (this.tabActived === 'map') {
        this.buildMapPoints();
      }
    });
    window.addEventListener('pathSelected', target => {
      this.goToPoi(target.detail);
    });
  }

  ionViewWillEnter() {
   
  }

  buildLangPaths() {
    this.paths.description = this.paths.description[this.lang];
    this.paths.info = this.paths.info[this.lang];
    this.paths.subtitle = this.paths.subtitle[this.lang];
    this.paths.title = this.paths.title[this.lang];
    this.paths.difficulty = this.paths.difficulty[this.lang];
  }
  buildMapPoints() {
    this.pois.forEach(element => {
      this.mapPoints.push({
        id: element._id,
        lat: element.location[0],
        lon: element.location[1],
        name: element.title[this.lang],
        address: element.address[this.lang],
        distance: 0 // TOFIX
      });
    });
    this.myLat = window['app-module-geolocation']['lat'].toString();
    this.myLon = window['app-module-geolocation']['long'].toString();
    this.mapPoints = JSON.stringify(this.mapPoints);
  }

  goToPoi(id) {
    this.router.navigate(['/detail-poi'], { queryParams: { id: id } });
  }
}
