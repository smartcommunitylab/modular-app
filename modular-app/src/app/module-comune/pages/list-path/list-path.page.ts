import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '../../services/utils.service';

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

  constructor(public navCtrl: NavController, private utils: UtilsService, public dbService: DbService, public alertCtrl: AlertController,
    private router: Router, private route: ActivatedRoute, private translate: TranslateService) {
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
  ionViewDidEnter() {
    if (this.category && this.category.query) {
      this.dbService.synch().then(() => {
        this.dbService.getObjectByQuery(this.category.query).then((data) => {
          this.pois = data.docs.map(x => this.convertPois(x));
          this.fullPois = this.pois;
          this.utils.hideLoading();

        },err=> {
          this.utils.hideLoading();

        });
      }, err=> {
        this.utils.hideLoading();
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


  toggleSearch() {
    this.search = !this.search;
    const searchbar = <HTMLElement>document.querySelector('.search-path');
    if (searchbar.style.display === 'none') {
      searchbar.style.display = 'unset';
      searchbar.focus();
    } else {
      searchbar.style.display = 'none';
      this.pois = this.fullPois;
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
