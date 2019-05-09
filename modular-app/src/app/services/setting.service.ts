import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  setUserLanguage(selectedLanguage: any): any {
    this.setting["language"] = selectedLanguage;
    this.setUserSetting(this.setting);
  }
  setting: any;
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
        language = baseSetting["language"];
      }
      window["app-module-language"] = language;
      resolve();
    })
  }
  constructor() {

  }


}
