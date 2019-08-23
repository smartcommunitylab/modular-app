import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private config: ConfigService) {
    // if (localStorage.getItem("comune-setting"))
    //   this.getUserSetting()
  }
  setting: any = [];
  languages: any = {
    'it': 'Italiano',
    'en': 'English',
    'de': 'Deutch'
  };
  setUserLanguage(selectedLanguage: any): any {
    this.setting['language'] = selectedLanguage;
    this.setUserSetting(this.setting);
  }

  getUserSetting(): any {
    if (this.setting) {
      return this.setting;
    }
    this.setting = JSON.parse(localStorage.getItem('app-module'));
  }
  setUserSetting(setting) {
    localStorage.setItem('app-module', JSON.stringify(setting));
    this.setting = JSON.parse(localStorage.getItem('app-module'));
    var  language = setting['language'];
    window[this.config.getAppModuleName()]['language'] = language;

  }
  getUserLanguage() {
    return this.setting['language'];
  }
  getLanguages() {
    return this.languages;
  }

  Init(): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      let language;
      let baseSetting;
      if (!window[this.config.getAppModuleName()]) {
        window[this.config.getAppModuleName()] = {};
      }
      if (!localStorage.getItem('app-module')) {

        baseSetting = {};
        console.log(navigator);
        language = navigator.language;
        if (language.indexOf('it') > -1) {
          language = 'it';
        }
        if (language.indexOf('en') > -1) {
          language = 'en';
        }
        if (language.indexOf('de') > -1) {
          language = 'de';
        }

        baseSetting['language'] = language;
        this.setting = baseSetting;
        this.setUserSetting(this.setting);
      } else {
        baseSetting = JSON.parse(localStorage.getItem('app-module'));
        this.setting = baseSetting;
        language = baseSetting['language'];
      }

      window[this.config.getAppModuleName()]['language'] = language;
      resolve();
    });
  }



}
