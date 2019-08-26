import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ConfigService } from './services/config.service'
import { SettingService } from './services/setting.service';
import { TranslateService } from '@ngx-translate/core';
import { HotCodePush } from '@ionic-native/hot-code-push/ngx';

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
    private translate: TranslateService,
    private hotCodePush: HotCodePush
  ) {
    this.sideMenu().then(res => {
      this.navigate = res;
      this.initializeApp();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      this.statusBar.overlaysWebView(false);            
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      this.updateApp();
    });
    this.myLanguage = this.setting.getUserLanguage();
    if (this.myLanguage) {
      if (this.myLanguage.indexOf('it') > -1) {
        this.myLanguage = 'it';
      }
      if (this.myLanguage.indexOf('en') > -1) {
        this.myLanguage = 'en';
      }
      if (this.myLanguage.indexOf('de') > -1) {
        this.myLanguage = 'de';
      }
      window[this.config.getAppModuleName()]['language'] = this.myLanguage;
      this.translate.setDefaultLang(this.myLanguage);
    }
  }
  updateApp(): any {
    this.hotCodePush.fetchUpdate({}).then(data => { 
      console.log('Update available'); 
    });
  }
  sideMenu(): Promise<any> {
    return this.config.loadMenu();
  }
  getPageTitle(page) {
    return page.title[window[this.config.getAppModuleName()]['language']];
  }
}
