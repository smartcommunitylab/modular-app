import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ConfigService } from '../../services/config.service';
import { UtilsService } from '../../services/utils.service';
// import { DragulaService } from 'ng2-dragula';
// import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home-common',
  templateUrl: 'home-common.page.html',
  styleUrls: ['home-common.page.scss'],
})

export class HomeCommonPage implements OnInit {
  // editMode = false;
  categories: any = [];
  // allCategories: any = [];
  elementsGallery: string[] = null;
  pois: any = [];
  language = 'it';
  elementsGalleryStr: string;
  // subs = new Subscription();

  constructor(public navCtrl: NavController,
    private config: ConfigService,
    private router: Router,
    public alertCtrl: AlertController,
    public translate: TranslateService,
    // private dragulaService:DragulaService,

    private utils: UtilsService) {
    this.language = window[this.config.getAppModuleName()]['language'];
    translate.use(this.language); 
  }
  ngOnInit() {
  }
  ionViewDidLoad(){

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {


      this.init()


    });
  }
  ionViewDidEnter() {
    this.init()

  }
init() {
  this.language = window[this.config.getAppModuleName()]['language'];
  this.translate.use(this.language); 
  this.elementsGallery = [];
  var moduleEntries=this.config.getModuleEntries();
  if (moduleEntries)
{  this.categories = this.config.getModuleEntries().map(x => this.convertCategories(x));
  console.log(this.categories);

}   else {
  console.log("empty categories");

}
var carousel=this.config.getCarousel();
  if (carousel)
{ 
  this.elementsGallery = this.config.getCarousel().map(x => this.convertGallery(x));
} 
else {
  console.log("carosello vuoto");
}
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
     if (x.uri) {
      galleryElement.url = x.uri;;
     }
     else {
      galleryElement.url = '/detail-poi';
     }
    if (x.params) {
      galleryElement.params = x.params;
    }
    if (x.objectIds) {
      galleryElement.objectIds = x.objectIds;
    }
    return galleryElement;
  }

  convertCategories(x) {
    const categoryElement: any = {};
    if (x.id) {
      categoryElement.id = x.id;
    }
    if (x.name) {
      categoryElement.name = x.name;
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
  // saveHome() {
  //   this.editMode = false;
  //   this.config.storeModuleEntries(this.categories);
  // }
  editHome() {
    this.router.navigate(['/home-settings']);

    // this.editMode = true;
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
          console.log("element.url"+element.url+"element.objectIds"+element.objectIds)
          this.utils.showToast(value);
        }
      );
    }
  }
}