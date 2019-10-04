import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListPage } from 'src/app/shared/itemlist/listpage.page';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-list-poi',
  templateUrl: './list-poi.page.html',
  styleUrls: ['./list-poi.page.scss'],
})
export class ListPoiPage extends ListPage implements OnInit {
  category: any;
  stringsContact: any;
  altImage: string;

  constructor(
    public navCtrl: NavController,
    public dbService: DbService,
    public router: Router,
    public route: ActivatedRoute,
    public modalController: ModalController,
    public utils: UtilsService) {
      super(navCtrl, modalController, router, utils);
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
          const res = data.docs.map(x =>
            this.utils.convertObject(x, ['title', 'classification', 'cat', 'subtitle', 'description'], ['image', 'id', '_id']));
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
    this.router.navigate(['/detail-poi'], { queryParams: { id: id, type: 'POI' } });
  }

}
