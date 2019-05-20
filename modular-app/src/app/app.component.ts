import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ConfigService } from './services/config.service'
import { SettingService } from './services/setting.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private config: ConfigService,
    private setting: SettingService
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
  }
  sideMenu(): Promise<any> {
    return this.config.loadMenu();
  }
  getPageTitle(page) {
    return page.title[this.setting.getUserLanguage()];
  }
}
