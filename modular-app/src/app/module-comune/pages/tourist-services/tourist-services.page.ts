// tslint:disable: no-shadowed-variable
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, PopoverController, Events, ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { PopoverComponent } from 'src/app/shared/popover/popover.component';
import { TranslateService } from '@ngx-translate/core';
import { GeoService } from 'src/app/services/geo.service';
import { AlertInput } from '@ionic/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ConfigService } from '../../services/config.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-tourist-services',
  templateUrl: './tourist-services.page.html',
  styleUrls: ['./tourist-services.page.scss'],
})
export class TouristServicesPage implements OnInit {
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
    private callNumber: CallNumber,
    private utils: UtilsService
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
      }
    );
    this.config.getStringContacts(this.translate, this.language).then(strings => {
      this.stringsContact = strings
    });
    const el = document.getElementById('poi-list');
    if (element) {
      element.addEventListener('expandeClick', async (returnId) => {
        //go to detail
        var id = (<any>returnId).detail
        this.router.navigate(['/detail-event'], { queryParams: { id: id, type: 'EVENT' } });
      })

  }
}

 
  ionViewDidEnter() {

    if (this.category) {
      let query = {
        'selector': {
          "classification.it": "Servizi"
         
        }
      };
      this.dbService.getObjectByQuery(query).then((data) => {
        this.fullPois = data.docs.map(x => this.convertPois(x));
        this.subCategories(this.fullPois);
        this.buildShowPois();
        this.tags = this.buildFilter();
        this.orderArray('near', this);
        this.isLoading = false;
      })
      // .then(x => {
      //   query = { 'selector': { 'element-type': 'restaurant-item' } };
      //   this.dbService.getObjectByQuery(query).then((data) => {
      //     this.fullPois = this.fullPois.concat(data.docs.map(x => this.convertPois(x)));
      //     this.subCategories(this.fullPois);
      //     this.buildShowPois();
      //     this.isLoading = false;
      //   });
      // });
    }
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
          return (item.isChecked && p.classification == item.value)
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
        poiElement.title = x.title[this.language];
      }
      if (x.subtitle) {
        poiElement.description = x.subtitle[this.language];
      }
      if (x.description) {
        poiElement.description += '<br/>' + x.description[this.language];
      }
      if (x.image) {
        poiElement.image = x.image;
      }
      if (x._id) {
        poiElement.id = x._id;
      }
      if (x.timetable) {
        poiElement.date = x.timetable[this.language];
      }
      if (x.closing) {
        if (x.closing[this.language]) {
          poiElement.info = '<b>Chiusura: ' + x.closing[this.language] + '</b>';
        }
      }
      if (x.address) {
        poiElement.address = x.address[this.language];
      }
      if (x.description) {
        poiElement.text = x.description[this.language];
      }
      if (x.category) {
        poiElement.category = x.category.charAt(0).toUpperCase() + x.category.slice(1);
      }
      if (x.classification) {
        poiElement.subtitle = x.classification[this.language];
        // poiElement.cat = [];
        // poiElement.cat.push(x.classification[this.language]);
      }
      if (x.classification) {
        poiElement.classification = x.classification[this.language];
        // poiElement.cat = [];
        // poiElement.cat.push(x.classification[this.language]);
      }
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
    const searchbar = document.querySelector('ion-searchbar');
    if (searchbar.style.display === 'none') {
      searchbar.style.display = 'unset';
      searchbar.setFocus();
    } else {
      searchbar.style.display = 'none';
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


  buildFilter(): any {
    var array = this.fullPois.map(item => item.classification);
    var newArray = array.filter((value, index, self) => {
      return self.indexOf(value) === index

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
  removeTag(tag) {
    this.tags = this.tags.filter(item => item.value != tag.value)
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
  // toggleSearch() {
  //   this.search = !this.search;
  //   const searchbar = document.querySelector('ion-searchbar');
  //   if (searchbar.style.display === 'none') {
  //     searchbar.style.display = 'unset';
  //     searchbar.setFocus();
  //   } else {
  //     searchbar.style.display = 'none';
  //   }
  // }

  // searchChanged(input: any) {
  //   const value = input.detail.target.value;
  //   const _this = this;
  //   _this.categories.forEach(c => {
  //     this.showPois[c] = this.fullPois.filter(function (el) {
  //       return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
  //     });
  //   });
  // }

  // filterClicked() {
  //   this.buildAlert('filter');
  // }

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
