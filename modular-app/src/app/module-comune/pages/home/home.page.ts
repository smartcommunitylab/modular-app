import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config.service';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from 'src/app/services/utils.service';
import { convertObject } from '../../comune.model';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  categories: any = [];
  elementsGallery: string[] = null;
  pois: any = [];
  elementsGalleryStr: string;
  constructor(
    public navCtrl: NavController,
    public translate: TranslateService,
    private config: ConfigService,
    private router: Router,
    public dbService: DbService,
    public alertCtrl: AlertController,
    public utils: UtilsService) {}

  ionViewDidEnter() {
    this.elementsGallery = [];
    this.config.init();
    this.dbService.getCategories().then((data) => {
      // set button categories
      this.categories = data.map(x => this.convertCategories(x));
    });
    this.dbService.getElementsGallery().then((data) => {
      // set gallery with preview
      this.elementsGallery = data.map(x => this.convertGallery(x));
      this.elementsGalleryStr = JSON.stringify(this.elementsGallery);
      // console.log(JSON.stringify(this.elementsGallery));
    });
    // const categoryButtonsElement = document.querySelector('category-buttons');
    window.addEventListener('categorySelected', category => {
      console.log(category);
      this.goToCategory(category);
    });
    window.addEventListener('elementSelected', item => {
      console.log(item);
      this.goToItem(item['detail']);
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
    if (x && x.key) {
      return convertObject(x.key, {}, this.translate, ['name', 'image'], ['objectIds']);
    }
    return {};
  }

  convertCategories(x) {
    if (x && x.key) {
      return convertObject(x.key, {}, this.translate, ['name'], ['id', 'image']);
    }
    return {};
  }

  goToCategory(category) {
    this.router.navigate(['/list-categories'], { queryParams: { category: JSON.stringify(category) } });

  }
  goToItem(item) {
    console.log(item);
    this.dbService.getObjectByDataId(item.objectIds[0]).then(res => {
      const found = res.docs.filter(obj =>  !!obj['elementType']);
      this.router.navigate(['/detail-comune'], { queryParams: { _id: found._id } });
    });
  }
}
