import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '../../services/utils.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-list-path',
  templateUrl: './list-path.page.html',
  styleUrls: ['./list-path.page.scss'],
})
export class ListPathPage implements OnInit {
  pois: any = [];
  fullPois: any = [];
  language = 'it';
  category: any;
  typingTimer;
  doneTypingInterval = 500;
  search = false;

  constructor(public navCtrl: NavController,private plt: Platform, private utils: UtilsService, public dbService: DbService, public alertCtrl: AlertController,
    private router: Router, private route: ActivatedRoute, private translate: TranslateService, private config:ConfigService) {
      this.language = window[this.config.getAppModuleName()]['language'];
      this.translate.use(this.language);
  }
  ngOnInit() {
    this.utils.presentLoading();
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        if (params) {
          const cat = JSON.parse(params.category);
          this.category = cat;
        }
      });
  }
  searchAndIos() {
    return this.plt.is('ios') && this.search
  }
  ionViewDidEnter() {
    if (!this.fullPois || this.fullPois.length == 0)
      if (this.category && this.category.query) {
        this.translate.get('init_db').subscribe(value => {
          this.dbService.synch(value).then(() => {
            this.dbService.getObjectByQuery(this.category.query).then((data) => {
              this.pois = data.docs.map(x => this.convertPois(x));
              this.fullPois = this.pois;
              this.utils.hideLoading();

            }, err => {
              this.utils.hideLoading();

            });
          }, err => {
            this.utils.hideLoading();
          })
        })
      }
    const el = document.getElementById('path-list');
    el.addEventListener('pathSelected', path => {
      this.goToDetail((<any>path).detail);
    });
  }
  ionViewWillLeave() {
    const el = document.getElementById('path-list');
    if (el) {
      el.removeEventListener('pathSelected', function (e) {
        console.log(e);
      }, false);
    }
  }
  convertPois(x) {
    const poiElement: any = {};
    if (x) {
      if (x.title) {
        if (x.title[this.language])
          poiElement.title = x.title[this.language];
        else poiElement.title = x.title["it"];
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
        poiElement.image = x.image.replace('.jpg','_medium.jpg');;
      }
      if (x._id) {
        poiElement.id = x._id;
      }
    }
    return poiElement;
  }


  toggleSearch() {
    this.search = !this.search;
    const searchbar = <HTMLElement>document.querySelector('.search-path');
    const searchbarinside = <HTMLElement>document.querySelector('.searchbar-input-container');

    if (searchbar.style.display === 'none') {
      searchbar.style.display = 'contents';
      searchbarinside.style.visibility = 'visible';      searchbar.focus();
    } else {
      searchbar.style.display = 'none';
      searchbarinside.style.visibility = 'hidden';       this.pois = this.fullPois;
    }
  }

  searchChanged(input: any) {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      const value = input.detail.target.value;
      const _this = this;
      this.pois = this.fullPois.filter(function (el) {
        return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
      });
    }, this.doneTypingInterval);
  }

  goToDetail(id) {
    this.router.navigate(['/detail-path'], { queryParams: { id: id } });
  }
}
