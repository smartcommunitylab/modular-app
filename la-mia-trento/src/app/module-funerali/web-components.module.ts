import { APP_INITIALIZER, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { appInitialize } from './app-initialize';
import { ConfigService } from '../services/config.service';
import { routing } from './lazy.routing';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forChild({
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
export class FuneraliModule {
  static forRoot(): ModuleWithProviders<FuneraliModule> {
    return {
      ngModule: FuneraliModule,
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
