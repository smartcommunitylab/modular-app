import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.page.html',
  styleUrls: ['./list-categories.page.scss'],
})
export class ListCategoriesPage implements OnInit {
  categories: any;
  language = "it";
  constructor(private router: Router, private route: ActivatedRoute, public dbService: DbService
  ) { }


  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}
        if (params) {
          var cat = JSON.parse(params.category);
          this.dbService.getMenuById(cat.id).then(results => {
            console.log(results);
            if (results.docs) {
              //take the first with items
              for (var i = 0; i < results.docs.length; i++) {
                if (results.docs[i].items) {
                  this.categories = results.docs[i].items
                  break;
                }
              }
              this.categories = this.categories.map(x => this.convertCategories(x));

            }
          })

        }
      });

  }
  ionViewDidLoad() {
    let categoryButtonsElement = document.querySelector('category-buttons');
    categoryButtonsElement.addEventListener('categorySelected', category => { console.log("ciao") })

  }
  goToListPoi(category) {
    // this.navCtrl.navigateForward('/list-categories');
    this.router.navigate(['/list-categories'], { queryParams: { category: JSON.stringify(category) } });

  }
  convertCategories(x) {
    var categoryElement: any = {};
    categoryElement.id = x.id;
    if (x) {
      if (x.name)
        categoryElement.name = x.name[this.language];
      if (x.query)
        categoryElement.query = x.query;
      if (x.objectIds)
        categoryElement.objectIds = x.objectIds

    }
    return categoryElement
  }

  goToCategory(category) {
    //depending on category go to the list or to the detail
    if (category.query)
      this.router.navigate(['/list-poi'], { queryParams: { category: JSON.stringify(category) } });
    else if (category.objectIds)
      this.router.navigate(['/detail-info'], { queryParams: { info: JSON.stringify(category) } });
    // this.navCtrl.navigateForward('/list-poi');

  }
}
