import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController, IonContent, ModalController, LoadingController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { UtilsService } from '../../services/utils.service';
import { ConfigService } from '../../services/config.service';
import { FilterPagePoiPage } from './filter-page-poi/filter-page-poi.page';

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
  constructor(public navCtrl: NavController,
    public dbService: DbService,
    public alertCtrl: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private callNumber: CallNumber,
    private modalController: ModalController,
    private utils: UtilsService,
    private loadingController: LoadingController,
    private config: ConfigService) {
    this.language = window[this.config.getAppModuleName()]['language'];
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
    var array = this.fullPois.map(item => item.classification);
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

      }, (err)=> {
        this.utils.hideLoading();
      });
    }
    else {
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
  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    if (visible && this.actualVisualized != target.className)
      this.actualVisualized = target.className;
    console.log(target + "" + visible);
  }

  isSelected(classification) {
    return classification == this.actualVisualized;
  }
  onScroll(e) {
    // this.isScrolledIntoView();
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
  convertPois(x) {
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
    }
    return poiElement;
  }

  goToDetail(id) {
    this.router.navigate(['/detail-poi'], { queryParams: { id: id, type: this.type } });
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
          return (el.classification == c);
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
            return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1 && el.classification == c);
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
      if (!this.fullCategories.includes(element.classification)) {
        this.fullCategories.push(element.classification);
      }
    });
    this.categories = this.fullCategories;
    if (this.categories.length > 0)
      this.actualVisualized = this.categories[0]
  }

  buildShowPois(filters?) {
    this.showPois = [];
    this.fullPois.forEach(p => {
      if (!this.showPois[p.classification]) {
        this.showPois[p.classification] = [];
      }
      if (filters ? filters.filter(item => {
        return item.isChecked && p.classification == item.value
      }).length > 0 : true) {
        this.showPois[p.classification].push(p);
      }
    });
  }
}
