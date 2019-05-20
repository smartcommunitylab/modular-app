import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../services/config.service'
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
    this.categories = this.config.getModuleEntries().map(x => this.convertCategories(x));;
    this.elementsGallery = this.config.getCarousel().map(x => this.convertGallery(x));;
    // this.config.init();
    // this.dbService.getCategories().then((data) => {
    //   // set button categories
    //   this.categories = data.map(x => this.convertCategories(x));
    // });
    // this.dbService.getElementsGallery().then((data) => {
    //   // set gallery with preview
    //   this.elementsGallery = data.map(x => this.convertGallery(x));
    //   this.elementsGalleryStr = JSON.stringify(this.elementsGallery);
    //   // console.log(JSON.stringify(this.elementsGallery));
    // });
    // const categoryButtonsElement = document.querySelector('category-buttons');
    window.addEventListener('categorySelected', category => {
      console.log(category);
      this.goToCategory(category);
    });
    window.addEventListener('elementSelected', item => {
      console.log(item);
      this.goToItem(item["detail"]);
    });
  }


  convertGallery(x) {
    const galleryElement: any = {};
    // if (x) {
      if (x.name) {
        galleryElement.name = x.name[this.language];
      }
      if (x.image) {
        galleryElement.image = x.image[this.language];
      }
      // if (x.key.objectIds) {
      //   galleryElement.objectIds = x.key.objectIds;
      // }
    // }
    return galleryElement;
  }

  convertCategories(x) {
    const categoryElement: any = {};
    // categoryElement.id = x.key.id;
    // if (x ) {
      if (x.name) {
        categoryElement.name = x.name[this.language];
      }
      if (x.icon) {
        categoryElement.icon = x.icon;
      }

    // }
    return categoryElement;
  }

  goToCategory(category) {
    this.router.navigate(['/list-categories'], { queryParams: { category: JSON.stringify(category) } });

  }
  goToItem(item) {
    console.log(item);
    // this.dbService.getObjectByDataId(item.objectIds[0]).then(res => {
    //   var found = res.docs.filter(obj => {
    //     return obj["element-type"] != undefined
    //   })
    //   this.router.navigate(['/detail-poi'], { queryParams: { id: found._id } });
    // })
  }
}
