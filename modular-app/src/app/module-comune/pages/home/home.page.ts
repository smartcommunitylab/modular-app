import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { DbService } from '../../services/db.service'
import { Router } from '@angular/router';
import {ConfigService} from '../../services/config.service'
import { TranslateService } from '@ngx-translate/core';
import {MainPage} from '../../class/MainPage'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends MainPage{
  categories: any = [];
  elementsGallery: string[] = null;
  pois: any = [];
  language: string = "it";
  constructor(public navCtrl: NavController,public translate: TranslateService, private config: ConfigService,private router: Router, public dbService: DbService, public alertCtrl: AlertController) {
    super(translate,navCtrl);
  }
  ngOnInit() {
    this.translate.get('title_page').subscribe(
      value => {
        console.log(value)
      }
    )
  }
  ionViewDidEnter() {
    this.elementsGallery=[]
    this.config.init();
    this.dbService.getCategories().then((data) => {
      // set button categories
      this.categories = data.map(x => this.convertCategories(x));
    });
    this.dbService.getElementsGallery().then((data) => {
      // set gallery with preview
      this.elementsGallery = data.map(x => this.convertGallery(x));
      console.log(JSON.stringify(this.elementsGallery));
    });

  }
  ionViewDidLoad() {
    const categoryButtonsElement = document.querySelector('category-buttons');
    categoryButtonsElement.addEventListener('categorySelected', category => {
      console.log(category);
      this.goToCategory(category);
    });

  }
  convertGallery(x) {
    const galleryElement: any = {};
    if (x && x.key) {
      if (x.key.name) {
        galleryElement.name = x.key.name[this.language];
      }
      if (x.key.image) {
        galleryElement.image = x.key.image[this.language];
      }
    }
    return galleryElement;
  }

  convertCategories(x) {
    const categoryElement: any = {};
    categoryElement.id = x.key.id;
    if (x && x.key) {
      if (x.key.name) {
        categoryElement.name = x.key.name[this.language];
      }
      if (x.key.image) {
        categoryElement.image = x.key.image;
      }
    }
    return categoryElement;
  }

  goToCategory(category) {
    this.router.navigate(['/list-categories'], { queryParams: { category: JSON.stringify(category) } });
    // this.navCtrl.navigateForward('/list-poi');

  }
}
