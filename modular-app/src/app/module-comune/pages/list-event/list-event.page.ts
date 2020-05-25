import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import moment from 'moment';
import { ComuneListPage } from '../../comune.model';
import { TranslateService } from '@ngx-translate/core';
import { GeoService } from 'src/app/services/geo.service';
import { ConfigService } from 'src/app/services/config.service';
import { Event } from '../../comune.model';
@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.page.html',
  styleUrls: ['./list-event.page.scss']
})
export class ListEventPage extends ComuneListPage implements OnInit {
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
  getQuery() {
    return { 'selector': { 'elementType': 'event-item'} };
  }
  processList(list) {
    const res = super.processList(list);
    return this.spreadEvents(res);
  }

  onExpand(id: string) {
    this.router.navigate(['/detail-comune'], { queryParams: { id } });
  }

  getItemCategory(item: any) {
    return item.day ? item.day.startOf('day').format('DD-MM-YYYY') : null;
  }
  getItemTags(item: any) {
    return item.cat;
  }
  ngOnInit() {
    super.ngOnInit();
  }

  spreadEvents(events: any[]): any[] {
    const res = [];
    events.forEach((e) => {
      const from = moment(e.fromTime).startOf('day');
      const to = moment(e.toTime).endOf('day');
      if (!from && !to) {
        // main event
        res.push(e);
      } else {
        let day = moment.max(moment(), from);
        const last = moment.min(moment().add(7, 'days'), to);
        while (day.isBefore(last)) {
          const copy = JSON.parse(JSON.stringify(e));
          copy.day = day.clone();
          day = day.add(1, 'days');
          res.push(copy);
        }
      }
    });
    return res;
  }

  convertObject(x) {
    return new Event(x, this.translate);
  }

}
