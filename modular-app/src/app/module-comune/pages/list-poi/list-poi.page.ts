import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-list-poi',
  templateUrl: './list-poi.page.html',
  styleUrls: ['./list-poi.page.scss'],
})
export class ListPoiPage implements OnInit {
  pois: any = [];
  language: string;
  category: any;
  private type: string;
  constructor(public navCtrl: NavController, public dbService: DbService, public alertCtrl: AlertController,
    private router: Router, private route: ActivatedRoute, private config: ConfigService) {
      this.language = window[this.config.getAppModuleName()]['language'];
  }


  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
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
    } else if (this.category && this.category.objectIds) {
      this.category.objectIds.forEach(id => {
        this.dbService.getObjectByDataId(id).then((data) => {
          this.pois.push(data.docs[0]);
        }).then(() => {
          const tmp = this.pois;
          this.pois = tmp.map(x => this.convertPois(x));
        });
      });
    }
    const el = document.getElementById('poi-list');
    el.addEventListener('pathSelected', path => {
      this.type = ((<any>path).detail).split(';')[1];
      const id = ((<any>path).detail).split(';')[0];
      this.goToDetail(id);
    });
  }

  convertPois(x) {
    const poiElement: any = {};
    if (x) {
      if (x.title) {
        poiElement.title = x.title[this.language];
      }
      if (x.subtitle) {
        poiElement.subtitle = x.subtitle[this.language];
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
    this.router.navigate(['/detail-poi'], { queryParams: { id: id, type: this.type } });
  }
}
