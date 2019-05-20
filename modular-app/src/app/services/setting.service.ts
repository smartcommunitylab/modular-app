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
  setUserLanguage(selectedLanguage: any): any {
    this.setting["language"] = selectedLanguage;
    this.setUserSetting(this.setting);
  }
  setting: any =[];
  languages: any = {
    "it": "Italiano",
    "en": "English",
    "de": "Deutch"
  }

  getUserSetting(): any {
    if (this.setting)
      return this.setting;
    this.setting = JSON.parse(localStorage.getItem("comune-setting"));
  }
  setUserSetting(setting) {
    localStorage.setItem("comune-setting", JSON.stringify(setting));
    this.setting = JSON.parse(localStorage.getItem("comune-setting"));
  }
  getUserLanguage() {
    return this.setting["language"];
  }
  getLanguages() {
    return this.languages;
  }

  Init(): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      var language;
      var baseSetting;
      if (!localStorage.getItem('comune-setting')) {

        baseSetting = {};
        language = navigator.language;
        baseSetting["language"] = language;
        this.setting = baseSetting;
        this.setUserSetting(this.setting);
      }
      else {
        baseSetting = JSON.parse(localStorage.getItem('comune-setting'));
        this.setting = baseSetting;
        language = baseSetting["language"];
      }
      if (!window[this.config.getAppModuleName()]) {
        window[this.config.getAppModuleName()] = {}
      }
      window[this.config.getAppModuleName()]["language"] = language;
      resolve();
    })
  }



}
