import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController, PopoverController, Events, IonContent, ModalController, LoadingController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AlertInput } from '@ionic/core';
import { ConfigService } from '../../services/config.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { UtilsService } from '../../services/utils.service';
import { UtilsService as GlobalUtils } from 'src/app/services/utils.service';
import { FilterPageEventPage } from './filter-page-event/filter-page-event.page';
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
    private callNumber: CallNumber,
    private utils: UtilsService
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
    var array = this.fullPois.map(item => item.cat);
    var newArray1 = array.flat();
    var newArray = newArray1.filter((value, index, self) => {
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
  ionViewDidEnter() {
    if (this.category && this.category.query) {
      this.dbService.getObjectByQuery(this.category.query).then((data) => {
        if (data.docs.length > 0) {
          this.fullPois = data.docs.map(x => this.convertPois(x));
          this.subCategories(this.fullPois);
          this.buildShowPois();
          this.tags = this.buildFilter();
          this.utils.hideLoading();

        }
        else {
          this.emptyList = true;
        }
        this.isLoading = false;
        console.log(this.showPois);
      },(err)=>{
        this.utils.hideLoading();
      });

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
  selectInternalElement(ref) {
    var elem: any = document.getElementsByClassName(ref);
    if (elem.length > 0) {
      let yOffset = elem[0].offsetTop;
      this.content.scrollToPoint(0, yOffset, 0)
      // var scrollheight = elem[0].getBoundingClientRect().top;
      // this.content.scrollToPoint(0, scrollheight, 1000);
    }
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
  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    if (visible && this.actualVisualized != target.className)
      this.actualVisualized = target.className;
    console.log(target + "" + visible);
  }
  isSelected(category) {
    return category == this.actualVisualized;
  }
  subCategories(array: Array<any>) {
    array.forEach(element => {
      if (!this.fullCategories.includes(element.category)) {
        this.fullCategories.push(element.category);
      }
    });
    this.categories = this.fullCategories;
    if (this.categories.length > 0)
      this.actualVisualized = this.categories[0]
  }

  buildShowPois(filters?) {
    this.showPois = [];
    this.fullPois.forEach(p => {
      if (!this.showPois[p.category]) {
        this.showPois[p.category] = [];
      }
      if (filters ? filters.filter(item => {
        return (item.isChecked && p.cat.filter(cat => cat == item.value).length > 0)
      }).length > 0 : true) {
        this.showPois[p.category].push(p);
      }
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
      if (x.info) {
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
      if (x.classification) {
        poiElement.classification = x.classification[this.language];
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
    const searchbar = document.querySelector('ion-searchbar');
    if (searchbar.style.display === 'none') {
      searchbar.style.display = 'unset';
      this.presentFilter = true;
      searchbar.setFocus();
    } else {
      searchbar.style.display = 'none';
      this.presentFilter = false;
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
          if (el.title)
            return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1 && el.category == c);
          return false
        });
      });
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
        this.tags = filters.data;

        if (filters.data.some(even)) {
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
    this.tags = this.tags.filter(item => item.value != tag.value)
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
        _this.showPois[c] = _this.showPois[c].sort(function (a, b) { return a.title.localeCompare(b.title); });
      } else {
        _this.showPois[c] = _this.showPois[c].sort(function (a, b) { return b.title.localeCompare(a.title); });
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
