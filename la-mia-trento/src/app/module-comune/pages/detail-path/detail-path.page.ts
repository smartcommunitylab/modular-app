import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from '../../services/db.service';
import { AlertController } from '@ionic/angular';
import { GeoService } from 'src/app/services/geo.service';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '../../services/utils.service';
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
  tracciato: string = "";
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
    private location: Location
  ) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
  }

  private getPois(path: any) {
    // this.dbService.synch().then(() => {
    const query = {
      "selector": {
        "$or": []
      }
    };
    path.steps.forEach(element => {
      query.selector.$or.push({ "localId": element })
    });

    this.dbService.getObjectByQuery(query).then(data => {

      if (data.docs) {
        //order by id of path
        data.docs.sort(function (a, b) {
          return path.steps.indexOf(a.id) - path.steps.indexOf(b.id);
        });
        data.docs.forEach(element => {
          this.fullPois.push(this.convertPois(element));

        });
      }
    }).then(() => {
      this.showPois = this.fullPois;
      this.isLoading = false;
      this.utils.hideLoading();

    });
  }
  manageoLcalId(objectIds): Promise<any> {
    return new Promise((resolve, reject) => {
      if (objectIds.length == 1) {
        this.translate.get('init_db').subscribe(value => {
          this.dbService.synch(value).then(() => {
            this.dbService.getObjectByDataId(objectIds[0]).then(data => {
              resolve(data.docs[0]._id);
            }, err => {
              reject
            });
          }, err => {
            reject()
          });
        }, err => {
          reject()
        })
      } else reject()
    })
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
      .subscribe(async params => {
        if (params) {
          var id = ""
          if (params.id)
            id = params.id.split(';')[0];
          if (params.objectIds)
            id = await this.manageoLcalId(params.objectIds)
          this.isLoading = true;
          this.translate.get('init_db').subscribe(value => {
            this.dbService.synch(value).then(() => {
              this.dbService.getObjectById(id).then(data => {
                this.paths = data.docs[0];
                // console.log("paths"+JSON.stringify(this.paths))

                this.buildLangPaths();
                if (this.paths)
                  this.tracciato = this.paths.tracciato;
                this.getPois(this.paths);
              });
            }, err => {
              this.utils.hideLoading();
            })
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
        this.router.navigate(['/detail-comune'], { queryParams: { id: id, type: 'POI' } });
        this.paramsSubscription.unsubscribe();

      })

      element.addEventListener('contactClick', async (contact) => {
        // console.log(contact)
        var contactParam = JSON.parse((<any>contact).detail)
        if (contactParam.type == 'phone') {
          var numberCall = contactParam.value.replace(/\D/g, '');
          window.open('tel:' + numberCall, '_system')
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
    if (this.fullPois)
      localStorage.setItem('path', JSON.stringify(this.fullPois));
    if (this.tracciato)
      localStorage.setItem('tracciato', JSON.stringify(this.tracciato));
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
    if (this.paths.description[this.language])
      this.paths.description = this.paths.description[this.language];
    else this.paths.description = this.paths.description["it"];

    if (this.paths.info[this.language])
      this.paths.info = this.paths.info[this.language];
    else this.paths.info = this.paths.info["it"];

    if (this.paths.title[this.language])
      this.paths.title = this.paths.title[this.language];
    else this.paths.title = this.paths.title["it"];

    if (this.paths.subtitle[this.language])
      this.paths.subtitle = this.paths.subtitle[this.language];
    else this.paths.subtitle = this.paths.subtitle["it"];

    if (this.paths.difficulty[this.language])
      this.paths.difficulty = this.paths.difficulty[this.language];
    else this.paths.difficulty = this.paths.difficulty["it"];

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
    this.router.navigate(['/detail-comune'], { queryParams: { id: id } });
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
        if (x.title[this.language])
          poiElement.title = x.title[this.language];
        else poiElement.title = x.title["it"];
      }
      if (x.classification) {
        if (x.classification[this.language])
          poiElement.classification = x.classification[this.language];
        else poiElement.classification = x.title["it"];
      }
      if (x.subtitle) {
        if (x.subtitle[this.language])
          poiElement.subtitle = x.subtitle[this.language];
        else poiElement.subtitle = x.title["it"];
      }
      if (x.description) {
        if (x.description[this.language])
          poiElement.description = x.description[this.language];
        else poiElement.description = x.title["it"];
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