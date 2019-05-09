import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { DbService } from '../../module-comune/services/db.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-poi',
  templateUrl: './list-poi.page.html',
  styleUrls: ['./list-poi.page.scss'],
})
export class ListPoiPage implements OnInit {
  pois: any = [];
  language = 'it';
  category: any;
  constructor(public navCtrl: NavController, public dbService: DbService, public alertCtrl: AlertController,
    private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}
        if (params) {
          const cat = JSON.parse(params.category);
          this.category = cat;
       }
      });

  }
  ionViewDidEnter() {
    if (this.category && this.category.query) {
      this.dbService.getObjectByQuery( this.category.query).then((data) => {
          this.pois = data.docs.map(x => this.convertPois(x));
        });
    }
    // this.dbService.getPois().then((data) => {
    //   this.pois = data.map(x => this.convertPois(x));
    // });

  }
  ionViewDidLoad() {
  }

  convertPois(x) {
    const poiElement: any = {};
    console.log(x);
    if (x ) {
      console.log(x.image);
      if (x.title) {
        poiElement.title = x.title[this.language];
      }
      if (x.subtitle) {
        poiElement.subtitle = x.subtitle[this.language].replace('<p>', '').replace('</p>', '');
      }
      if (x.description) {
        poiElement.description = x.description[this.language];
      }
      if (x.image) {
         poiElement.image = x.image;
      }
      if (x.id) {
        poiElement.id = x.id;
      }
    }
    return poiElement;
  }

  goToDetail(poi) {
    this.router.navigate(['/detail-poi'], { queryParams: { poi: JSON.stringify(poi) } });
    // this.navCtrl.navigateForward('/list-poi');

  }
}
