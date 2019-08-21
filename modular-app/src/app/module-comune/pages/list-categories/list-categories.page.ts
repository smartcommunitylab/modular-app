import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DbService } from '../../services/db.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.page.html',
  styleUrls: ['./list-categories.page.scss'],
})
export class ListCategoriesPage implements OnInit {
  showPois: any = [];
  categories: any;
  language = 'it';
  fullCategories: any = [];
  fullPois: any = [];
  isLoading = true;
  private type: string;

  constructor(private router: Router, private translate: TranslateService, private route: ActivatedRoute, public dbService: DbService
  ) { }


  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}
        if (params) {
          const cat = JSON.parse(params.category);
          if (cat.type !== 'PATH') {
            this.dbService.getMenuById(cat.id).then(results => {
              console.log(results);
              if (results.docs) {
                // take the first with items
                for (let i = 0; i < results.docs.length; i++) {
                  if (results.docs[i].items) {
                    this.categories = results.docs[i].items;
                    break;
                  }
                }
                this.categories = this.categories.map(x => this.convertCategories(x));
                this.categories.forEach(element => {
                  if (element && element.query) {
                    this.translate.get('init_db').subscribe(value => {
                      this.dbService.synch(value).then(() => {
                        this.dbService.getObjectByQuery(element.query).then((data) => {
                          this.fullPois = data.docs.map(x => this.convertPois(x));
                          this.subCategories(this.fullPois);
                          this.buildShowPois();
                          this.isLoading = false;
                          console.log(this.showPois);
                        });
                      });
                    })
                  }
                  const el = document.getElementById('poi-list');
                  el.addEventListener('pathSelected', path => {
                    this.type = (<any>path).detail.split(';')[1];
                    const id = (<any>path).detail.split(';')[0];
                    this.goToDetail(id);
                  });
                });

              }
            });
          } else {
            const tmp = { query: { 'selector': { 'element-type': 'itinerary-item' }, type: 'itineraries' } };
            this.goToCategory(tmp);
          }
        }
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
  subCategories(array: Array<any>) {
    array.forEach(element => {
      if (!this.fullCategories.includes(element.category)) {
        this.fullCategories.push(element.category);
      }
      this.categories = this.fullCategories;
    });
  }

  ionViewDidLoad() {
    const categoryButtonsElement = document.querySelector('category-buttons');
    categoryButtonsElement.addEventListener('categorySelected', category => { console.log('ciao'); });

  }
  goToListPoi(category) {
    this.router.navigate(['/list-categories'], { queryParams: { category: JSON.stringify(category) } });

  }
  convertCategories(x) {
    const categoryElement: any = {};
    categoryElement.id = x.id;
    if (x) {
      if (x.name) {
        categoryElement.name = x.name[this.language];
      }
      if (x.query) {
        categoryElement.query = x.query;
      }
      if (x.objectIds) {
        categoryElement.objectIds = x.objectIds;
      }
    }
    return categoryElement;
  }

  goToDetail(id) {
    this.router.navigate(['/detail-poi'], { queryParams: { id: id, type: this.type } });
  }
  goToCategory(category) {
    if (category.query) {
      if (category.query.type.indexOf('itineraries') > -1) {
        this.router.navigate(['/list-path'], { queryParams: { category: JSON.stringify(category) } });
      } else if (category.query.type.indexOf('event') > -1) {
        this.router.navigate(['/list-event'], { queryParams: { category: JSON.stringify(category) } });
      }
    } else {
      this.router.navigate(['/list-poi'], { queryParams: { category: JSON.stringify(category) } });
    }
  }
}
