// tslint:disable: no-shadowed-variable
import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { ListPage } from 'src/app/shared/itemlist/listpage.page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tourist-services',
  templateUrl: './tourist-services.page.html',
  styleUrls: ['./tourist-services.page.scss'],
})
export class TouristServicesPage extends ListPage implements OnInit {
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
    public zone: NgZone) {
      super(navCtrl, modalController, router, utils, zone);
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
      const query = { 'selector': {'classification.it': 'Servizi'}};
      this.dbService.getObjectByQuery(query).then((data) => {
        if (data.docs.length > 0) {
          const res = data.docs.map(x => this.convertObject(x));
          this.utils.hideLoading();
          observer.next(res);
        }
      }, (err) => {
        this.utils.hideLoading();
        console.error(err);
        observer.error(err);
      });
    });
  }

  onExpand(id: string) {
    this.router.navigate(['/detail-event'], { queryParams: { id: id, type: 'EVENT' } });
  }

  convertObject(x) {
    const res = this.utils.convertObject(x,
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
