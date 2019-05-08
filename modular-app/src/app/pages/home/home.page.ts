import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { DbService } from '../../module-comune/services/db.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  categories: any = [];
  elementsGallery: string[] = null;
  pois: any = [];
  language: string = "it";
  constructor(public navCtrl: NavController,private router: Router, public dbService: DbService, public alertCtrl: AlertController) {
  }
  ionViewDidEnter() {
    this.elementsGallery=[]
    this.dbService.getCategories().then((data) => {
      //set button categories
      this.categories = data.map(x => this.convertCategories(x));
    });
    this.dbService.getElementsGallery().then((data) => {
      //set gallery with preview
      this.elementsGallery = data.map(x => this.convertGallery(x));
      console.log(JSON.stringify(this.elementsGallery));
    });

  }
  ionViewDidLoad() {
    let categoryButtonsElement = document.querySelector('category-buttons');
    categoryButtonsElement.addEventListener('categorySelected', category => {
      console.log(category);
      this.goToCategory(category)
    })

  }
  convertGallery(x) {
    var galleryElement: any = {};
    if (x && x.key) {
      if (x.key.name)
        galleryElement.name = x.key.name[this.language];
      if (x.key.image)
        galleryElement.image = x.key.image[this.language];
    }
    return galleryElement
  }

  convertCategories(x) {
    var categoryElement: any = {};
    categoryElement.id=x.key.id;
    if (x && x.key) {
      if (x.key.name)
        categoryElement.name = x.key.name[this.language];
      if (x.key.image)
        categoryElement.image = x.key.image;
    }
    return categoryElement
  }

  goToCategory(category) {
    this.router.navigate(['/list-categories'],{ queryParams: { category: JSON.stringify(category) } });
    // this.navCtrl.navigateForward('/list-poi');

  }
}