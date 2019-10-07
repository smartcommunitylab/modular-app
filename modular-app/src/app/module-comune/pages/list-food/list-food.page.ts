// tslint:disable: no-shadowed-variable
import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GeoService } from 'src/app/services/geo.service';
import { ConfigService } from '../../services/config.service';
import { ListPage } from 'src/app/shared/itemlist/listpage.page';
import { UtilsService } from 'src/app/services/utils.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.page.html',
  styleUrls: ['./list-food.page.scss'],
})
export class ListFoodPage extends ListPage implements OnInit {
  category: any;
  mypos: { lat: number, long: number };

  constructor(
    public navCtrl: NavController,
    public dbService: DbService,
    public router: Router,
    public route: ActivatedRoute,
    public modalController: ModalController,
    public utils: UtilsService,
    public zone: NgZone,
    public translate: TranslateService,
    public geoSrv: GeoService,
    public config: ConfigService) {
      super(navCtrl, modalController, router, utils, zone);
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
        const query = { 'selector': { 'elementType': 'restaurant-item' } };
        this.mypos = {
          lat: window[this.config.getAppModuleName()]['geolocation']['lat'],
          long: window[this.config.getAppModuleName()]['geolocation']['long']
        };
        this.dbService.getObjectByQuery(query).then((data) => {
          if (data.docs.length > 0) {
            const res = data.docs.map(x => this.convertObject(x));
            res.sort((a, b) => a.distanceVal - b.distanceVal);
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

    convertObject(x) {
      const res = this.utils.convertObject(x,
        ['title', 'subtitle', 'description', 'classification', 'cat', 'closing', 'timetable', 'address'],
        ['image', 'url', 'location']);
      if (x && x._id) {
        res.id = x._id;
      }
      if (res.image) {
        res.image = x.image.replace('.jpg', '_medium.jpg');
      }
      if (res.timetable) {
        res.date = res.timetable;
      }
      if (res.closing) {
        res.closing = `<b>${this.translate.instant('closing')}: ${res.closing}</b>`;
      }
      if (res.description) {
        res.text = res.description;
      }
     if (x.category) {
        res.category = x.category.charAt(0).toUpperCase() + x.category.slice(1);
      }
      if (res.classification) {
        res.subtitle = res.classification;
      }
      let tmp = '';
      if (x.contacts) {
        if (x.contacts.phone) {
          res.phone = x.contacts.phone;
        }
        if (x.contacts.email) {
          tmp += '<p>' + x.contacts.email + '</p>';
          res.email = x.contacts.email;
        }
      }

      // merge subtime to subscription
      let description = res.subtitle ? (res.subtitle + '<br>') : '';
      description += res.description ? res.description : '';
      res.description = description;
      res.text += tmp;
      res.infos = JSON.stringify(res);
      this.updateDistance(res);
      return res;
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

    getItemCategory(item: any) {
      return null;
    }
}
