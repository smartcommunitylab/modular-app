import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { ConfigService } from 'src/app/services/config.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { SettingService } from 'src/app/services/setting.service';
import { NavController } from '@ionic/angular';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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
    private router: Router,
    private location: Location,
    private navCtrl: NavController,
    private config: ConfigService,
    public translate: TranslateService,
    private settings:SettingService
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
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  ngOnInit() {

  }
  doSomething() {
    console.log('longpress')
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  ionViewDidEnter() {
    this.language = this.settings.getUserLanguage();
    this.translate.use(this.language);
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
    this.navCtrl.navigateRoot('/home-common');

    // this.location.back()
  }
  active(category) {
    var element = document.getElementById('id-'+category.name);
    console.log(element);
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
  goToSettings() {
    this.router.navigate(['/setting']);
  }
}
