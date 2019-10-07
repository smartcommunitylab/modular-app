// tslint:disable: no-shadowed-variable
import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GeoService } from 'src/app/services/geo.service';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/services/utils.service';
import { ComuneListPage } from '../../comune.model';
import { ConfigService } from 'src/app/services/config.service';
// import { Market } from '@ionic-native/market';

@Component({
  selector: 'app-list-farmacie',
  templateUrl: './list-farmacie.page.html',
  styleUrls: ['./list-farmacie.page.scss'],
})
export class ListFarmaciePage extends ComuneListPage implements OnInit {
  turno = true;
  farmacieTurno = '';

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
    return { 'selector': { 'elementType': 'poi-item', 'classification.it': 'Farmacia' } };
  }

  sort(list) {
    list.sort((a, b) => a.distanceVal - b.distanceVal);
  }
  ngOnInit() {
    super.ngOnInit();
    this.farmacieTurno = this.translate.instant('farmacie_turno');
  }
  getItemCategory(item: any) {
    return null;
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

  closeTurno() {
    this.turno = false;
  }
}
