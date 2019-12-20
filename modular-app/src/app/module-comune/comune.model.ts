import { ModalController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { NgZone, OnInit, OnDestroy } from '@angular/core';
import { ListPage } from '../../app/shared/itemlist/listpage.page';
import { UtilsService } from '../../app/services/utils.service';
import { Observable, Subscription } from 'rxjs';
import { DbService } from './services/db.service';
import { ConfigService } from '../services/config.service';
import { GeoService } from '../services/geo.service';
import { TranslateService } from '@ngx-translate/core';

export function convertObject(data: any, res: any, translate: TranslateService, i18nFields?: string[], plainFields?: string[]): any {
  if (i18nFields) {
    i18nFields.forEach((f) => {
      if (data[f]) {
        if (data[f][translate.currentLang]) {
          res[f] = data[f][translate.currentLang];
        } else {
          res[f] = data[f][translate.defaultLang] || data[f]['it'];
        }
      }
    });
    if (plainFields) {
      plainFields.forEach((f) => {
        if (data[f]) {
          res[f] = data[f];
        }
      });
    }
  }
  return res;
}
export class ComuneListPage extends ListPage implements OnInit {
  category: any;
  mypos: { lat: number, long: number };

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
    super();
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if (params) {
          const cat = JSON.parse(params.category);
          if (!this.category) {
            this.category = cat;
            super.init();
          }
        }
      });
  }

  getList(): Observable<any[]> {
    return new Observable(observer => {
      this.utils.presentLoading();
      const query = this.getQuery();

      this.setMyPosition();

      this.dbService.getObjectByQuery(query).then((data) => {
        if (data.docs.length > 0) {
          const res = this.processList(data.docs);
          res.forEach(o => this.updateDistance(o));
          this.utils.hideLoading();
          observer.next(res);
        }
      }, (err) => {
        this.utils.hideLoading();
        console.error(err);
        observer.error(err);
      });
    })
  }

  private setMyPosition() {
    if (this.config && window[this.config.getAppModuleName()] && window[this.config.getAppModuleName()]['geolocation'] && window[this.config.getAppModuleName()]['geolocation']['lat'] && window[this.config.getAppModuleName()]['geolocation']['long']) {
      this.mypos = {
        lat: window[this.config.getAppModuleName()]['geolocation']['lat'],
        long: window[this.config.getAppModuleName()]['geolocation']['long']
      };
    }
    else {
      this.mypos = {
        lat: this.config.getDefaultPosition().lat,
        long: this.config.getDefaultPosition().long
      };
    }
  }

  processList(list) {
    const res = list.map(x => this.convertObject(x));
    this.sort(res);
    return res;
  }

  sort(list) { }

  convertObject(x) {
    return x;
  }

  getQuery() {
    return this.category.query;
  }

  onExpand(id: string) {
  }

  onContact(data: any) {
    this.utils.openContact(JSON.parse((<any>data).detail));
  }

  updateDistance(element) {
    if (element.location && element.location[0] && element.location[1]) {
      const dist = this.geoSrv.getDistanceKM(
        { lat: this.mypos.lat, lon: this.mypos.long },
        { lat: element.location[0], lon: element.location[1] });
      element.distanceVal = dist;
      element.distance = (this.translate.instant('distance_label') + ' ' + dist.toFixed(2) + ' Km');
    } else {
      element.distanceVal = 0;
      element.distance = this.translate.instant('no_distance_label');
    }
  }
}

export class ComuneDetailPage implements OnInit, OnDestroy {
  paramsSubscription: Subscription;
  item: any;

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
    public zone: NgZone) {}

    ngOnInit() {
      this.paramsSubscription = this.route.queryParams
        .subscribe(params => {
          if (params.objectIds) {
            this.manageoLocalId(params.objectIds);
          } else if (params) {
            this.dbService.getObjectById(params.id).then(data => {
              this.item = this.convertObject(data["docs"][0]);
              if (this.item.image) { this.item.image = this.item.image.replace('_medium.jpg', '.jpg'); }
            });
        }
        });
    }

    ngOnDestroy(): void {
      this.paramsSubscription.unsubscribe();
    }
    goBack() {
      this.navCtrl.back();
    }

    manageoLocalId(objectIds: string[]) {
      if (objectIds.length === 1) {
          this.dbService.getObjectByDataId(objectIds[0]).then(data => {
            this.item = this.convertObject(data.docs[0]);
            if (this.item.image) { this.item.image = this.item.image.replace('_medium.jpg', '.jpg'); }
          });
      }
    }
    convertObject(x: any) {
      return new ComuneDetail(x, this.translate);
    }

    onShare() {
      this.utils.openShare(JSON.stringify(this.item));
    }
    onContact(data: any) {
      this.utils.openContact(JSON.parse((<any>data).detail));
    }
}

export class ComuneObject {
  id: string;
  title: string;
  subtitle: string;
  classification: string;
  cat: string[];
  description: string;
  image: string;
  url: string;
  phone: string;
  email: string;
  address: string;
}

export class POI extends ComuneObject {
  location: number[];

  constructor(x?: any, translate?: TranslateService) {
    super();
    convertObject(x, this, translate, ['title', 'classification', 'cat', 'subtitle', 'description'], ['image', 'location']);
    if (x && x._id) {
      this.id = x._id;
    }
    if (this.image) {
      this.image = x.image.replace('.jpg', '_medium.jpg');
    }
    return this;
  }
}

export class Path extends ComuneObject {
  constructor(x: any, translate: TranslateService) {
    super();
    const res = convertObject(x, this, translate, ['title', 'subtitle', 'description'], ['image']);
    if (x && x._id) {
      res.id = x._id;
    }
    if (res.image) {
      res.image = x.image.replace('.jpg', '_medium.jpg');
    }
    return res;
  }
}

