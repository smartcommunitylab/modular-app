import { Component, NgZone} from '@angular/core';
import { ComuneDetailPage, Event, ComuneObject, ComuneDetail } from '../../commune.model';
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
  stringsContact: any;
  altImage: any;
    constructor(
    public override navCtrl: NavController,
    public override dbService: DbService,
    public override geoSrv: GeoService,
    public override config: ConfigService,
    public override modalController: ModalController,
    public override router: Router,
    public override route: ActivatedRoute,
    public override utils: UtilsService,
    public override translate: TranslateService,
    public override zone: NgZone) {
    super(navCtrl, dbService, geoSrv, config, modalController, router, route, utils, translate, zone);
  }

  override convertObject(x: any) {
    return new ComuneDetail(x, this.translate);
  }

}
