import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, PopoverController, Events } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverComponent } from 'src/app/shared/popover/popover.component';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.page.html',
  styleUrls: ['./list-event.page.scss'],
})
export class ListEventPage implements OnInit {
  showPois: any = [];
  fullPois: any = [];
  language = 'it';
  category: any;
  private type: string;
  search = false;
  isLoading = true;
  fullCategories: any = [];
  categories: any = [];

  constructor(
    public navCtrl: NavController,
    public dbService: DbService,
    public alertCtrl: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertController,
    private popoverController: PopoverController,
    public events: Events
    ) {
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
      //  this.showPois = this.fullPois;
        this.subCategories(this.fullPois);
        this.buildShowPois();
      //  console.log(this.fullCategories)
        this.isLoading = false;
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
      poiElement.infos = JSON.stringify(poiElement);
    }
    return poiElement;
  }

  goToDetail(id) {
    this.router.navigate(['/detail-poi'], { queryParams: { id: id, type: this.type } });
  }

  toggleSearch() {
    this.search = !this.search;
  }

  searchChanged(input: any) {
    const value = input.detail.target.value;
    const _this = this;
    this.showPois = this.fullPois.filter(function(el) {
      return (el.title[_this.language].toLowerCase().indexOf(value.toLowerCase()) > -1);
    });
  }

  filterClicked() {
    this.buildAlert();
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

  orderArray(condition: string, _this: any) {
    if (condition.indexOf('asc') > -1) {
      _this.showPois = this.fullPois.sort(function(a, b) { return a.title[_this.language].localeCompare(b.title[_this.language]); });
    } else {
      _this.showPois = this.fullPois.sort(function(a, b) { return b.title[_this.language].localeCompare(a.title[_this.language]); });
    }
     console.log(_this.showPois);
  }

  async showPopover() {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {elements: this.fullCategories, controller: this.popoverController},
      translucent: true
    });
    return await popover.present();
  }

  changeCategory(cat: any) {
    this.categories = [];
    if (cat && cat.indexOf('Tutto') > -1) {
      this.categories = this.fullCategories;
    } else {
      this.categories.push(cat);
    }
  }
}
