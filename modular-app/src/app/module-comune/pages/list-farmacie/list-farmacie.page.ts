// tslint:disable: no-shadowed-variable
import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GeoService } from 'src/app/services/geo.service';
import { ConfigService } from '../../services/config.service';
import { ListPage } from 'src/app/shared/itemlist/listpage.page';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/services/utils.service';
// import { Market } from '@ionic-native/market';

@Component({
  selector: 'app-list-farmacie',
  templateUrl: './list-farmacie.page.html',
  styleUrls: ['./list-farmacie.page.scss'],
})
export class ListFarmaciePage extends ListPage implements OnInit {
  turno = true;
  farmacieTurno = '';

  category: any;
  mypos: { lat: number, long: number };

  constructor(
    public navCtrl: NavController,
    public dbService: DbService,
    public router: Router,
    public route: ActivatedRoute,
    public modalController: ModalController,
    public utils: UtilsService,
    public zone: NgZone,
    public translate: TranslateService,
    public geoSrv: GeoService,
    public config: ConfigService) {
      super(navCtrl, modalController, router, utils, zone);
    }

    ngOnInit() {
      this.route.queryParams
        .subscribe(params => {
          if (params) {
            const cat = JSON.parse(params.category);
            if (!this.category) {
              this.category = cat;
              super.init();
              this.farmacieTurno = this.translate.instant('farmacie_turno');
            }
          }
        });
    }

    getList(): Observable<any[]> {
      return new Observable(observer => {
        this.utils.presentLoading();
        const query = { 'selector': { 'elementType': 'poi-item', 'classification.it': 'Farmacia' }};
        this.mypos = {
          lat: window[this.config.getAppModuleName()]['geolocation']['lat'],
          long: window[this.config.getAppModuleName()]['geolocation']['long']
        };

        this.dbService.getObjectByQuery(query).then((data) => {
          if (data.docs.length > 0) {
            const res = data.docs.map(x => this.convertObject(x));
            res.sort((a, b) => a.distanceVal - b.distanceVal);
            this.utils.hideLoading();
            observer.next(res);
          }
        }, (err) => {
          this.utils.hideLoading();
          console.error(err);
          observer.error(err);
        });
      });
    }

    getItemCategory(item: any) {
      return null;
    }

    convertObject(x) {
      const res = this.utils.convertObject(x,
        ['title', 'subtitle', 'description', 'classification', 'cat', 'closing', 'timetable', 'address'],
        ['image', 'url', 'location']);
      if (x && x._id) {
        res.id = x._id;
      }
      if (res.image) {
        res.image = x.image.replace('.jpg', '_medium.jpg');
      }
      if (res.timetable) {
        res.date = res.timetable;
      }
      if (res.closing) {
        res.closing = `<b>${this.translate.instant('closing')}: ${res.closing}</b>`;
      }
      if (res.description) {
        res.text = res.description;
      }
     if (x.category) {
        res.category = x.category.charAt(0).toUpperCase() + x.category.slice(1);
      }
      if (res.classification) {
        res.subtitle = res.classification;
      }
      let tmp = '';
      if (x.contacts) {
        if (x.contacts.phone) {
          res.phone = x.contacts.phone;
        }
        if (x.contacts.email) {
          tmp += '<p>' + x.contacts.email + '</p>';
          res.email = x.contacts.email;
        }
      }

      // merge subtime to subscription
      let description = res.subtitle ? (res.subtitle + '<br>') : '';
      description += res.description ? res.description : '';
      res.description = description;
      res.text += tmp;
      res.infos = JSON.stringify(res);
      this.updateDistance(res);
      return res;
    }

    updateDistance(element) {
      if (element.location && element.location[0] && element.location[1]) {
        const dist = this.geoSrv.getDistanceKM(
          { lat: this.mypos.lat, lon: this.mypos.long },
          { lat: element.location[0], lon: element.location[1] });
        element.distanceVal = dist;
        element.distance = (this.translate.instant('distance_label') + ' ' + dist.toFixed(2) + ' Km');
      } else {
        element.distanceVal = 0;
        element.distance = this.translate.instant('no_distance_label');
      }
    }

