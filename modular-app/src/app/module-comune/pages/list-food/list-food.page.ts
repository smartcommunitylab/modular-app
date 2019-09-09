// tslint:disable: no-shadowed-variable
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, PopoverController, Events, ModalController, Platform } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { PopoverComponent } from 'src/app/shared/popover/popover.component';
import { TranslateService } from '@ngx-translate/core';
import { GeoService } from 'src/app/services/geo.service';
import { AlertInput } from '@ionic/core';
import { FilterPageFoodPage } from './filter-page-food/filter-page-food.page';
import { ConfigService } from '../../services/config.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.page.html',
  styleUrls: ['./list-food.page.scss'],
})
export class ListFoodPage implements OnInit {
  showPois: any = [];
  fullPois: any = [];
  language: string;
  category: any;
  tags: any = [];
  private type: string;
  firstAccess = true;
  search = false;
  isLoading = true;
  fullCategories: any = [];
  categories: any = [];
  pageTitle: string;
  mypos: { lat: number, long: number };
  altImage: string;
  stringsContact: any;
  distanceLabel: any;
  noDistanceLabel: any;

  constructor(
    private modalController: ModalController,
    private config: ConfigService,
    public navCtrl: NavController,
    public dbService: DbService,
    public alertCtrl: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertController,
    private popoverController: PopoverController,
    public events: Events,
    private translate: TranslateService,
    private geoSrv: GeoService,
    private utils: UtilsService,
    private plt:Platform

  ) {
    if (window[this.config.getAppModuleName()]['language'])
      this.language = window[this.config.getAppModuleName()]['language'];
    if (window[this.config.getAppModuleName()]['geolocation'])
      this.mypos = {
        lat: window[this.config.getAppModuleName()]['geolocation']['lat'],
        long: window[this.config.getAppModuleName()]['geolocation']['long']
      };
    else {
      this.mypos = this.config.getDefaultPosition();
    }
    this.translate.use(this.language);
    events.subscribe('radio:selected', x => {
      this.changeCategory(x);
    });
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
    const element = document.getElementById('poi-list');
    this.translate.get('alt_image_string').subscribe(
      value => {
        this.altImage = value;
        this.distanceLabel = this.translate.instant('distance_label');
        this.noDistanceLabel = this.translate.instant('no_distance_label');
      }
    );
    this.config.getStringContacts(this.translate, this.language).then(strings => {
      this.stringsContact = strings
    });
    element.addEventListener('tagClicked', async (tag) => {
      // console.log(contact)
      var tagSelected = (<any>tag).detail;
      this.tags = this.tags.map(item => {
        if (item.value == tagSelected)
          return {
            "value": tagSelected,
            "isChecked": true
          }
        else {
          return {
            "value": item.value,
            "isChecked": item.isChecked
          }
        }
      })
      // this.presentFilter = true;
      this.firstAccess = false;
      this.buildShowPois(this.tags)
      console.log(tagSelected);
    })
    element.addEventListener('contactClick', async (contact) => {
      // console.log(contact)
      var contactParam = JSON.parse((<any>contact).detail)
      if (contactParam.type == 'phone') {
        window.open('tel:'+contactParam.value,  '_system')

      }
      if (contactParam.type == 'address') {
        this.utils.openAddressMap(contactParam.value);
        console.log('vai all\'indirizzo' + contactParam.value);
      }
      if (contactParam.type == 'url') {
        this.utils.openUrl(contactParam.value);
        console.log('vai all\'indirizzo' + contactParam.value);
      }
      if (contactParam.type == 'share') {
        this.utils.openShare(contactParam.value);
        console.log('vai all\'indirizzo' + contactParam.value);
      }
    })
  }


