import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController, IonContent, ModalController, Platform } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../services/config.service';
import { ListPage } from 'src/app/shared/itemlist/listpage.page';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-list-poi',
  templateUrl: './list-poi.page.html',
  styleUrls: ['./list-poi.page.scss'],
})
export class ListPoiPage extends ListPage implements OnInit {
  language: string;
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
      // this.dbService.synch().then(() => {
      //   this.dbService.getObjectByQuery(this.category.query).then((data) => {
      //     if (data.docs.length > 0) {
      //       const res = data.docs.map(x => this.convertPois(x));
      //       this.utils.hideLoading();
      //       observer.next(res);
      //     }
      //   }, (err) => {
      //     this.utils.hideLoading();
      //     console.error(err);
      //     observer.error(err);
      //   });
      // });
    });
  }

  onExpand(id: string) {
    this.router.navigate(['/detail-poi'], { queryParams: { id: id, type: 'POI' } });
  }
  // ionViewDidEnter() {
  //   if (!this.fullPois || this.fullPois.length == 0)
  //     if (this.category && this.category.query) {
  //       this.translate.get('init_db').subscribe(value => {
  //         this.dbService.synch(value).then(() => {
  //           this.dbService.getObjectByQuery(this.category.query).then((data) => {
  //             if (data.docs.length > 0) {
  //               this.fullPois = data.docs.map(x => this.convertPois(x));
  //               this.subCategories(this.fullPois);
  //               this.filterList();
  //               this.tags = this.buildFilter();
  //               this.utils.hideLoading();
  //             }
  //             else {
  //               this.emptyList = true;
  //             }
  //             this.isLoading = false;
  //             console.log(this.showPois);

  //           }, (err) => {
  //             this.utils.hideLoading();
  //           });
  //         });
  //       })
  //     }
  //     else {
  //       this.utils.hideLoading();
  //     }
  //   const element = document.getElementById('poi-list');
  //   this.translate.get('alt_image_string').subscribe(
  //     value => {
  //       this.altImage = value;
  //     }
  //   );
  //   this.config.getStringContacts(this.translate, this.language).then(strings => {
  //     this.stringsContact = strings
  //   });

  // }


  convertPois(x) {
    const poiElement: any = {};
    if (x) {
      if (x.title) {
        if (x.title[this.language])
          poiElement.title = x.title[this.language];
        else poiElement.title = x.title["it"];
      }
      if (x.classification) {
        if (x.classification[this.language])
          poiElement.classification = x.classification[this.language];
        else poiElement.classification = x.classification["it"];
      }
      if (x.cat) {
        if (x.cat[this.language])
          poiElement.cat = x.cat[this.language];
        else poiElement.cat = x.cat["it"];
      }
      if (x.subtitle) {
        if (x.subtitle[this.language])
          poiElement.subtitle = x.subtitle[this.language];
        else poiElement.subtitle = x.subtitle["it"];
      }
      if (x.description) {
        if (x.description[this.language])
          poiElement.description = x.description[this.language];
        else poiElement.description = x.description["it"];
      }
      if (x.image) {
        poiElement.image = x.image;
      }
      if (x.id) {
        poiElement.id = x.id;
      }
      if (x._id) {
        poiElement.id = x._id;
      }
    }
    return poiElement;
  }
}
