// tslint:disable: no-shadowed-variable
import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GeoService } from 'src/app/services/geo.service';
import { UtilsService } from 'src/app/services/utils.service';
import { ComuneListPage, Pharmacy } from '../../comune.model';
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
    return new Pharmacy(x, this.translate);
  }

  closeTurno() {
    this.turno = false;
  }
}
