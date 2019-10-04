import { APP_INITIALIZER, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appInitialize } from './app-initialize';
import { ConfigService } from '../services/config.service';
import { routing } from './lazy.routing';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TranslationLoaderService } from '../services/translation-loader.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule,
    routing
  ],
  declarations: [

  ],
  exports: [

  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FuneraliModule {
  static forRoot(): ModuleWithProviders {
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
  constructor(private translationLoader: TranslationLoaderService) {
    this.translationLoader.loadTranslations('./assets/funerali/i18n/', '.json');
  }

}
