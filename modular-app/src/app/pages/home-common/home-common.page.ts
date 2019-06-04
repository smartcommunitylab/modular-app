import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../services/config.service';
import { elementAttribute } from '@angular/core/src/render3';
import { UtilsService } from '../../services/utils.service';
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
    private config: ConfigService,
    private router: Router,
    public alertCtrl: AlertController,
    public translate: TranslateService,
    private utils: UtilsService) {
      translate.use(this.language); // SET DEFAULT LANGUAGE
  }
  ngOnInit() {
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
    if (x.params) {
      categoryElement.params = x.params;
    }

    return categoryElement;
  }

  goToLink(category) {
    if (category.url) {
      if (category.params) {
        category.query = category.params;
      }
      this.router.navigate([category.url], { queryParams: { category: JSON.stringify(category) } });
    } else {
      this.translate.get('error_data').subscribe(
        value => {
          this.utils.showToast(value);
        }
      );
    }
  }
  goToCategory(category) {
    this.router.navigate(['/list-categories'], { queryParams: { category: JSON.stringify(category) } });
  }
  goToItem(item) {
    console.log(item);
  }
  openElement(element) {
    if (element.url && element.objectIds) {
      this.router.navigate([element.url], { queryParams: { objectIds: element.objectIds } });
    } else {
      this.translate.get('title_app').subscribe(
        value => {
          console.log(value);
          // this.title= value;
        }
      );
      this.translate.get('error_data').subscribe(
        value => {
          this.utils.showToast(value);
        }
      );
    }
  }
}
