import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController, PopoverController, Events, IonContent, ModalController, LoadingController, Platform } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AlertInput } from '@ionic/core';
import { ConfigService } from '../../services/config.service';
import { UtilsService } from '../../services/utils.service';
import { UtilsService as GlobalUtils } from 'src/app/services/utils.service';
import { FilterPageEventPage } from './filter-page-event/filter-page-event.page';
import moment from 'moment';
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
  tags: any = [];
  firstAccess = true;
  search = false;
  isLoading = true;
  fullCategories: any = [];
  categories: any = [];
  pageTitle: string;
  stringsContact: any;
  altImage: string;
  @ViewChild(IonContent) content: IonContent;
  actualVisualized: string;
  presentFilter = false;
  emptyList: boolean = false;
  mainEventLabel: any;
  todayDate: any = moment();
  nextWeekDate: any = moment().add(1, 'weeks');
  constructor(
    private globalUtils: GlobalUtils,
    private loading: LoadingController,
    public navCtrl: NavController,
    private modalController: ModalController,
    public dbService: DbService,
    public alertCtrl: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertController,
    private config: ConfigService,
    public events: Events,
    private translate: TranslateService,
    private utils: UtilsService,
    private plt: Platform
  ) {
    this.language = window[this.config.getAppModuleName()]['language'];
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

  }
  
  onScroll(e) {
    // this.isScrolledIntoView();
  }
  buildFilter(): any {
    var array = this.fullPois.map(item => item.cat).flat();
    // var arrayMultipleEvent = this.fullPois.filter(item => item.parentObjectName !=null);
    // var arrayMultipleEventTags = arrayMultipleEvent.map(item => {
    //   return item.parentObjectName
    //  });
    // array=array.concat(arrayMultipleEventTags);
    var newArray1 = array.flat();
    var newArray = newArray1.filter((value, index, self) => {
      return self.indexOf(value) === index && value != undefined

    })
    var value = this.firstAccess ? false : true;
    var returnArray = newArray.map(item => {
      return {
        "value": item,
        "isChecked": value
      }
    })
    //addmultipleEventTag
    return returnArray;

  }
  ionViewDidEnter() {
    this.translate.get('main_event_label').subscribe(
      value => {
        this.mainEventLabel = value;
      }
    );
    if (!this.fullPois || this.fullPois.length == 0)
      if (this.category && this.category.query) {
        this.translate.get('init_db').subscribe(value => {
          this.dbService.synch(value).then(() => {
            this.dbService.getObjectByQuery(this.category.query).then((data) => {
              if (data.docs.length > 0) {
                this.fullPois = data.docs.map(x => this.convertPois(x));
                this.spreadEvents();
                this.subCategories(this.fullPois);
                this.buildShowPois();
                this.tags = this.buildFilter();
                this.selectFirstDate();
              }
              else {
                this.emptyList = true;
              }
              this.isLoading = false;
              this.utils.hideLoading();
              console.log(this.showPois);
            }, (err) => {
              this.utils.hideLoading();
            });
          });
        })

      } else {
        this.utils.hideLoading();
      }
    const element = document.getElementById('poi-list');
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
        this.router.navigate(['/detail-event'], { queryParams: { id: id, type: 'EVENT' } });
      })

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
        this.presentFilter = true;
        this.firstAccess = false;
        this.buildShowPois(this.tags)
        console.log(tagSelected);
      })
      element.addEventListener('contactClick', async (contact) => {
        var contactParam = JSON.parse((<any>contact).detail)
        if (contactParam.type == 'phone') {
          window.open('tel:' + contactParam.value, '_system')

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

  spreadEvents(): any {
    //take every event in fullpois e spread it for days;
    var spreadArray = [];
    for (var i = 0; i < this.fullPois.length; i++) {
      var day = moment();
      var from = moment(this.fullPois[i].fromTime).startOf('day');
      var to = moment(this.fullPois[i].toTime).endOf('day');
      if (!from && !to) {
        //main event
        spreadArray.push(this.fullPois[i]);
      }
      else for (var k = 0; k < 7; k++) {
        var poi = JSON.parse(JSON.stringify(this.fullPois[i]));
        if (day.isBetween(from, to)) {
          var dayP = moment(day);
          poi['day'] = dayP;
          spreadArray.push(poi);
        }
        day.add(1, 'days');
      }

    }
    function compare(a, b) {
      if (a['day'].unix() < b['day'].unix()) {
        return -1;
      }
      if (a['day'].unix() > b['day'].unix()) {
        return 1;
      }
      return 0;
    }
    spreadArray.sort(compare);
    this.fullPois = spreadArray;
  }
  searchAndIos() {
    return this.plt.is('ios') && this.search
  }
  selectInternalElement(ref) {
    var elem: any = document.getElementsByClassName(ref);
    if (elem.length > 0) {
      let yOffset = elem[0].offsetTop;
      this.content.scrollToPoint(0, yOffset - 100, 0)

    }
    this.actualVisualized = ref;
  }
  compareActual(c) {
    return c.startOf('day').format('DD-MM-YYYY') == this.actualVisualized;
  }
  isScrolledIntoView() {
    var element = document.querySelector('.poi');
    var position = element[0].getBoundingClientRect();

    // checking whether fully visible
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      console.log('Element is fully visible in screen');
    }

    // checking for partial visibility
    if (position.top < window.innerHeight && position.bottom >= 0) {
      console.log('Element is partially visible in screen');
    }
  }
  getClassName(day) {
    return day.startOf('day').format('DD-MM-YYYY');
  }
  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    if (visible && this.actualVisualized != target.className) {
      this.actualVisualized = target.className;
      //scroll to posiition
      var element = document.getElementById(this.actualVisualized);
      if (element)
        element.scrollIntoView({ block: "center" });
    }
    console.log(target + "" + visible);
  }
  isSelected(category) {
    return category.startOf('day').format('DD-MM-YYYY') == this.actualVisualized;
  }
  getDateSTring(c) {
    return c.startOf('day').format('DD-MM-YYYY');
  }
  subCategories(array: Array<any>) {
    array.forEach(element => {
      if (element.day && this.fullCategories.filter(day => {
        return day.startOf('day').format('DD-MM-YYYY') === element.day.startOf('day').format('DD-MM-YYYY')
      }).length == 0) {
        this.fullCategories.push(element.day);
      }
    });
    this.categories = this.fullCategories;

  }
  selectFirstDate() {
    if (this.categories.length > 0)
      setTimeout(() => {
        this.actualVisualized = this.categories[0].startOf('day').format('DD-MM-YYYY');
        //scroll to posiition
        var element = document.getElementById(this.actualVisualized);
        if (element)
          element.scrollIntoView({ block: "center" });
      }
        , 500)
  }

  buildShowPois(filters?) {
    this.showPois = [];
    this.fullPois.forEach(p => {
      if (!this.showPois[p.day.startOf('day').format('DD-MM-YYYY')]) {
        this.showPois[p.day.startOf('day').format('DD-MM-YYYY')] = [];
      }
      if (filters ? filters.filter(item => {
        if (p.cat)
          return (item.isChecked && p.cat.filter(cat => cat == item.value).length > 0)
        else {
          console.log(JSON.stringify(p))
          return false
        }
        // if (p.cat)
        // return (item.isChecked && (p.cat.filter(cat => cat == item.value).length > 0 || p.parentObjectName == item.value))
        // else (item.isChecked &&   p.parentObjectName == item.value)
      }).length > 0 : true) {
        this.showPois[p.day.startOf('day').format('DD-MM-YYYY')].push(p);
      }
    });
    //orderArray
    this.orderArray('asc', this);
    this.content.scrollToTop(1500);

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
      if (x.fromTime) {
        poiElement.fromTime = x.fromTime;
      }
      if (x.toTime) {
        poiElement.toTime = x.toTime;
      }
      if (x.description) {
        if (x.description[this.language])
          poiElement.description = x.description[this.language];
        else poiElement.description = x.description["it"];
      }
      if (x.image) {
        poiElement.image = x.image.replace('.jpg', '_medium.jpg');;
      }
      if (x._id) {
        poiElement.id = x._id;
      }
      if (x.topics) {
        poiElement.topics = x.topics;
      }
      else poiElement["topics"] = [];
      if (x.cat) {
        if (x.cat[this.language])
          poiElement.cat = x.cat[this.language];
        else poiElement.cat = x.cat["it"];
      }
      if (x.eventPeriod) {
        if (x.eventPeriod[this.language])
          poiElement.date = x.eventPeriod[this.language];
        else poiElement.date = x.eventPeriod["it"];
      }
      if (x.eventTiming) {
        if (x.eventTiming[this.language])
          poiElement.time = x.eventTiming[this.language];
        else poiElement.time = x.eventTiming["it"];
      }
      if (x.info) {
        if (x.info[this.language])
          poiElement.info = x.info[this.language];
        else poiElement.info = x.info["it"];
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
      if (x.parentEventId) {
        if (poiElement.cat)
          poiElement.cat.push(JSON.parse(x.parentEventId).objectName);
        else poiElement["topics"] = [JSON.parse(x.parentEventId).objectName];
        // poiElement.parentObjectName = JSON.parse(x.parentEventId).objectName;
      }
      //TO DO
      if (x.category) {
        if (x.category == 'event') {
          poiElement.category = this.mainEventLabel;
          poiElement.cat = [this.mainEventLabel];
        }
        else
          poiElement.category = x.category;
      }
      if (x.classification) {
        if (x.classification[this.language])
          poiElement.classification = x.classification[this.language];
        else poiElement.classification = x.classification["it"];
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
    this.router.navigate(['/detail-event'], { queryParams: { id: id, type: this.type } });
  }
  typingTimer;                //timer identifier
  doneTypingInterval = 500;  //time in ms, 5 second for example
  toggleSearch() {
    this.search = !this.search;
    const searchbar = <HTMLElement>document.querySelector('.search-event');
    const searchbarinside = <HTMLElement>document.querySelector('.searchbar-input-container');

    if (searchbar.style.display === 'none') {
      searchbar.style.display = 'contents';
      searchbarinside.style.visibility = 'visible';
      this.presentFilter = true;
      searchbar.focus();
    } else {
      searchbar.style.display = 'none';
      searchbarinside.style.visibility = 'hidden';

      this.presentFilter = false;
      this.categories.forEach(c => {
        this.showPois[c] = this.fullPois.filter(function (el) {
          return (el.day.startOf('day').format('DD-MM-YYYY') == c.startOf('day').format('DD-MM-YYYY'));
        });
      });
    }
  }
  oneElement(category) {
    return (this.showPois[category] && this.showPois[category].length > 0)
  }
  searchChanged(input: any) {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      if (input.detail){
      const value = input.detail.target.value;
      const _this = this;
      _this.categories.forEach(c => {
        this.showPois[c] = this.fullPois.filter(function (el) {
          if (el.title)
            return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1 && el.day.startOf('day').format('DD-MM-YYYY') == c.startOf('day').format('DD-MM-YYYY'));
          return false
        });
      });
    }else {
      this.buildShowPois()
    }
    }, this.doneTypingInterval);

  }

  async filterClicked() {
    const modal = await this.modalController.create({
      component: FilterPageEventPage,
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
      });
    return await modal.present();
    //this.buildAlert('filter');
  }
  // filterClicked() {
  //   this.buildAlert('filter');
  // }
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
        _this.showPois[c] = _this.showPois[c.format('DD-MM-YYYY')].sort((a, b) => {
          if (a.fromTime == a.toTime && b.fromTime != b.toTime)
            return -1
          else {
            if (a.fromTime > b.fromTime)
              return 1
            else
              -1
          }
        });
      } else {
        _this.showPois[c] = _this.showPois[c.format('DD-MM-YYYY')].sort((a, b) => (a.fromTime < b.fromTime) ? 1 : -1);
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