    closeTurno() {
    this.turno = false;
  }
  // showPois: any = [];
  // fullPois: any = [];
  // language: string;
  // category: any;
  // tags: any = [];
  // private type: string;
  // firstAccess = true;
  // search = false;
  // isLoading = true;
  // fullCategories: any = [];
  // categories: any = [];
  // pageTitle: string;
  // mypos: { lat: number, long: number };
  // altImage: string;
  // stringsContact: any;
  // distanceLabel: string;
  // farmacieTurno: string;
  // turno: boolean = true;
  // emptyList: boolean = false;
  // closingLabel: string = "";
  // constructor(
  //   // private market: Market,
  //   private modalController: ModalController,
  //   private config: ConfigService,
  //   public navCtrl: NavController,
  //   public dbService: DbService,
  //   public alertCtrl: AlertController,
  //   private router: Router,
  //   private route: ActivatedRoute,
  //   private alert: AlertController,
  //   private popoverController: PopoverController,
  //   public events: Events,
  //   private translate: TranslateService,
  //   private geoSrv: GeoService,
  //   private callNumber: CallNumber,
  //   private utils: UtilsService,
  //   private plt: Platform

  // ) {
  //   if (window[this.config.getAppModuleName()]['language'])
  //     this.language = window[this.config.getAppModuleName()]['language'];
  //   if (window[this.config.getAppModuleName()]['geolocation'])
  //     this.mypos = {
  //       lat: window[this.config.getAppModuleName()]['geolocation']['lat'],
  //       long: window[this.config.getAppModuleName()]['geolocation']['long']
  //     };
  //   else {
  //     this.mypos = this.config.getDefaultPosition();
  //   }
  //   this.translate.use(this.language);
  //   events.subscribe('radio:selected', x => {
  //     this.changeCategory(x);
  //   });
  // }

  // ngOnInit() {
  //   this.utils.presentLoading();
  //   this.route.queryParams
  //     .subscribe(params => {
  //       console.log(params);
  //       if (params) {
  //         const cat = JSON.parse(params.category);
  //         this.category = cat;
  //       }
  //     });
  //   const element = document.getElementById('poi-list');
  //   this.translate.get('alt_image_string').subscribe(
  //     value => {
  //       this.altImage = value;
  //       this.distanceLabel = this.translate.instant('distance_label');
  //       this.closingLabel = this.translate.instant('closing_label');
  //     }
  //   );
  //   this.config.getStringContacts(this.translate, this.language).then(strings => {
  //     this.stringsContact = strings
  //   });
  //   element.addEventListener('contactClick', async (contact) => {
  //     // console.log(contact)
  //     var contactParam = JSON.parse((<any>contact).detail)
  //     if (contactParam.type == 'phone') {
  //       var numberCall = contactParam.value.replace(/\D/g,''); 
  //       window.open('tel:'+numberCall,  '_system')
  //     }
  //     if (contactParam.type == 'address') {
  //       this.utils.openAddressMap(contactParam.value);
  //       console.log('vai all\'indirizzo' + contactParam.value);
  //     }
  //     if (contactParam.type == 'url') {
  //       this.utils.openUrl(contactParam.value);
  //       console.log('vai all\'indirizzo' + contactParam.value);
  //     }
  //     if (contactParam.type == 'share') {
  //       this.utils.openShare(contactParam.value);
  //       console.log('vai all\'indirizzo' + contactParam.value);
  //     }
  //   })
  // }

  // searchAndIos() {
  //   return this.plt.is('ios') && this.search
  // }
  // ionViewDidEnter() {

  //   if (this.category) {
  //     let query = {
  //       'selector': {
  //         'elementType': 'poi-item', 'classification.it': "Farmacia"

