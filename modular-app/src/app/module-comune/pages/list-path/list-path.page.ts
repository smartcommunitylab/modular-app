import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListPage } from 'src/app/shared/itemlist/listpage.page';
import { UtilsService } from 'src/app/services/utils.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-path',
  templateUrl: './list-path.page.html',
  styleUrls: ['./list-path.page.scss'],
})
export class ListPathPage extends ListPage implements OnInit {
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
      this.dbService.getObjectByQuery(this.category.query).then((data) => {
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

  onCustomEvent(evt: any) {
    if (evt.name === 'pathSelected') {
      this.router.navigate(['/detail-path'], { queryParams: { id: evt.data } });
    }
  }
}
