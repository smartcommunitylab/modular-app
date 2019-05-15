import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service'
import { TranslateService,  DefaultLangChangeEvent } from '@ngx-translate/core';

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
  title:string;
  constructor(private settingService: SettingService,private translate: TranslateService) {
    this.setLanguages();

  }

  ngOnInit() {
    this.translate.get('title_app').subscribe(
      value => {
        this.title= value;
      }
    )
    this.translate.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
      this.translate.get('title_app').subscribe(
        value => {
          this.title= value;
        }
      )

    });
  }

  ionViewDidLoad(){


  }
  setLanguages(): any {
    this.setting = this.settingService.getUserSetting();
    this.myLanguage = this.settingService.getUserLanguage();
    if (this.myLanguage) {
       this.selectedLanguage = this.myLanguage 
       this.translate.setDefaultLang(this.selectedLanguage);

      }
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
    this.translate.setDefaultLang(this.selectedLanguage);

  }
}
