import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.page.html',
  styleUrls: ['./list-event.page.scss'],
})
export class ListEventPage implements OnInit {
  showPois: any = [];
  fullPois: any = [];
  language = 'it';
  category: any;
  private type: string;
  search = false;
  isLoading = true;
  constructor(
    public navCtrl: NavController,
    public dbService: DbService,
    public alertCtrl: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertController
    ) {
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
      this.dbService.getObjectByQuery(this.category.query).then((data) => {
        this.fullPois = data.docs.map(x => this.convertPois(x));
        this.showPois = this.fullPois;
        this.isLoading = false;
      });
    }
    const el = document.getElementById('poi-list');
    el.addEventListener('pathSelected', path => {
      this.type = (<any>path).detail.split(';')[1];
      const id = (<any>path).detail.split(';')[0];
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
      if (x._id) {
        poiElement.id = x._id;
      }
    }
    return poiElement;
  }

  goToDetail(id) {
    this.router.navigate(['/detail-poi'], { queryParams: { id: id, type: this.type } });
  }

  toggleSearch() {
    this.search = !this.search;
  }
  searchChanged(input: any) {
    const value = input.detail.target.value;
    const _this = this;
    this.showPois = this.fullPois.filter(function(el) {
      return (el.title[_this.language].toLowerCase().indexOf(value.toLowerCase()) > -1);
    });
  }
  filterClicked() {
    this.buildAlert();
    console.log('filter');
  }
  async buildAlert() {
    const _this = this;
    const alert = await this.alert.create({
      header: 'Ordina per',
      inputs: [
        {
          name: 'asc',
          type: 'radio',
          label: 'A-Z',
          value: 'asc',
          checked: true
        },
        {
          name: 'desc',
          type: 'radio',
          label: 'Z-A',
          value: 'desc',
          checked: false
        }
      ],
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Modal Closed');
          }
        },
        {
          text: 'OK',
          handler: data => {
             this.orderArray(data, _this);
          }
        }
      ]
    });

   await alert.present();
  }
  orderArray(condition: string, _this: any) {
    if (condition.indexOf('asc') > -1) {
      _this.showPois = this.fullPois.sort(function(a, b) { return a.title[_this.language].localeCompare(b.title[_this.language]); });
    } else {
      _this.showPois = this.fullPois.sort(function(a, b) { return b.title[_this.language].localeCompare(a.title[_this.language]); });
    }
     console.log(_this.showPois);
  }
}
