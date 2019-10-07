import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, Events, ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import moment from 'moment';
import { ComuneListPage } from '../../comune.model';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { GeoService } from 'src/app/services/geo.service';
import { ConfigService } from 'src/app/services/config.service';
@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.page.html',
  styleUrls: ['./list-event.page.scss']
})
export class ListEventPage extends ComuneListPage implements OnInit {
  category: any;
  stringsContact: any;
  altImage: string;

  mainEventLabel: any;

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

  processList(list) {
    const res = super.processList(list);
    return this.spreadEvents(res);
  }

  onExpand(id: string) {
    this.router.navigate(['/detail-event'], { queryParams: { id: id, type: 'EVENT' } });
  }

  getItemCategory(item: any) {
    return item.day ? item.day.startOf('day').format('DD-MM-YYYY') : null;
  }
  getItemTags(item: any) {
    return item.cat;
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
          const copy = Object.assign({}, e);
          copy.day = day;
          day = day.add(1, 'days');
          res.push(copy);
        }
      }
    });
    return res;
  }

  convertObject(x) {
    const res = this.utils.convertObject(x,
      ['title', 'classification', 'cat', 'subtitle', 'description', 'eventPeriod', 'eventTiming', 'info', 'address'],
      ['image', 'topics', 'fromTime', 'toTime', 'url']);
      if (res.image) {
        res.image = res.image.replace('.jpg', '_medium.jpg');
      }
      if (!res.topics) { res.topics = []; }
    if (x) {
      if (x.parentEventId) {
        if (res.cat) {
          res.cat.push(JSON.parse(x.parentEventId).objectName);
        } else { res.topics = [JSON.parse(x.parentEventId).objectName]; }
      }
      if (x.category) {
        if (x.category === 'event') {
          res.category = this.mainEventLabel;
          res.cat = [this.mainEventLabel];
        } else {
          res.category = x.category;
        }
      }
      if (x.contacts) {
        if (x.contacts.phone) {
          res.phone = x.contacts.phone;
        }
        if (x.contacts.email) {
          res.email = x.contacts.email;
        }
      }
      if (x._id) {
        res.id = x._id;
      }
    }
    if (res.eventPeriod) {
        res.date = res.eventPeriod;
    }
    if (res.eventTiming) {
        res.time = res.eventTiming;
    }
    res.infos = JSON.stringify(res);
    return res;
  }

}
