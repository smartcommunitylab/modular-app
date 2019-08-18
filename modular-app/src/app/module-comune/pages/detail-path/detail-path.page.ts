import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from '../../services/db.service';
import { AlertController } from '@ionic/angular';
import { GeoService } from 'src/app/services/geo.service';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '../../services/utils.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ConfigService } from '../../services/config.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-path',
  templateUrl: './detail-path.page.html',
  styleUrls: ['./detail-path.page.scss'],
})
export class DetailPathPage implements OnInit {
  paths: any;
  showPois: any = [];
  fullPois: any = [];
  language: string;
  jsonTabs = JSON.stringify([{ target: 'info', icon: 'info' }, { target: 'place', icon: 'place' }, { target: 'map', icon: 'map' }]);
  tabActived = 'info';
  isLoading = false;
  mapPoints: any = [];
  search = false;
  myPos: any = {};
  altImage: any;
  stringsContact: any;
  paramsSubscription: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dbService: DbService,
    private config: ConfigService,
    private alert: AlertController,
    private geoSrv: GeoService,
    private translate: TranslateService,
    private utils: UtilsService,
    private location: Location,
    private callNumber: CallNumber
  ) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
  }

  private getPois(path: any) {
    this.dbService.synch().then(() => {
    path.steps.forEach(element => {
      const query = {
        selector: {
          'category': 'cultura',
          'localId': element
        }
      };
        this.dbService.getObjectByQuery(query).then(data => {
          if (data.docs[0]) {
            this.fullPois.push(this.convertPois(data.docs[0]));
          }
        }).then(() => {
          this.showPois = this.fullPois;
          this.isLoading = false;
          this.utils.hideLoading();

        });
      });
    });
  }

  ngOnInit() {
    this.utils.presentLoading();
    if (window[this.config.getAppModuleName()]['geolocation'])
      this.myPos = {
        lat: window[this.config.getAppModuleName()]['geolocation']['lat'],
        long: window[this.config.getAppModuleName()]['geolocation']['long']
      };
    else {
      this.myPos = this.config.getDefaultPosition();
    }
    this.paramsSubscription = this.route.queryParams
      .subscribe(params => {
        if (params) {
          const id = params.id.split(';')[0];
          this.isLoading = true;
          this.dbService.synch().then(() => {
            this.dbService.getObjectById(id).then(data => {
              this.paths = data.docs[0];
              this.buildLangPaths();
              this.getPois(this.paths);
            });
          }, err => {
            this.utils.hideLoading();
          })
        }
      }, err => {
        this.utils.hideLoading();
      });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
  ionViewDidEnter() {
    const element = document.getElementById('path');

    // // const el = document.getElementById('tabs');
    // element.addEventListener('tabSelected', path => {
    //   this.tabActived = (<any>path).detail;
    //   if (this.tabActived === 'map') {
    //     this.buildMapPoints();
    //   }
    // });
    // window.addEventListener('pathSelected', target => {
    //   this.goToPoi((<any>target).detail);
    // });
    window.addEventListener('actionSelected', target => {
      this.goToPoi((<any>target).detail);
    });
    this.translate.get('alt_image_string').subscribe(
      value => {
        this.altImage = value;
      }
    );
    this.config.getStringContacts(this.translate, this.language).then(strings => {
      this.stringsContact = strings
    });
    if (element) {
      element.addEventListener('expandeClick', async (returnId) => {
        //go to detail
        var id = (<any>returnId).detail
        this.router.navigate(['/detail-poi'], { queryParams: { id: id, type: 'POI' } });
        this.paramsSubscription.unsubscribe();

      })

      element.addEventListener('contactClick', async (contact) => {
        // console.log(contact)
        var contactParam = JSON.parse((<any>contact).detail)
        if (contactParam.type == 'phone') {
          this.callNumber.callNumber(contactParam.value, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
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
  }
  ionViewWillLeave() {
    const element = document.getElementById('path');
    if (element) {
      //   element.removeEventListener('pathSelected',function(e) {
      //     console.log(e);
      // }, false);
      element.removeEventListener('actionSelected', function (e) {
        console.log(e);
      }, false);
      element.removeEventListener('expandeClick', function (e) {
        console.log(e);
      }, false);

      element.removeEventListener('contactClick', function (e) {
        console.log(e);
      }, false);
    }
  }
  goMap() {
    localStorage.setItem('path', JSON.stringify(this.fullPois));
    this.paramsSubscription.unsubscribe();
    this.router.navigate(['/map-path'], { queryParams: { id: this.paths.id } });
  }
  goBack() {
    this.location.back();
  }
  share() {
this.utils.openShare(JSON.stringify(this.paths));
  }
  buildLangPaths() {
    this.paths.description = this.paths.description[this.language];
    this.paths.info = this.paths.info[this.language];
    this.paths.subtitle = this.paths.subtitle[this.language];
    this.paths.title = this.paths.title[this.language];
    this.paths.difficulty = this.paths.difficulty[this.language];
    console.log(this.paths)
    // this.paths.contacts = {address: this.paths.address}
  }

  // buildMapPoints() {
  //   this.fullPois.forEach(element => {
  //     this.mapPoints.push({
  //       id: element._id,
  //       lat: element.location[0],
  //       lon: element.location[1],
  //       name: element.title[this.language],
  //       address: element.address[this.language],
  //       distance: this.geoSrv.getDistanceKM(this.myPos, {lat: element.location[0], lon: element.location[1]})
  //     });
  //   });
  //   this.mapPoints.push({
  //     lat: this.myPos.lat,
  //     lon: this.myPos.lon,
  //     name: 'myPos',
  //     distance: 0
  //   });
  //   this.mapPoints = JSON.stringify(this.mapPoints);
  // }

  goToPoi(id) {
    this.router.navigate(['/detail-poi'], { queryParams: { id: id } });
  }

  toggleSearch() {
    this.search = !this.search;
  }
  searchChanged(input: any) {
    const value = input.detail.target.value;
    const _this = this;
    this.showPois = this.fullPois.filter(function (el) {
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

  convertPois(x) {
    let tmp = '';
    const poiElement: any = {};
    if (x) {
      if (x.title) {
        poiElement.title = x.title[this.language];
      }
      if (x.classification) {
        poiElement.classification = x.classification[this.language];
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
      poiElement.infos = JSON.stringify(poiElement);
    }
    return poiElement;
  }
  orderArray(condition: string, _this: any) {
    if (condition.indexOf('asc') > -1) {
      _this.showPois = this.fullPois.sort(function (a, b) { return a.title[_this.lang].localeCompare(b.title[_this.lang]); });
    } else {
      _this.showPois = this.fullPois.sort(function (a, b) { return b.title[_this.lang].localeCompare(a.title[_this.lang]); });
    }
    console.log(_this.showPois);
  }
}
