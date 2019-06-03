import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ConfigService } from './services/config.service'
import { SettingService } from './services/setting.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  navigate: any;
  myLanguage: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private config: ConfigService,
    private setting: SettingService,
    private translate: TranslateService
  ) {
    this.sideMenu().then(res => {
      this.navigate = res;
      this.initializeApp();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.myLanguage = this.setting.getUserLanguage();
    if (this.myLanguage) {
      
       this.translate.setDefaultLang(this.myLanguage);

      }
  }
  sideMenu(): Promise<any> {
    return this.config.loadMenu();
  }
  getPageTitle(page) {
    return page.title[this.setting.getUserLanguage()];
  }
}
