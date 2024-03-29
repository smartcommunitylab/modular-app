import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ConfigService } from './services/config.service'
import { SettingService } from './services/setting.service';
import { TranslateService } from '@ngx-translate/core';
// import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { register } from 'swiper/element/bundle';

register();


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  navigate: any;
  myLanguage: any;
  constructor(
    private iab: InAppBrowser,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private config: ConfigService,
    private setting: SettingService,
    private translate: TranslateService,
    // private firebase: FirebaseX
  ) {
    this.sideMenu().then(res => {
      this.navigate = res;
      this.initializeApp();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // if (this.firebase)
      // this.firebase.getToken().then(token => console.log(`The token is ${token}`))
      
      if (this.platform.is("android")){
      this.statusBar.overlaysWebView(false);
      this.statusBar.styleLightContent();
  } else {
    this.statusBar.styleBlackOpaque();
    this.statusBar.backgroundColorByHexString("#333");

  }
      // this.statusBar.overlaysWebView(false);            
      // this.statusBar.styleLightContent();
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
    console.log('Update:'); 
    // if (this.hotCodePush)
    // this.hotCodePush.fetchUpdate({}).then(data => { 
    //   console.log('Update available'); 
    // });
  }
  sideMenu(): Promise<any> {
    return this.config.loadMenu();
  }
  getPageTitle(page) {
    return page.title[window[this.config.getAppModuleName()]['language']];
  }
}
