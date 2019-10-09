// tslint:disable: no-shadowed-variable
import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { ComuneListPage, TouristService } from '../../comune.model';
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
    this.router.navigate(['/detail-comune'], { queryParams: { id } });
  }

  convertObject(x) {
    return new TouristService(x, this.translate);
  }
}
