// tslint:disable: no-shadowed-variable
import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { GeoService } from 'src/app/services/geo.service';
import { ConfigService } from 'src/app/services/config.service';
import { ComuneListPage, Hotel } from '../../comune.model';

@Component({
  selector: 'app-list-rh',
  templateUrl: './list-rh.page.html',
  styleUrls: ['./list-rh.page.scss'],
})
export class ListRHPage extends ComuneListPage implements OnInit {
  category: any;

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
    return { 'selector': { 'elementType': 'hotel-item' } };
  }

  sort(list) {
    list.sort((a, b) => a.distanceVal - b.distanceVal);
  }

  convertObject(x) {
    return new Hotel(x, this.translate);
  }

  getItemCategory(item: any) {
    return null;
  }

}

