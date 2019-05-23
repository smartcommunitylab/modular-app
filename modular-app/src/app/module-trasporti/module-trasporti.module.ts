import { NgModule, ModuleWithProviders, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './lazy.routing';
import { appInitialize } from '@ionic/angular/dist/app-initialize';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/module-trasporti/i18n/", ".json");
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
        ngModule: TrasportiModule
      };
    }
}
