import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController, IonContent, ModalController, LoadingController, Platform } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '../../services/utils.service';
import { ConfigService } from '../../services/config.service';
import { FilterPagePoiPage } from './filter-page-poi/filter-page-poi.page';
import { GeoService } from 'src/app/services/geo.service';

@Component({
  selector: 'app-list-poi',
  templateUrl: './list-poi.page.html',
  styleUrls: ['./list-poi.page.scss'],
})
export class ListPoiPage implements OnInit {
  showPois: any = [];
  fullPois: any = [];
  firstAccess = true;
  language: string;
  category: any;
  tags: any = [];
  isLoading = true;
  fullCategories: any = [];
  categories: any = [];
  private type: string;
  stringsContact: any;
  altImage: string;
  search = false;
  @ViewChild(IonContent) content: IonContent;
  actualVisualized: string;
  presentFilter = false;
  emptyList: boolean = false;
  distanceLabel: any;
  mypos: { lat: any; long: any; };
  constructor(public navCtrl: NavController,
    public dbService: DbService,
    public alertCtrl: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private modalController: ModalController,
    private utils: UtilsService,
    private geoSrv:GeoService,
    private plt: Platform,
    private loadingController: LoadingController,
    private config: ConfigService) {
    if (window[this.config.getAppModuleName()]['language'])
      this.language = window[this.config.getAppModuleName()]['language'];
    this.translate.use(this.language);
    if (window[this.config.getAppModuleName()]['geolocation'])
    this.mypos = {
      lat: window[this.config.getAppModuleName()]['geolocation']['lat'],
      long: window[this.config.getAppModuleName()]['geolocation']['long']
    };
  else {
    this.mypos = this.config.getDefaultPosition();
  }
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

  buildFilter(): any {
    var array = this.fullPois.map(item => item.cat).flat();
    var newArray1 = array.flat();
    var newArray = newArray1.filter((value, index, self) => {
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

  ionViewDidEnter() {
    if (!this.fullPois || this.fullPois.length == 0)
      if (this.category && this.category.query) {
        this.translate.get('init_db').subscribe(value => {
          this.dbService.synch(value).then(() => {
            this.dbService.getObjectByQuery(this.category.query).then((data) => {
              if (data.docs.length > 0) {
                this.fullPois = data.docs.map(x => this.convertPois(x));
                this.addDistance();
                this.subCategories(this.fullPois);
                this.buildShowPois();
                this.tags = this.buildFilter();
                this.orderArray('near', this);
                this.utils.hideLoading();
              }
              else {
                this.emptyList = true;
              }
              this.isLoading = false;
              console.log(this.showPois);

            }, (err) => {
              this.utils.hideLoading();
            });
          });
        })
      }
      else {
        this.utils.hideLoading();
      }
    const element = document.getElementById('poi-list');
    this.translate.get('alt_image_string').subscribe(
      value => {
        this.altImage = value;
        this.distanceLabel = this.translate.instant('distance_label');
      }
    );
    this.config.getStringContacts(this.translate, this.language).then(strings => {
      this.stringsContact = strings
    });
    if (element) {
      element.addEventListener('expandeClick', async (returnId) => {
        //go to detail
        var id = (<any>returnId).detail
        this.router.navigate(['/detail-comune'], { queryParams: { id: id, type: 'EVENT' } });
      })

      element.addEventListener('contactClick', async (contact) => {
        // console.log(contact)
        var contactParam = JSON.parse((<any>contact).detail)
        if (contactParam.type == 'phone') {
          var numberCall = contactParam.value.replace(/\D/g,''); 
          window.open('tel:'+numberCall,  '_system')
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
  searchAndIos() {
    return this.plt.is('ios') && this.search
  }
  addDistance(): any {
    this.fullPois.forEach(element => {
      element['distance'] = this.geoSrv.getDistanceKM({ lat: this.mypos.lat, lon: this.mypos.long }, { lat: element.location[0], lon: element.location[1] });

    });
  }
  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
       console.log("visible"+visible);
       console.log("this.actualVisualized"+this.actualVisualized);
       console.log("target.className"+target.className);
       if (visible && this.actualVisualized != target.className)
      this.actualVisualized = target.className;
    //scroll to posiition
    var element = document.getElementById(this.actualVisualized);
    if (element)
      element.scrollIntoView({ block: "center" });
    console.log(target + "" + visible);
  }

  isSelected(classification) {
    // console.log("classification"+classification);
    // console.log("this.actualVisualized"+this.actualVisualized);
    return classification == this.actualVisualized;
  }
  onScroll(e) {
    // this.isScrolledIntoView();
  }
  selectInternalElement(ref) {
    var elem: any = document.getElementsByClassName(ref);
    if (elem.length > 0) {
      let yOffset = elem[0].offsetTop;
      this.content.scrollToPoint(0, yOffset - 100, 0)
      // var scrollheight = elem[0].getBoundingClientRect().top;
      // this.content.scrollToPoint(0, scrollheight, 1000);
    }
    this.actualVisualized = ref;
    // console.log("this.actualVisualized"+this.actualVisualized);
    // console.log("ref"+ref);

  }
  convertPois(x) {
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
        else poiElement.classification = x.classification["it"];
      }
      if (x.cat) {
        if (x.cat[this.language])
          poiElement.cat = x.cat[this.language];
        else poiElement.cat = x.cat["it"];
      }
      if (x.location) {
          poiElement.location = x.location;
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
    this.router.navigate(['/detail-comune'], { queryParams: { id: id, type: this.type } });
  }
  getDistance(poi) {
    return this.distanceLabel + (poi.distance).toFixed(2) + " Km";
  }
  typingTimer;                //timer identifier
  doneTypingInterval = 500;  //time in ms, 5 second for example
  toggleSearch() {
    this.search = !this.search;
    const searchbar = <HTMLElement>document.querySelector('.search-poi');
    const searchbarinside = <HTMLElement>document.querySelector('.searchbar-input-container');

    if (searchbar.style.display === 'none') {
      searchbar.style.display = 'contents';
      searchbarinside.style.visibility = 'visible';      this.presentFilter = true;
      searchbar.focus();
    } else {
      searchbar.style.display = 'none';
      searchbarinside.style.visibility = 'hidden';       this.presentFilter = false;
      this.categories.forEach(c => {
        this.showPois[c] = this.fullPois.filter(function (el) {
          return (el.cat[0] == c);
        });
      });
    }
  }
  oneElement(classification) {
    return (this.showPois[classification].length > 0)
  }
  searchChanged(input: any) {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      const value = input.detail.target.value;
      const _this = this;
      _this.categories.forEach(c => {
        this.showPois[c] = this.fullPois.filter(function (el) {
          if (el.title)
            return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1 && el.cat[0] == c);
          return false
        });
      });
    }, this.doneTypingInterval);

  }

  async filterClicked() {
    const modal = await this.modalController.create({
      component: FilterPagePoiPage,
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
          this.presentFilter = true;
          this.firstAccess = false;
          this.buildShowPois(this.tags)

        } else {
          this.presentFilter = false;
          this.buildShowPois()

        }
        this.orderArray('near', this);

      });
    return await modal.present();
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
  removeTag(tag) {
    this.tags = this.tags.map(item => tag.value == item.value ? { value: item.value, isChecked: false } : { value: item.value, isChecked: item.isChecked })
    this.firstAccess = true;
    var even = function (element) {
      // checks whether an element is even
      return element.isChecked;
    };
    if (this.tags.some(even)) {
      this.presentFilter = true;
      this.firstAccess = false;
      this.buildShowPois(this.tags);

    } else {
      this.presentFilter = false;
      this.buildShowPois();
    }
  }
  subCategories(array: Array<any>) {
    array.forEach(element => {
      if (!this.fullCategories.includes(element.cat[0])) {
        this.fullCategories.push(element.cat[0]);
      }
    });
    this.categories = this.fullCategories;
    if (this.categories.length > 0)
      setTimeout(() => this.actualVisualized = this.categories[0]
        , 500)
  }

  buildShowPois(filters?) {
    this.showPois = [];
    this.fullPois.forEach(p => {
      if (!this.showPois[p.cat[0]]) {
        this.showPois[p.cat[0]] = [];
      }
      if (filters ? filters.filter(item => {
        return item.isChecked && p.cat[0] == item.value
      }).length > 0 : true) {
        this.showPois[p.cat[0]].push(p);
      }
    });
  }
}
