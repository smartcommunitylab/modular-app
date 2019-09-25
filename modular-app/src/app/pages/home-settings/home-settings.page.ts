import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { ConfigService } from 'src/app/services/config.service';
import { TranslateService, DefaultLangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { SettingService } from 'src/app/services/setting.service';
import { NavController } from '@ionic/angular';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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
  selection = 'home';
  setting: any;
  languages: any;
  myLanguage: any;
  selectedLanguage: any;
  form: any;
  title: string;
  version:string;
  constructor(
    private dragulaService: DragulaService,
    private router: Router,
    private location: Location,
    private navCtrl: NavController,
    private config: ConfigService,
    public translate: TranslateService,
    private settings: SettingService
  ) {
    this.language = window[this.config.getAppModuleName()]['language'];
    this.setLanguages();
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
  mailto(email) {
    window.open(`mailto:${email}`, '_system');
 }
  openLink(link) {
    window.open(link, '_system', 'location=yes'); return false;
  }
  addElement(element) {
    this.categories.push(element);
    //add and remove from all
    this.allCategories = this.allCategories.filter(function( obj ) {
      return obj.id !== element.id;
    });
  }
  removeElement(element) {
    //remove from categories and add to all
    //add and remove from all
    this.categories = this.categories.filter(function( obj ) {
      return obj.id !== element.id;
    });
    this.allCategories.push(element);

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
    this.version = this.config.getNumberVersion();
    this.translate.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
      this.translate.get('title_app').subscribe(
        value => {
          this.title = value;
        }
      );

    });
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
    this.saveOtherSetting();
    // this.close();
  }
  close() {
    this.navCtrl.navigateRoot('/home-common');

    // this.location.back()
  }
  active(category) {
    var element = document.getElementById('id-' + category.name);
    console.log(element);
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
  select(sel) {
    // if (this.selection == sel)
    //   this.selection = null;
    // else 
    this.selection = sel;
  }

  isSelected(sel) {
    return sel == this.selection;
  }
  setLanguages(): any {
    this.setting = this.settings.getUserSetting();
    this.myLanguage = this.settings.getUserLanguage();
    if (this.myLanguage) {
      this.selectedLanguage = this.myLanguage;
      this.translate.setDefaultLang(this.selectedLanguage);

    }
    const languages = this.settings.getLanguages();
    if (languages) {
      const keys = Array.from(Object.keys(languages));

      this.languages = keys.map(element => {
        return {
          'key': element,
          'value': languages[element]
        };
      });
    }
  }
  saveOtherSetting() {
    this.settings.setUserLanguage(this.selectedLanguage);
    this.translate.setDefaultLang(this.selectedLanguage);
    this.location.back()

  }
  onLanguageChanged(data) {
    console.log('Lingua = ', this.selectedLanguage);
  }
}
