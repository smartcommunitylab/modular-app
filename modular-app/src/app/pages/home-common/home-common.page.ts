import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../services/config.service';
import { elementAttribute } from '@angular/core/src/render3';
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
    translate.use(this.language); // SET DEFAULT LANGUAGE
    // this.subs.add(dragulaService.dropModel('entries')
    //   .subscribe(({ el, target, source, sourceModel, targetModel, item }) => {
    //     console.log('dropModel:');
    //     console.log(el);
    //     console.log(source);
    //     console.log(target);
    //     console.log(sourceModel);
    //     console.log(targetModel);
    //     console.log(item);
    //   })
    // );
    // this.subs.add(dragulaService.removeModel('entries')
    //   .subscribe(({ el, source, item, sourceModel }) => {
    //     console.log('removeModel:');
    //     console.log(el);
    //     console.log(source);
    //     console.log(sourceModel);
    //     console.log(item);
    //   })
    // );
  }
  ngOnInit() {
  }

  ionViewDidEnter() {
    this.elementsGallery = [];
    this.categories = this.config.getModuleEntries().map(x => this.convertCategories(x));
    // this.config.getAllModuleEntries().then(res => {
    //   this.allCategories = res.map(x => this.convertCategories(x));
    //   this.allCategories = this.allCategories.filter(( el ) =>{
    //     //solo gli elementi non presenti nell'array categories.
    //     var present = this.categories.filter(element => {
    //       console.log(element.id );
    //       return element.id === el.id});
    //     if (present.length==0)
    //       return true
    //       return false;
    //   }) 
    // })
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
  // ngOnDestroy() {
  //   this.subs.unsubscribe();
  // }
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
    if (x.name ) {
      categoryElement.name = x.name ;
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
          this.utils.showToast(value);
        }
      );
    }
  }
}
