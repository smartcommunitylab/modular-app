import { OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from '@ionic/angular';

const ROUTER_KEY = "router-key"


export class MainPage implements OnInit {

  constructor(
    public translate: TranslateService
  ) {
    this.initTranslate();
  }
  public language: string = 'it';

  ngOnInit() {
    this.language = this.translate.currentLang;
  }
  ionViewDidEnter() {
    this.language = this.translate.currentLang;
  }

  private initTranslate() {
    // Set the default language for translation strings, and the current language.
    if (window["app-module-language"])
      return this.translate.setDefaultLang(window["app-module-language"]);
    this.translate.setDefaultLang(this.language);

  }
}