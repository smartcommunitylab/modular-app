import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from '../../services/db.service';
import { ConfigService } from 'src/app/services/config.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail-path',
  templateUrl: './detail-path.page.html',
  styleUrls: ['./detail-path.page.scss'],
})
export class DetailPathPage implements OnInit {
  paths: any;
  showPois: any = [];
  fullPois: any = [];
  language: string;
  jsonTabs = JSON.stringify([{ target: 'info', icon: 'info' }, { target: 'place', icon: 'place' }, { target: 'map', icon: 'map' }]);
  tabActived = 'info';
  isLoading = false;
  mapPoints: any = [];
  search = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dbService: DbService,
    private config: ConfigService,
    private alert: AlertController
    ) {
      this.language = window[this.config.getAppModuleName()]['language'];
    }

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
          this.fullPois.push(data.docs[0]);
        }
      }).then(() => {
        this.showPois = this.fullPois;
        this.isLoading = false;
      });
    });
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if (params) {
          const id = params.id.split(';')[0];
          this.isLoading = true;
          this.dbService.getObjectById(id).then(data => {
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
      this.tabActived = (<any>path).detail;
      if (this.tabActived === 'map') {
        this.buildMapPoints();
      }
    });
    window.addEventListener('pathSelected', target => {
      this.goToPoi((<any>target).detail);
    });
    window.addEventListener('actionSelected', target => {
      this.goToPoi((<any>target).detail);
    });
  }

  buildLangPaths() {
    this.paths.description = this.paths.description[this.language];
    this.paths.info = this.paths.info[this.language];
    this.paths.subtitle = this.paths.subtitle[this.language];
    this.paths.title = this.paths.title[this.language];
    this.paths.difficulty = this.paths.difficulty[this.language];
  }

  buildMapPoints() {
    this.fullPois.forEach(element => {
      this.mapPoints.push({
        id: element._id,
        lat: element.location[0],
        lon: element.location[1],
        name: element.title[this.language],
        address: element.address[this.language],
        distance: 0 // TOFIX
      });
    });
    this.mapPoints.push({
      lat: window[this.config.getAppModuleName()]['geolocation']['lat'],
      lon: window[this.config.getAppModuleName()]['geolocation']['long'],
      name: 'myPos',
      distance: 0
    });
    this.mapPoints = JSON.stringify(this.mapPoints);
  }

  goToPoi(id) {
    this.router.navigate(['/detail-poi'], { queryParams: { id: id } });
  }

  toggleSearch() {
    this.search = !this.search;
  }
  searchChanged(input: any) {
    const value = input.detail.target.value;
    const _this = this;
    this.showPois = this.fullPois.filter(function(el) {
      return (el.title[_this.language].toLowerCase().indexOf(value.toLowerCase()) > -1);
    });
  }
  filterClicked() {
    this.buildAlert();
    console.log('filter');
  }
  async buildAlert() {
    const _this = this;
    const alert = await this.alert.create({
      header: 'Ordina per',
      inputs: [
        {
          name: 'asc',
          type: 'radio',
          label: 'A-Z',
          value: 'asc',
          checked: true
        },
        {
          name: 'desc',
          type: 'radio',
          label: 'Z-A',
          value: 'desc',
          checked: false
        }
      ],
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Modal Closed');
          }
        },
        {
          text: 'OK',
          handler: data => {
             this.orderArray(data, _this);
          }
        }
      ]
    });

   await alert.present();
  }
  orderArray(condition: string, _this: any) {
    if (condition.indexOf('asc') > -1) {
      _this.showPois = this.fullPois.sort(function(a, b) { return a.title[_this.lang].localeCompare(b.title[_this.lang]); });
    } else {
      _this.showPois = this.fullPois.sort(function(a, b) { return b.title[_this.lang].localeCompare(a.title[_this.lang]); });
    }
     console.log(_this.showPois);
  }
}
