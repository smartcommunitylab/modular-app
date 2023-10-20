import {
  APP_INITIALIZER,
  ModuleWithProviders,
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { appInitialize } from './app-initialize';
import { ConfigService } from '../services/config.service';
import { routing } from './lazy.routing';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/info/i18n/', '.json');
}
@NgModule({
  imports: [CommonModule, routing],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClaudioModule {
  static forRoot(): ModuleWithProviders<ClaudioModule> {
    return {
      ngModule: ClaudioModule,

      providers: [
        ConfigService,
        {
          provide: APP_INITIALIZER,
          useFactory: appInitialize,
          multi: true,
        },
      ],
    };
  }
}
