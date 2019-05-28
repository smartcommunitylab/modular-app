import { NgModule, ModuleWithProviders, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, PLATFORM_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './lazy.routing';
import { appInitialize } from './app-initialize';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ConfigService } from './services/config.service';
import { DbService } from './services/db.service';
import { SQLite } from '@ionic-native/sqlite/ngx';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/module-trasporti/i18n/", ".json");
}
export function initializeDb(dbService: DbService) {
  return (): Promise<any> => {
    return dbService.Init();
  }
}
@NgModule({
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    HttpClientModule,
    routing,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },isolate: true
    }),
  ]
})
export class TrasportiModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: TrasportiModule,
        providers: [
          ConfigService,
          SQLite,
          {
            provide: APP_INITIALIZER,
            useFactory: appInitialize,
            multi: true
          }, 
          { provide: PLATFORM_INITIALIZER, useFactory: initializeDb, deps: [DbService], multi: true },

          
        ]
      };
    }
}
