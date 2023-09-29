import { APP_INITIALIZER, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appInitialize } from './app-initialize';
import { ConfigService } from '../services/config.service';
import { routing } from './lazy.routing';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/info/i18n/', '.json');
}
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    routing
  ],
  declarations: [

  ],
  exports: [

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InfoModule {
  static forRoot(): ModuleWithProviders<InfoModule> {
    return {
      ngModule: InfoModule,
      
      providers: [
        ConfigService,
        SocialSharing,
        {
          provide: APP_INITIALIZER,
          useFactory: appInitialize,
          multi: true
        }
      ]
    };
  }
}
