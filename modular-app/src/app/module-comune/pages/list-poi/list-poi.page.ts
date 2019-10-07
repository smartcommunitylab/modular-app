import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/services/utils.service';
import { ComuneListPage } from '../../comune.model';
import { GeoService } from 'src/app/services/geo.service';
import { ConfigService } from 'src/app/services/config.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list-poi',
  templateUrl: './list-poi.page.html',
  styleUrls: ['./list-poi.page.scss'],
})
export class ListPoiPage extends ComuneListPage implements OnInit {
  category: any;
  stringsContact: any;
  altImage: string;

  constructor(
    public navCtrl: NavController,
    public dbService: DbService,
    public router: Router,
    public route: ActivatedRoute,
    public modalController: ModalController,
    public utils: UtilsService,
    public geoSrv: GeoService,
    public config: ConfigService,
    public translate: TranslateService,
    public zone: NgZone) {
    super(navCtrl, dbService, geoSrv, config, modalController, router, route, utils, translate, zone);
  }

  sort(list) {
    list.sort((a, b) => a.distanceVal - b.distanceVal);
  }

  onExpand(id: string) {
    this.router.navigate(['/detail-poi'], { queryParams: { id: id, type: 'POI' } });
  }

  convertObject(x) {
    const res = this.utils.convertObject(x, ['title', 'classification', 'cat', 'subtitle', 'description'], ['image', 'location']);
    if (x && x._id) {
      res.id = x._id;
    }
    if (res.image) {
      res.image = x.image.replace('.jpg', '_medium.jpg');
    }
    return res;
  }
}
