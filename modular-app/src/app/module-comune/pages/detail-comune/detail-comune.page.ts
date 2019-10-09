import { Component, NgZone} from '@angular/core';
import { ComuneDetailPage, Event, ComuneObject, ComuneDetail } from '../../comune.model';
import { NavController, ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { GeoService } from 'src/app/services/geo.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-detail-comune',
  templateUrl: './detail-comune.page.html',
  styleUrls: ['./detail-comune.page.scss'],
})
export class DetailPage extends ComuneDetailPage {

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
    super(navCtrl, dbService, geoSrv, config, modalController, router, route, utils, translate, zone);
  }

  convertObject(x: any) {
    return new ComuneDetail(x, this.translate);
  }

}