  //       }
  //     };
  //     if (!this.fullPois || this.fullPois.length == 0)
  //       this.translate.get('init_db').subscribe(value => {
  //         this.farmacieTurno = this.translate.instant('farmacie_turno');
  //         this.dbService.synch(value).then(() => {
  //           this.dbService.getObjectByQuery(query).then((data) => {
  //             if (data.docs.length > 0) {
  //               this.fullPois = data.docs.map(x => this.convertPois(x));
  //               this.addDistance();
  //               // this.addFarmacieTurno();
  //               this.subCategories(this.fullPois);
  //               this.buildShowPois();
  //               this.tags = this.buildFilter();
  //               this.orderArray('near', this);
  //               this.isLoading = false;
  //               this.utils.hideLoading();
  //             } else {
  //               this.emptyList = true;
  //               this.utils.hideLoading();
  //             }
  //           }, err => {
  //             this.utils.hideLoading();
  //           })
  //         }, err => {
  //           this.utils.hideLoading();
  //         });
  //       })
  //   }
  // }
  // closeTurno() {
  //   this.turno = false;
  // }
  // addFarmacieTurno(): any {
  //   // this.farmacieTurno = `
  //   // `
  // }
  // openMarket() {
  //   var url = ''
  //   if (this.plt.is('android'))
  //     url = 'https://play.google.com/store/apps/details?id=it.pcsoft.FarmComApp'
  //   else url = ' https://apps.apple.com/us/app/farm-pp/id946185284?l=it&ls=1';
  //   {
  //   }
  //   this.utils.openUrl(url); 
  // }
  // addDistance(): any {
  //   this.fullPois.forEach(element => {
  //     element['distance'] = this.geoSrv.getDistanceKM({ lat: this.mypos.lat, lon: this.mypos.long }, { lat: element.location[0], lon: element.location[1] });

  //   });
  // }

  // subCategories(array: Array<any>) {
  //   array.forEach(element => {
  //     if (!this.fullCategories.includes(element.category)) {
  //       this.fullCategories.push(element.category);
  //     }
  //     this.categories = this.fullCategories;
  //   });
  // }

  // buildShowPois(filters?) {
  //   this.showPois = [];
  //   this.fullCategories.forEach(e => {
  //     this.fullPois.forEach(p => {
  //       if (!this.showPois[e]) {
  //         this.showPois[e] = [];
  //       }
  //       if (p.category === e && filters ? filters.filter(item => {
  //         return (item.isChecked && p.classification == item.value)
  //       }).length > 0 : true) {
  //         this.showPois[e].push(p);
  //       }
  //     });
  //   });
  // }

  // convertPois(x) {
  //   let tmp = '';
  //   const poiElement: any = {};
  //   if (x) {
  //     if (x.title) {
  //       if (x.title[this.language]) {
  //         poiElement.title = x.title[this.language];
  //       }
  //       else {
  //         poiElement.title = x.title["it"];
  //       }

  //     }
  //     if (x.subtitle) {
  //       if (x.subtitle[this.language]) {

  //         poiElement.description = x.subtitle[this.language];
  //       } else {
  //         poiElement.description = x.subtitle["it"];

  //       }
  //     }
  //     if (x.description) {
  //       if (x.description[this.language]) {
  //         poiElement.description += '<br/>' + x.description[this.language];
  //       } else {
  //         poiElement.description += '<br/>' + x.description["it"];
  //       }
  //     }

  //     if (x.image) {
  //       poiElement.image = x.image;
  //     }
  //     if (x._id) {
  //       poiElement.id = x._id;
  //     }
  //     if (x.timetable) {
  //       if (x.timetable[this.language]) {
  //         poiElement.date = x.timetable[this.language];
  //       } else {
  //         poiElement.date = x.timetable["it"];
  //       }

  //     }
  //     if (x.closing) {
  //       if (x.closing[this.language]) {
  //         poiElement.info = '<b>' + this.closingLabel + ': ' + x.closing[this.language] + '</b>';
  //       } else {
  //         poiElement.info = '<b>' + this.closingLabel + ': ' + x.closing["it"] + '</b>';
  //       }
  //     }
  //     if (x.address) {
  //       if (x.address[this.language]) {
  //         poiElement.address = x.address[this.language];
  //       }
  //       else {
  //         poiElement.address = x.address["it"];
  //       }
  //     }
  //     if (x.description) {
  //       if (x.description[this.language]) { poiElement.text = x.description[this.language]; }
  //       else {
  //         poiElement.text = x.description["it"];

