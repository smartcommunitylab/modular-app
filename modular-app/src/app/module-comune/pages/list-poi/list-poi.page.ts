import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { DbService } from '../../services/db.service'
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

    const el = document.getElementById('path-list');
    el.addEventListener('pathSelected', path => {
      this.goToDetail((<any>path).detail);
    });
  }

  convertPois(x) {
    const poiElement: any = {};
    if (x ) {
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
      if (x._id) {
        poiElement.id = x._id;
      }
    }
    return poiElement;
  }

  goToDetail(id) {
    this.router.navigate(['/detail-path'], { queryParams: { id: id } });
  }
}
