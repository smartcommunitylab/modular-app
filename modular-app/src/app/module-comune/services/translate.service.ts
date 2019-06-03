import { Injectable } from '@angular/core';
import { ComuneModule } from '../web-components.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: ComuneModule
})
export class TranslateService {
  private translations: any;
  private language: string;

  constructor(private http: HttpClient) {
    this.getEntries();
    this.getLanguage();
  }


  getLanguage() {
    this.language = 'it'; // TO IMPROVE
  }

  getEntries() {
    this.http.get('assets/configuration/translations.json').toPromise()
      .then(data => {
        this.translations = data;
        console.log(data);
      });
     // console.log(this.translations);
  }

  translate(value: string): string {
    return this.translations[value][this.language];
  }
}
