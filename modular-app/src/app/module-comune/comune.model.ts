import { ModalController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { NgZone, OnInit } from '@angular/core';
import { ListPage } from '../../app/shared/itemlist/listpage.page';
import { UtilsService } from '../../app/services/utils.service';
import { Observable } from 'rxjs';
import { DbService } from './services/db.service';
import { ConfigService } from '../services/config.service';
import { GeoService } from '../services/geo.service';
import { TranslateService } from '@ngx-translate/core';

export class ComuneListPage extends ListPage implements OnInit {
    category: any;
    mypos: { lat: number, long: number };

    constructor(
        public navCtrl: NavController,
        public dbService: DbService,
        public geoSrv: GeoService,
        public config: ConfigService,
        public modalController: ModalController,
        public router: Router,
        public route: ActivatedRoute,
        public utils: UtilsService,
        public translate: TranslateService,
        public zone: NgZone) {
        super(navCtrl, modalController, router, zone);
    }

    ngOnInit() {
      this.route.queryParams
        .subscribe(params => {
        if (params) {
            const cat = JSON.parse(params.category);
            if (!this.category) {
            this.category = cat;
            super.init();
            }
        }
        });
    }

    getList(): Observable<any[]> {
        return new Observable(observer => {
          this.utils.presentLoading();
          const query = this.getQuery();
          this.mypos = {
            lat: window[this.config.getAppModuleName()]['geolocation']['lat'],
            long: window[this.config.getAppModuleName()]['geolocation']['long']
          };
          this.dbService.getObjectByQuery(query).then((data) => {
            if (data.docs.length > 0) {
              const res = this.processList(data.docs);
              this.utils.hideLoading();
              observer.next(res);
            }
          }, (err) => {
            this.utils.hideLoading();
            console.error(err);
            observer.error(err);
          });
        });
    }

    processList(list) {
        const res = list.map(x => this.convertObject(x));
        this.sort(res);
        return res;
    }

    sort(list) {}

    convertObject(x) {
        return x;
    }

    getQuery() {
        return this.category.query;
    }

    onExpand(id: string) {
    }

    onContact(data: any) {
        this.utils.openContact(JSON.parse((<any>data).detail));
    }

    updateDistance(element) {
        if (element.location && element.location[0] && element.location[1]) {
          const dist = this.geoSrv.getDistanceKM(
            { lat: this.mypos.lat, lon: this.mypos.long },
            { lat: element.location[0], lon: element.location[1] });
          element.distanceVal = dist;
          element.distance = (this.translate.instant('distance_label') + ' ' + dist.toFixed(2) + ' Km');
        } else {
          element.distanceVal = 0;
          element.distance = this.translate.instant('no_distance_label');
        }
      }
}
