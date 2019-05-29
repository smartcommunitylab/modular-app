import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../services/config.service';
@Component({
  selector: 'app-home-common',
  templateUrl: 'home-common.page.html',
  styleUrls: ['home-common.page.scss'],
})

export class HomeCommonPage implements OnInit {
  categories: any = [];
  elementsGallery: string[] = null;
  pois: any = [];
  language = 'it';
  elementsGalleryStr: string;
  constructor(public navCtrl: NavController,
    public translate: TranslateService,
    private config: ConfigService,
    private router: Router,
    public alertCtrl: AlertController) {
  }
  ngOnInit() {
    this.translate.get('title_page').subscribe(
      value => {
        console.log(value);
      }
    );
  }
  ionViewDidEnter() {
    this.elementsGallery = [];
    this.categories = this.config.getModuleEntries().map(x => this.convertCategories(x));
    console.log(this.categories);
    this.elementsGallery = this.config.getCarousel().map(x => this.convertGallery(x));
    window.addEventListener('categorySelected', category => {
      console.log(category);
    });
    window.addEventListener('elementSelected', item => {
      console.log(item);
      this.goToItem(item['detail']);
    });
  }


  convertGallery(x) {
    const galleryElement: any = {};

    if (x.name) {
      galleryElement.name = x.name[this.language];
    }
    if (x.image) {
      galleryElement.image = x.image[this.language];
    }
    return galleryElement;
  }

  convertCategories(x) {
    const categoryElement: any = {};
    if (x.id) {
      categoryElement.id = x.id;
    }
    if (x.name) {
      categoryElement.name = x.name[this.language];
    }
    if (x.icon) {
      categoryElement.icon = x.icon;
    }
    if (x.url) {
      categoryElement.url = x.url;
    }
    if (x.type) {
      categoryElement.type = x.type;
    }

    return categoryElement;
  }

  goToLink(category) {
    if (category.type && category.type.indexOf('EVENT') > -1) {
      category.query = {'selector': {'element-type': 'event-item'}};
      this.router.navigate(['/list-event'], { queryParams: { category: JSON.stringify(category) } });
    } else if (category.type && category.type.indexOf('PATH') > -1) {
      category.query = {'selector': {'element-type': 'itinerary-item'}, type: 'itineraries'};
      this.router.navigate(['/list-path'], { queryParams: { category: JSON.stringify(category) } });
    } else if (category.type && category.type.indexOf('R&H') > -1) {
      this.router.navigate(['/list-rh'], { queryParams: { category: JSON.stringify(category) } });
    } else {
    this.router.navigate([category.url], { queryParams: { category: JSON.stringify(category) } });
    }
  }
  goToCategory(category) {
    this.router.navigate(['/list-categories'], { queryParams: { category: JSON.stringify(category) } });
  }
  goToItem(item) {
    console.log(item);

  }
  openElement(element) {
    console.log(element);

  }
}