  ionViewDidEnter() {
    if (!this.fullPois || this.fullPois.length == 0)
      if (this.category) {
        let query = { 'selector': { 'elementType': 'restaurant-item' } };
        this.translate.get('init_db').subscribe(value => {
          this.dbService.synch(value).then(() => {
            this.dbService.getObjectByQuery(query).then((data) => {
              this.fullPois = data.docs.map(x => this.convertPois(x));
              this.addDistance();
              this.subCategories(this.fullPois);
              this.buildShowPois();
              this.tags = this.buildFilter();
              this.orderArray('near', this);
              this.isLoading = false;
              this.utils.hideLoading();

            }, err => {
              this.utils.hideLoading();

            })
              , err => {
                this.utils.hideLoading();

              }
          })
        })
      }
  }
  addDistance(): any {
    this.fullPois.forEach(element => {
      if (element.location && element.location[0] && element.location[1])
        element['distance'] = this.geoSrv.getDistanceKM({ lat: this.mypos.lat, lon: this.mypos.long }, { lat: element.location[0], lon: element.location[1] });

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

  buildShowPois(filters?) {
    this.showPois = [];
    this.fullCategories.forEach(e => {
      this.fullPois.forEach(p => {
        if (!this.showPois[e]) {
          this.showPois[e] = [];
        }
        if (p.category === e && filters ? filters.filter(item => {
          return (item.isChecked && p.cat[0] == item.value)
        }).length > 0 : true) {
          this.showPois[e].push(p);
        }
      });
    });
  }

  convertPois(x) {
    let tmp = '';
    const poiElement: any = {};
    if (x) {
      if (x.title) {
        if (x.title[this.language])
          poiElement.title = x.title[this.language];
        else poiElement.title = x.title["it"];

      }
      if (x.cat) {
        if (x.cat[this.language])
          poiElement.cat = x.cat[this.language];
        else poiElement.cat = x.cat["it"];
      }
      if (x.description) {
        if (x.description[this.language])
          poiElement.description += '<br/>' + x.description[this.language];
        else poiElement.description += '<br/>' + x.description["it"];
      }
      if (x.image) {
        poiElement.image = x.image.replace('.jpg','_medium.jpg');;
      }
      if (x._id) {
        poiElement.id = x._id;
      }
      if (x.timetable) {
        if (x.timetable[this.language])
          poiElement.date = x.timetable[this.language];
        else poiElement.date = x.timetable["it"];
      }
      if (x.closing) {
        if (x.closing[this.language]) {
          if (x.closing[this.language])
            poiElement.info = '<b>Chiusura: ' + x.closing[this.language] + '</b>';
          else poiElement.info = '<b>Chiusura: ' + x.closing["it"] + '</b>';
        }
      }
      if (x.address) {
        if (x.address[this.language])
          poiElement.address = x.address[this.language];
        else poiElement.address = x.address["it"];
      }
      if (x.description) {
        if (x.description[this.language])
          poiElement.text = x.description[this.language];
        else poiElement.text = x.description["it"];
      }
      if (x.category) {
        poiElement.category = x.category.charAt(0).toUpperCase() + x.category.slice(1);
      }
      if (x.classification) {
        if (x.classification[this.language])
          poiElement.subtitle = x.classification[this.language];
        else poiElement.subtitle = x.classification["it"];
      }
      // if (x.classification) {
      //   if (x.classification[this.language])
      //     poiElement.classification = x.classification[this.language];
      //   else poiElement.classification = x.classification["it"];
      //   // poiElement.cat = [];
      //   // poiElement.cat.push(x.classification[this.language]);
      // }
      if (x.url) {
        poiElement.url = x.url;
      }
      if (x.contacts) {
        if (x.contacts.phone) {
          poiElement.phone = x.contacts.phone;
        }
        if (x.contacts.email) {
          tmp += '<p>' + x.contacts.email + '</p>';
          poiElement.email = x.contacts.email;
        }
      }
      if (x.location) {
        poiElement.location = x.location;
      }
      poiElement.text += tmp;
      poiElement.infos = JSON.stringify(poiElement);
    }
    return poiElement;
  }

  typingTimer;                //timer identifier
  doneTypingInterval = 500;  //time in ms, 5 second for example
  toggleSearch() {
    this.search = !this.search;
    const searchbar = <HTMLElement>document.querySelector('.search-food');
    if (searchbar.style.display === 'none') {
      searchbar.style.display = 'unset';
      searchbar.focus();
    } else {
      searchbar.style.display = 'none';
      this.categories.forEach(c => {
        this.showPois[c] = this.fullPois.filter(function (el) {
          return (el.category == c);
        });
      });
    }
  }
  oneElement(category) {
    return (this.showPois[category].length > 0)
  }
  searchChanged(input: any) {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      const value = input.detail.target.value;
      const _this = this;
      _this.categories.forEach(c => {
        this.showPois[c] = this.fullPois.filter(function (el) {
          return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
        });
      });
    }, this.doneTypingInterval);

  }

  async filterClicked() {
    const modal = await this.modalController.create({
      component: FilterPageFoodPage,
      componentProps: {
        'filters': this.tags
      }
    });
    modal.onDidDismiss()
      .then((filters) => {

        this.firstAccess = true;
        var even = function (element) {
          // checks whether an element is even
          return element.isChecked;
        };
        if (filters.data) {
          this.tags = filters.data;
        }
        if (filters.data && filters.data.some(even)) {

          this.firstAccess = false;
          this.buildShowPois(this.tags)

        } else {
          this.buildShowPois()

        }
        this.orderArray('near', this);
      });
    return await modal.present();
    //this.buildAlert('filter');
  }
  buildFilter(): any {
    var array = this.fullPois.map(item => item.cat).flat();
    var newArray = array.filter((value, index, self) => {
      return (self.indexOf(value) === index && value)

    })
    var value = this.firstAccess ? false : true;
    var returnArray = newArray.map(item => {
      return {
        "value": item,
        "isChecked": value
      }
    })
    return returnArray;
  }
  searchAndIos() {
    return this.plt.is('ios') && this.search
  }
  getDistance(poi) {
    if (poi.distance)
      return this.distanceLabel + (poi.distance).toFixed(2) + " Km";
    else return this.noDistanceLabel;
  }
  removeTag(tag) {
    console.log(tag);
    this.tags = this.tags.map(item => tag.value == item.value ? { value: item.value, isChecked: false } : { value: item.value, isChecked: item.isChecked })
    console.log(JSON.stringify(this.tags));

    this.firstAccess = true;
    var even = function (element) {
      // checks whether an element is even
      return element.isChecked;
    };
    if (this.tags.some(even)) {
      this.firstAccess = false;
      this.buildShowPois(this.tags);

    } else {
      this.buildShowPois();
    }
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
      //filter
      title = 'Ordina Per';
      handlerFunc = this.orderArray;
      alInputs = [
        {
          name: 'near',
          type: 'radio',
          label: 'Più vicini',
          value: 'near',
          checked: true
        },
        {
          name: 'open',
          type: 'radio',
          label: 'Aperti Adesso',
          value: 'open',
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
            handlerFunc(data, this);
          }
        }
      ]
    });

    await alert.present();
  }

  orderArray(condition: string, _this: any) {
    _this.isLoading = true;
    if (condition.indexOf('near') > -1) {
      _this.categories.forEach(c => {
        _this.showPois[c] = _this.showPois[c].sort(function (a, b) {
          let dist1 = 0;
          let dist2 = 0;
          if (a.location) {
            dist1 = _this.geoSrv.getDistanceKM({ lat: _this.mypos.lat, lon: _this.mypos.long }, { lat: a.location[0], lon: a.location[1] });
          }
          if (b.location) {
            dist2 = _this.geoSrv.getDistanceKM({ lat: _this.mypos.lat, lon: _this.mypos.long }, { lat: b.location[0], lon: b.location[1] });
          }
          return dist1 - dist2;
        });
      });
    }
    _this.isLoading = false;
  }

  showPopover() {
    this.buildAlert('cat');
  }

  changeCategory(cat: any, _this?: any) {
    _this.categories = [];
    if (cat && cat.indexOf('Tutto') > -1) {
      _this.categories = _this.fullCategories;
    } else {
      _this.categories.push(cat);
    }
  }

  buildMapPoints() {
    const tmp: any = [];
    const keys = Object.keys(this.showPois);
    keys.forEach(c => {
      this.showPois[c].forEach(p => {
        // console.log(p);
        if (p.location) {
          // Check if distance < 1 km
          const dist = this.geoSrv.getDistanceKM(
            { lat: this.mypos.lat, lon: this.mypos.long },
            { lat: p.location[0], lon: p.location[1] }
          );
          if (dist < 1) {
            tmp.push({ name: p.title, lat: p.location[0], lon: p.location[1], address: p.address, distance: dist });
          }
        }
      });
    });
    // console.log(tmp)
    return tmp;
  }

  goToMap() {
    this.router.navigate(['/map'], { queryParams: { data: JSON.stringify(this.buildMapPoints()) } });
    // console.log('CLICKED MAP');
  }
}
