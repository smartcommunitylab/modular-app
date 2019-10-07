import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { Observable } from 'rxjs';
import { ComuneListPage } from '../../comune.model';
import { TranslateService } from '@ngx-translate/core';
import { GeoService } from 'src/app/services/geo.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-list-path',
  templateUrl: './list-path.page.html',
  styleUrls: ['./list-path.page.scss'],
})
export class ListPathPage extends ComuneListPage implements OnInit {
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
    public zone: NgZone,
    public translate: TranslateService,
    public geoSrv: GeoService,
    public config: ConfigService) {
    super(navCtrl, dbService, geoSrv, config, modalController, router, route, utils, translate, zone);
  }

  convertObject(x) {
    const res = this.utils.convertObject(x, ['title', 'subtitle', 'description'], ['image']);
    if (x && x._id) {
      res.id = x._id;
    }
    if (res.image) {
      res.image = x.image.replace('.jpg', '_medium.jpg');
    }
    return res;
  }

  ionViewWillLeave() {
    const el = document.getElementById('path-list');
    if (el) {
      el.removeEventListener('pathSelected', function (e) {
        console.log(e);
      }, false);
    }
  }

  onPathSelected(id: string) {
    this.router.navigate(['/detail-path'], { queryParams: { id } });
  }
}