  //       }
  //     }
  //     if (x.category) {
  //       poiElement.category = x.category.charAt(0).toUpperCase() + x.category.slice(1);
  //     }
  //     if (x.classification) {
  //       if (x.classification[this.language]) { poiElement.classification = x.classification[this.language]; }
  //       else {
  //         poiElement.classification = x.classification["it"];
  //       }
  //     }
  //     if (x.cat) {
  //       if (x.cat[this.language])
  //         poiElement.cat = x.cat[this.language];
  //       else poiElement.cat = x.cat["it"];
  //     }
  //     if (x.url) {
  //       poiElement.url = x.url;
  //     }
  //     if (x.contacts) {
  //       if (x.contacts.phone) {
  //         poiElement.phone = x.contacts.phone;
  //       }
  //       if (x.contacts.email) {
  //         tmp += '<p>' + x.contacts.email + '</p>';
  //         poiElement.email = x.contacts.email;
  //       }
  //     }
  //     if (x.location) {
  //       poiElement.location = x.location;
  //     }
  //     poiElement.text += tmp;
  //     poiElement.infos = JSON.stringify(poiElement);
  //   }
  //   return poiElement;
  // }

  // typingTimer;                //timer identifier
  // doneTypingInterval = 500;  //time in ms, 5 second for example
  // toggleSearch() {
  //   this.search = !this.search;
  //   const searchbar = <HTMLElement>document.querySelector('.search-farmacie');
  //   const searchbarinside = <HTMLElement>document.querySelector('.searchbar-input-container');

  //   if (searchbar.style.display === 'none') {
  //     searchbar.style.display = 'contents';
  //     searchbarinside.style.visibility = 'visible';
  //           searchbar.focus();
  //   } else {
  //     this.emptyList = false;
  //     searchbar.style.display = 'none';
  //     searchbarinside.style.visibility = 'hidden'; 
  //          this.categories.forEach(c => {
  //       this.showPois[c] = this.fullPois.filter(function (el) {
  //         return (el.category == c);
  //       });
  //     });
  //   }
  // }
  // oneElement(category) {
  //   return (this.showPois[category].length > 0)
  // }
  // searchChanged(input: any) {
  //   var emptyList = true;
  //   clearTimeout(this.typingTimer);
  //   this.typingTimer = setTimeout(() => {
  //     if (!input.detail) {
  //       this.categories.forEach(c => {
  //         this.showPois[c] = this.fullPois.filter(function (el) {
  //           return (el.category == c);
  //         });
  //       });
  //       emptyList = false;
  //     }
  //     else {
  //       const value = input.detail.target.value;
  //       const _this = this;
  //       _this.categories.forEach(c => {
  //         this.showPois[c] = this.fullPois.filter(function (el) {
  //           return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
  //         });
  //         if (this.showPois[c].length > 0)
  //           emptyList = false;
  //       });
  //     }
  //     this.emptyList = emptyList;

  //   }, this.doneTypingInterval);
  // }


  // buildFilter(): any {
  //   var array = this.fullPois.map(item => item.cat).flat();
  //   var newArray = array.filter((value, index, self) => {
  //     return self.indexOf(value) === index

  //   })
  //   var value = this.firstAccess ? false : true;
  //   var returnArray = newArray.map(item => {
  //     return {
  //       "value": item,
  //       "isChecked": value
  //     }
  //   })
  //   return returnArray;
  // }
  // removeTag(tag) {
  //   this.tags = this.tags.map(item => tag.value == item.value ? { value: item.value, isChecked: false } : { value: item.value, isChecked: item.isChecked })
  //   this.firstAccess = true;
  //   var even = function (element) {
  //     // checks whether an element is even
  //     return element.isChecked;
  //   };
  //   if (this.tags.some(even)) {
  //     this.firstAccess = false;
  //     this.buildShowPois(this.tags);

  //   } else {
  //     this.buildShowPois();
  //   }
  // }
  // // toggleSearch() {
  // //   this.search = !this.search;
  // //   const searchbar = document.querySelector('ion-searchbar');
  // //   if (searchbar.style.display === 'none') {
  // //     searchbar.style.display = 'unset';
  // //     searchbar.setFocus();
  // //   } else {
  // //     searchbar.style.display = 'none';
  // //   }
  // // }

