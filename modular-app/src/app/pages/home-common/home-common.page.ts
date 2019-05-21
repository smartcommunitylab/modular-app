import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../services/config.service'
import { elementAttribute } from '@angular/core/src/render3';
@Component({
  selector: 'app-home-common',
  templateUrl: 'home-common.page.html',
  styleUrls: ['home-common.page.scss'],
})

export class HomeCommonPage implements OnInit {
  categories: any = [];
  elementsGallery: string[] = null;
  pois: any = [];
  language: string = "it";
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
        console.log(value)
      }
    )
  }
  ionViewDidEnter() {
    this.elementsGallery = [];
    this.categories = this.config.getModuleEntries().map(x => this.convert(x));;
    this.elementsGallery = this.config.getCarousel().map(x => this.convert(x));;
    window.addEventListener('categorySelected', category => {
      console.log(category);
      this.goToCategory(category);
    });
    window.addEventListener('elementSelected', item => {
      console.log(item);
      this.goToItem(item["detail"]);
    });
  }


  // convertGallery(x) {
  //   const galleryElement: any = {};
  //   if (x.id) {
  //     galleryElement.id = x.id;
  //   }    if (x.name) {
  //     galleryElement.name = x.name[this.language];
  //   }
  //   if (x.image) {
  //     galleryElement.image = x.image[this.language];
  //   }
  //   // if (x.key.objectIds) {
  //   //   galleryElement.objectIds = x.key.objectIds;
  //   // }
  //   // }
  //   return galleryElement;
  // }

  convert(x) {
    const element: any = {};
    if (x.id) {
      element.id = x.id;
    }
    if (x.name) {
      element.name = x.name[this.language];
    }
    if (x.image) {
      element.image = x.image[this.language];
    }
    if (x.icon) {
      element.icon = x.icon;
    }
    if (x.url) {
      element.url = x.url;
    }
    if (x.objectIds) {
      element.objectIds = x.objectIds
    }

    return element;
  }

  goToLink(category) {
    if (category.url)
      this.router.navigate([category.url], { queryParams: { category: JSON.stringify(category) } });
    else {
      //TODO error
    }
  }
  goToCategory(category) {
    this.router.navigate(['/list-categories'], { queryParams: { category: JSON.stringify(category) } });
  }
  goToItem(item) {
    console.log(item);
  }
  openElement(element) {
    if (element.url)
      this.router.navigate([element.url], { queryParams: { objectIds: element.objectIds } });
    else {
      //TODO error
    }
  }
}
