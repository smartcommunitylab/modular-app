import { NgModule, ModuleWithProviders, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, PLATFORM_INITIALIZER } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { routing } from './lazy.routing';
import { appInitialize } from './app-initialize';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { DbService } from './services/db.service';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { TranslationLoaderService } from '../services/translation-loader.service';
import { SharedModule } from '../shared/shared.module';

export function initializeDb(dbService: DbService) {
  return (): Promise<any> => {
    return dbService.Init();
  };
}
@NgModule({
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    HttpClientModule,
    routing,
    SharedModule
  ]
})
export class TrasportiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TrasportiModule,
      providers: [
        ConfigService,
        SQLite,
        DatePipe,
        {
          provide: APP_INITIALIZER,
          useFactory: appInitialize,
          multi: true
        }
      ]
    };
  }
  constructor(private translationLoader: TranslationLoaderService) {
    this.translationLoader.loadTranslations('./assets/trasporti/i18n/', '.json');
  }
}
