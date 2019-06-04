import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, PopoverController, Events } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { PopoverComponent } from 'src/app/shared/popover/popover.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list-rh',
  templateUrl: './list-rh.page.html',
  styleUrls: ['./list-rh.page.scss'],
})
export class ListRHPage implements OnInit {
  showPois: any = [];
  fullPois: any = [];
  language = 'it';
  category: any;
  private type: string;
  search = false;
  isLoading = true;
  fullCategories: any = [];
  categories: any = [];
  pageTitle: string;

  constructor(
    public navCtrl: NavController,
    public dbService: DbService,
    public alertCtrl: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertController,
    private popoverController: PopoverController,
    public events: Events,
    private translate: TranslateService
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

    if (this.category) {
      let query = {'selector': {'element-type': 'hotel-item'}};
      this.dbService.getObjectByQuery(query).then((data) => {
        this.fullPois = data.docs.map(x => this.convertPois(x));
      }).then(x => {
        query = {'selector': {'element-type': 'restaurant-item'}};
        this.dbService.getObjectByQuery(query).then((data) => {
          this.fullPois = this.fullPois.concat(data.docs.map(x => this.convertPois(x)));
          this.subCategories(this.fullPois);
          this.buildShowPois();
          this.isLoading = false;
        });
      });
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
      if (x.closing)  {
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

  toggleSearch() {
    this.search = !this.search;
  }

  searchChanged(input: any) {
    const value = input.detail.target.value;
    const _this = this;
      _this.categories.forEach(c => {
      this.showPois[c] = this.fullPois.filter(function(el) {
        return (el.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
      });
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

    /* TODO: Tempo - Distanza */

    /*_this.categories.forEach(c => {
      if (condition.indexOf('asc') > -1) {
        _this.showPois[c] = this.fullPois.sort(function(a, b) { return a.title.localeCompare(b.title); });
      } else {
        _this.showPois[c] = this.fullPois.sort(function(a, b) { return b.title.localeCompare(a.title); });
      }
    });*/
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

  buildMapPoints() {
    const tmp: any = [];
    const keys = Object.keys(this.showPois);
    keys.forEach(c => {
      this.showPois[c].forEach(p => {
        console.log(p)
        if (p.location) {
          tmp.push({name: p.title, lat: p.location[0], lon: p.location[1], address: p.address, distance: 0});
        }
      });
    });
    // console.log(tmp)
    return tmp;
  }

  goToMap() {
    this.router.navigate(['/map'], { queryParams: { data: JSON.stringify(this.buildMapPoints()) } } );
    console.log('CLICKED MAP');
  }
}
