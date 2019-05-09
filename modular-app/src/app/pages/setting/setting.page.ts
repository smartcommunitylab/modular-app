import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  setting: any;
  languages: any;
  myLanguage: any;
  selectedLanguage: any;
  form: any;
  constructor(private settingService: SettingService) {
    this.setLanguages();

  }

  ngOnInit() {
  }

  setLanguages(): any {
    this.setting = this.settingService.getUserSetting();
    this.myLanguage = this.settingService.getUserLanguage();
    if (this.myLanguage) { this.selectedLanguage = this.myLanguage }
    var languages = this.settingService.getLanguages();
    if (languages) {
      let keys = Array.from(Object.keys(languages));

      this.languages = keys.map(element => {
        return {
          "key": element,
          "value": languages[element]
        }
      })
    }
  }
  onLanguageChanged(data) {
    console.log('Lingua = ', this.selectedLanguage);
    this.settingService.setUserLanguage(this.selectedLanguage);
  }
}
