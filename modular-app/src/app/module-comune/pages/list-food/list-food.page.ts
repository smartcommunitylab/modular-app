// tslint:disable: no-shadowed-variable
import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GeoService } from 'src/app/services/geo.service';
import { ConfigService } from 'src/app/services/config.service';
import { UtilsService } from 'src/app/services/utils.service';
import { ComuneListPage } from '../../comune.model';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.page.html',
  styleUrls: ['./list-food.page.scss'],
})
export class ListFoodPage extends ComuneListPage implements OnInit {
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
    super(navCtrl, dbService, geoSrv, config, modalController, router, route, utils, translate, zone);
  }


  getQuery() {
    return { 'selector': { 'elementType': 'restaurant-item' } };
  }

  sort(list) {
    list.sort((a, b) => a.distanceVal - b.distanceVal);
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
    return res;
  }

  getItemCategory(item: any) {
    return null;
  }
}