export class ComuneDetail extends ComuneObject {
  eventPeriod: string;
  eventTiming: string;
  info: string;
  topics: string[];
  fromTime: string;
  toTime: string;
  category: string;
  date: string;
  time: string;
  infos: string;

  constructor(x: any, translate: TranslateService) {
    super();
    const res = convertObject(x, this, translate,
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
          res.category = x.category;
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

export class Event extends ComuneDetail {
}

export class Restaurant extends ComuneObject {
  closing: string;
  timetable: string;
  date: string;
  text: string;
  category: string;
  infos: string;

  constructor(x: any, translate: TranslateService) {
    super();
    const res = convertObject(x, this, translate,
      ['title', 'subtitle', 'description', 'classification', 'cat', 'closing', 'timetable', 'address'],
      ['image', 'url', 'location']);
    if (x && x._id) {
      res.id = x._id;
    }
    if (res.image) {
      res.image = x.image.replace('.jpg', '_medium.jpg');
    }
    if (res.timetable) {
      res.date = res.timetable;
    }
    if (res.closing) {
      res.closing = `<b>${translate.instant('closing')}: ${res.closing}</b>`;
    }
    if (res.description) {
      res.text = res.description;
    }
    if (x.category) {
      res.category = x.category.charAt(0).toUpperCase() + x.category.slice(1);
    }
    if (res.classification) {
      res.subtitle = res.classification;
    }
    let tmp = '';
    if (x.contacts) {
      if (x.contacts.phone) {
        res.phone = x.contacts.phone;
      }
      if (x.contacts.email) {
        tmp += '<p>' + x.contacts.email + '</p>';
        res.email = x.contacts.email;
      }
    }

    // merge subtime to subscription
    let description = res.subtitle ? (res.subtitle + '<br>') : '';
    description += res.description ? res.description : '';
    res.description = description;
    res.text += tmp;
    res.infos = JSON.stringify(res);
    return res;
  }
}

export class Hotel extends ComuneObject {
  closing: string;
  timetable: string;
  date: string;
  text: string;
  category: string;
  infos: string;

  constructor(x: any, translate: TranslateService) {
    super();
    const res = convertObject(x, this, translate,
      ['title', 'subtitle', 'description', 'classification', 'cat', 'closing', 'timetable', 'address'],
      ['image', 'url', 'location']);
    if (x && x._id) {
      res.id = x._id;
    }
    if (res.image) {
      res.image = x.image.replace('.jpg', '_medium.jpg');
    }
    if (res.timetable) {
      res.date = res.timetable;
    }
    if (res.closing) {
      res.closing = `<b>${translate.instant('closing')}: ${res.closing}</b>`;
    }
    if (res.description) {
      res.text = res.description;
    }
    let tmp = '';
    if (x.contacts) {
      if (x.contacts.phone) {
        res.phone = x.contacts.phone;
      }
      if (x.contacts.email) {
        tmp += '<p>' + x.contacts.email + '</p>';
        res.email = x.contacts.email;
      }
    }

    // merge subtime to subscription
    let description = res.subtitle ? (res.subtitle + '<br>') : '';
    description += res.description ? res.description : '';
    res.description = description;
    res.text += tmp;
    res.infos = JSON.stringify(res);
    return res;
  }
}

export class TouristService extends ComuneObject {
  text: string;
  infos: string;

  constructor(x: any, translate: TranslateService) {
    super();
    const res = convertObject(x, this, translate,
      ['title', 'subtitle', 'description', 'classification', 'cat', 'address'],
      ['image', 'url']);
    if (x && x._id) {
      res.id = x._id;
    }
    if (res.image) {
      res.image = x.image.replace('.jpg', '_medium.jpg');
    }
    if (res.description) {
      res.text = res.description;
    }
    if (res.classification) {
      res.subtitle = res.classification;
    }
    let tmp = '';
    if (x.contacts) {
      if (x.contacts.phone) {
        res.phone = x.contacts.phone;
      }
      if (x.contacts.email) {
        tmp += '<p>' + x.contacts.email + '</p>';
        res.email = x.contacts.email;
      }
    }

    res.description = res.description ? res.description : '';
    res.text += tmp;
    res.infos = JSON.stringify(res);
    return res;
  }
}
export class Pharmacy extends ComuneObject {
  text: string;
  closing: string;
  timetable: string;
  infos: string;
  location: number[];
  category: string;

  constructor(x: any, translate: TranslateService) {
    super();
    const res = convertObject(x, this, translate,
      ['title', 'subtitle', 'description', 'classification', 'cat', 'closing', 'timetable', 'address'],
      ['image', 'url', 'location']);
    if (x && x._id) {
      res.id = x._id;
    }
    if (res.image) {
      res.image = x.image.replace('.jpg', '_medium.jpg');
    }
    if (res.timetable) {
      res.date = res.timetable;
    }
    if (res.closing) {
      res.closing = `<b>${translate.instant('closing')}: ${res.closing}</b>`;
    }
    if (res.description) {
      res.text = res.description;
    }
    if (x.category) {
      res.category = x.category.charAt(0).toUpperCase() + x.category.slice(1);
    }
    if (res.classification) {
      res.subtitle = res.classification;
    }
    let tmp = '';
    if (x.contacts) {
      if (x.contacts.phone) {
        res.phone = x.contacts.phone;
      }
      if (x.contacts.email) {
        tmp += '<p>' + x.contacts.email + '</p>';
        res.email = x.contacts.email;
      }
    }

    // merge subtime to subscription
    let description = res.subtitle ? (res.subtitle + '<br>') : '';
    description += res.description ? res.description : '';
    res.description = description;
    res.text += tmp;
    res.infos = JSON.stringify(res);
    return res;
  }
}
