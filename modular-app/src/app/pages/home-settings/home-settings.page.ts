import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { ConfigService } from 'src/app/services/config.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home-settings',
  templateUrl: './home-settings.page.html',
  styleUrls: ['./home-settings.page.scss'],
})
export class HomeSettingsPage implements OnInit {
  subs = new Subscription();
  categories: any = [];
  allCategories: any = [];
  language = 'it';

  constructor(
    private dragulaService: DragulaService,
    private location: Location,
    private config: ConfigService,
    public translate: TranslateService
  ) {
    this.language = window[this.config.getAppModuleName()]['language'];
    translate.use(this.language);
    this.subs.add(dragulaService.dropModel('entries')
      .subscribe(({ el, target, source, sourceModel, targetModel, item }) => {
        console.log('dropModel:');
        console.log(el);
        console.log(source);
        console.log(target);
        console.log(sourceModel);
        console.log(targetModel);
        console.log(item);
      })
    );
    this.subs.add(dragulaService.removeModel('entries')
      .subscribe(({ el, source, item, sourceModel }) => {
        console.log('removeModel:');
        console.log(el);
        console.log(source);
        console.log(sourceModel);
        console.log(item);
      })
    );
  }

  ngOnInit() {

  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  ionViewDidEnter() {
    this.categories = this.config.getModuleEntries().map(x => this.convertCategories(x));
    this.config.getAllModuleEntries().then(res => {
      this.allCategories = res.map(x => this.convertCategories(x));
      this.allCategories = this.allCategories.filter((el) => {
        //solo gli elementi non presenti nell'array categories.
        var present = this.categories.filter(element => {
          console.log(element.id);
          return element.id === el.id
        });
        if (present.length == 0)
          return true
        return false;
      })
    })
    console.log(this.categories);
  }
  saveHome() {
    this.config.storeModuleEntries(this.categories);
    this.close();
  }
  close() {
    this.location.back()
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
}
