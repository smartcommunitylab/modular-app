// tslint:disable: no-shadowed-variable
import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { ComuneListPage } from '../../comune.model';
import { ConfigService } from 'src/app/services/config.service';
import { GeoService } from 'src/app/services/geo.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tourist-services',
  templateUrl: './tourist-services.page.html',
  styleUrls: ['./tourist-services.page.scss'],
})
export class TouristServicesPage extends ComuneListPage implements OnInit {
  stringsContact: any;
  altImage: string;

  constructor(
    public navCtrl: NavController,
    public dbService: DbService,
    public config: ConfigService,
    public router: Router,
    public route: ActivatedRoute,
    public modalController: ModalController,
    public utils: UtilsService,
    public geoSrv: GeoService,
    public translate: TranslateService,
    public zone: NgZone) {
      super(navCtrl, dbService, geoSrv, config, modalController, router, route, utils, translate, zone);
    }

  getQuery() {
    return { 'selector': {'classification.it': 'Servizi'}};
  }

  onExpand(id: string) {
    this.router.navigate(['/detail-event'], { queryParams: { id: id, type: 'EVENT' } });
  }

  convertObject(x) {
    const res = this.utils.convertObject(x,
      ['title', 'subtitle', 'description', 'classification', 'cat', 'address'],
      ['image', 'url']);
    if (x && x._id) {
      res.id = x._id;
    }
    if (res.image) {
      res.image = x.image.replace('.jpg', '_medium.jpg');
    }
    if (res.description) {
      res.text = res.description;
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

    res.description = res.description ? res.description : '';
    res.text += tmp;
    res.infos = JSON.stringify(res);
    return res;
  }
}