  // // searchChanged(input: any) {
  // //   const value = input.detail.target.value;
  // //   const _this = this;
  // //   _this.categories.forEach(c => {
  // //     this.showPois[c] = this.fullPois.filter(function (el) {
  // //       return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
  // //     });
  // //   });
  // // }

  // // filterClicked() {
  // //   this.buildAlert('filter');
  // // }

  // async buildAlert(type: string) {
  //   const _this = this;
  //   let alInputs: AlertInput[] = [];
  //   let title: string;
  //   let handlerFunc: any;

  //   if (type.indexOf('cat') > -1) {
  //     handlerFunc = this.changeCategory;
  //     title = 'Seleziona categoria';
  //     _this.categories.forEach(c => {
  //       alInputs.push({
  //         name: c,
  //         type: 'radio',
  //         label: c,
  //         value: c,
  //         checked: false
  //       });
  //     });
  //     alInputs.push({
  //       name: 'tutto',
  //       type: 'radio',
  //       label: 'Tutto',
  //       value: 'Tutto',
  //       checked: true
  //     });
  //   } else {
  //     //filter
  //     title = 'Ordina Per';
  //     handlerFunc = this.orderArray;
  //     alInputs = [
  //       {
  //         name: 'near',
  //         type: 'radio',
  //         label: 'Più vicini',
  //         value: 'near',
  //         checked: true
  //       },
  //       {
  //         name: 'open',
  //         type: 'radio',
  //         label: 'Aperti Adesso',
  //         value: 'open',
  //         checked: false
  //       }
  //     ];
  //   }
  //   const alert = await this.alert.create({
  //     header: title,
  //     inputs: alInputs,
  //     buttons: [
  //       {
  //         text: 'Annulla',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //         }
  //       },
  //       {
  //         text: 'OK',
  //         handler: data => {
  //           handlerFunc(data, this);
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }

  // orderArray(condition: string, _this: any) {
  //   _this.isLoading = true;
  //   if (condition.indexOf('near') > -1) {
  //     _this.categories.forEach(c => {
  //       _this.showPois[c] = _this.showPois[c].sort(function (a, b) {
  //         let dist1 = 0;
  //         let dist2 = 0;
  //         if (a.distance) {
  //           dist1 = a.distance;
  //         }
  //         if (b.distance) {
  //           dist2 = b.distance;
  //         }
  //         return dist1 - dist2;
  //       });
  //     });
  //   }
  //   _this.isLoading = false;
  // }
  // getDistance(poi) {
  //   return this.distanceLabel + (poi.distance).toFixed(2) + " Km";
  // }
  // showPopover() {
  //   this.buildAlert('cat');
  // }

  // changeCategory(cat: any, _this?: any) {
  //   _this.categories = [];
  //   if (cat && cat.indexOf('Tutto') > -1) {
  //     _this.categories = _this.fullCategories;
  //   } else {
  //     _this.categories.push(cat);
  //   }
  // }

  // buildMapPoints() {
  //   const tmp: any = [];
  //   const keys = Object.keys(this.showPois);
  //   keys.forEach(c => {
  //     this.showPois[c].forEach(p => {
  //       // console.log(p);
  //       if (p.location) {
  //         // Check if distance < 1 km
  //         const dist = this.geoSrv.getDistanceKM(
  //           { lat: this.mypos.lat, lon: this.mypos.long },
  //           { lat: p.location[0], lon: p.location[1] }
  //         );
  //         if (dist < 1) {
  //           tmp.push({ name: p.title, lat: p.location[0], lon: p.location[1], address: p.address, distance: dist });
  //         }
  //       }
  //     });
  //   });
  //   // console.log(tmp)
  //   return tmp;
  // }

  // goToMap() {
  //   this.router.navigate(['/map'], { queryParams: { data: JSON.stringify(this.buildMapPoints()) } });
  //   // console.log('CLICKED MAP');
  // }
}
