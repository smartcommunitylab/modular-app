import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { SettingService } from './setting.service';

@Injectable({
    providedIn: 'root'
  })
export class TranslationLoaderService {

  constructor(
    private translate: TranslateService,
    private settings: SettingService,
    private http: HttpClient
  ) {
      this.translate.addLangs(Object.keys(this.settings.languages));
  }

  public loadTranslations(prefix: string, suffix: string): void {
    const loader = new TranslateHttpLoader(this.http, prefix, suffix);
    this.translate.getLangs().forEach((lang) => {
        loader.getTranslation(lang).subscribe((data) => {
            this.translate.setTranslation(lang, data, true);
        });
    });
  }
}
