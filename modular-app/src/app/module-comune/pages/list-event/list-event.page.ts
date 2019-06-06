import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, PopoverController, Events } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AlertInput } from '@ionic/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.page.html',
  styleUrls: ['./list-event.page.scss']
})
export class ListEventPage implements OnInit {
  showPois: any = [];
  fullPois: any = [];
  language: string;
  category: any;
  private type: string;
  search = false;
  isLoading = true;
  fullCategories: any = [];
  categories: any = [];
  pageTitle: string;

  constructor(
    public navCtrl: NavController,
    public dbService: DbService,
    public alertCtrl: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertController,
    private config: ConfigService,
    public events: Events,
    private translate: TranslateService
    ) {
      this.language = window[this.config.getAppModuleName()]['language'];
     this.translate.use(this.language);
      events.subscribe('radio:selected', x => {
        this.changeCategory(x);
      });
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
        this.subCategories(this.fullPois);
        this.buildShowPois();
        this.isLoading = false;
        console.log(this.showPois);
      });
    }
    const el = document.getElementById('poi-list');
    el.addEventListener('pathSelected', path => {
      this.type = (<any>path).detail.split(';')[1];
      const id = (<any>path).detail.split(';')[0];
      this.goToDetail(id);
    });
  }

  subCategories(array: Array<any>) {
    array.forEach(element => {
      if (!this.fullCategories.includes(element.category)) {
        this.fullCategories.push(element.category);
      }
      this.categories = this.fullCategories;
    });
  }

  buildShowPois() {
    this.fullCategories.forEach(e => {
      this.fullPois.forEach(p => {
        if (!this.showPois[e]) {
          this.showPois[e] = [];
        }
        if (p.category === e) {
          this.showPois[e].push(p);
        }
      });
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
      if (x.topics) {
        poiElement.cat = x.topics;
      }
      if (x.eventPeriod) {
        poiElement.date = x.eventPeriod[this.language];
      }
      if (x.eventTiming) {
        poiElement.time = x.eventTiming[this.language];
      }
      if (x.info)  {
        poiElement.info = x.info[this.language];
      }
      if (x.address) {
        poiElement.address = x.address[this.language];
      }
      if (x.description) {
        poiElement.text = x.description[this.language];
      }
      if (x.category) {
        poiElement.category = x.category;
      }
      if (x.url) {
        poiElement.url = x.url;
      }
      if (x.contacts) {
        if (x.contacts.phone) {
          poiElement.phone = x.contacts.phone;
        }
        if (x.contacts.email) {
          poiElement.email = x.contacts.email;
        }
      }
      poiElement.infos = JSON.stringify(poiElement);
    }
    return poiElement;
  }

  goToDetail(id) {
    this.router.navigate(['/detail-poi'], { queryParams: { id: id, type: this.type } });
  }

  toggleSearch() {
    this.search = !this.search;
    const searchbar = document.querySelector('ion-searchbar');
    if (searchbar.style.display === 'none') {
      searchbar.style.display = 'unset';
      searchbar.setFocus();
    } else {
      searchbar.style.display = 'none';
    }
  }

  searchChanged(input: any) {
    const value = input.detail.target.value;
    const _this = this;
      _this.categories.forEach(c => {
      this.showPois[c] = this.fullPois.filter(function(el) {
        return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
      });
    });
  }

  filterClicked() {
    this.buildAlert('filter');
  }

  async buildAlert(type: string) {
    const _this = this;
    let alInputs: AlertInput[] = [];
    let title: string;
    let handlerFunc: any;

    if (type.indexOf('cat') > -1) {
      handlerFunc = this.changeCategory;
      title = 'Seleziona categoria';
      _this.categories.forEach(c => {
        alInputs.push({
          name: c,
          type: 'radio',
          label: c,
          value: c,
          checked: false
        });
      });
      alInputs.push({
        name: 'tutto',
        type: 'radio',
        label: 'Tutto',
        value: 'Tutto',
        checked: true
      });
    } else {
      handlerFunc = this.orderArray;
      title = 'Ordina per';
      alInputs = [
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
      ];
    }
    const alert = await this.alert.create({
      header: title,
      inputs: alInputs,
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        },
        {
          text: 'OK',
          handler: data => {
            handlerFunc(data, _this);
          }
        }
      ]
    });

   await alert.present();
  }

  orderArray(condition: string, _this: any) {
    _this.categories.forEach(c => {
      if (condition.indexOf('asc') > -1) {
        _this.showPois[c] = this.fullPois.sort(function(a, b) { return a.title.localeCompare(b.title); });
      } else {
        _this.showPois[c] = this.fullPois.sort(function(a, b) { return b.title.localeCompare(a.title); });
      }
    });
  }

  showPopover() {
    this.buildAlert('cat');
    // const popover = await this.popoverController.create({
    //   component: PopoverComponent,
    //   componentProps: {elements: this.fullCategories, controller: this.popoverController},
    //   translucent: true
    // });
    // return await popover.present();
  }

  changeCategory(cat: any, _this?: any) {
    _this.categories = [];
    if (cat && cat.indexOf('Tutto') > -1) {
      _this.categories = _this.fullCategories;
    } else {
      _this.categories.push(cat);
    }
  }
}
