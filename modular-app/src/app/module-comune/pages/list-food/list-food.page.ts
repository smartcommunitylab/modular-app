// tslint:disable: no-shadowed-variable
import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GeoService } from 'src/app/services/geo.service';
import { ConfigService } from 'src/app/services/config.service';
import { UtilsService } from 'src/app/services/utils.service';
import { ComuneListPage, Restaurant } from '../../comune.model';

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
    return new Restaurant(x, this.translate);
  }

  getItemCategory(item: any) {
    return null;
  }
}
