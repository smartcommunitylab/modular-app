import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { TranslateService,  DefaultLangChangeEvent } from '@ngx-translate/core';
import { ConfigService } from 'src/app/services/config.service';
import { Location } from '@angular/common';

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
  title: string;
  constructor(private settingService: SettingService,
    private location:Location,
     private translate: TranslateService, 
     private config: ConfigService) {
    this.translate.use(window[this.config.getAppModuleName()]['language']);
    this.setLanguages();

  }

  ngOnInit() {
    this.translate.get('title_app').subscribe(
      value => {
        this.title = value;
      }
    );
    this.translate.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
      this.translate.get('title_app').subscribe(
        value => {
          this.title = value;
        }
      );

    });
  }

  ionViewDidLoad() {


  }
  setLanguages(): any {
    this.setting = this.settingService.getUserSetting();
    this.myLanguage = this.settingService.getUserLanguage();
    if (this.myLanguage) {
       this.selectedLanguage = this.myLanguage;
       this.translate.setDefaultLang(this.selectedLanguage);

      }
    const languages = this.settingService.getLanguages();
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
    this.settingService.setUserLanguage(this.selectedLanguage);
    this.translate.setDefaultLang(this.selectedLanguage);
    this.location.back()

  }
  onLanguageChanged(data) {
    console.log('Lingua = ', this.selectedLanguage);

  }
}
