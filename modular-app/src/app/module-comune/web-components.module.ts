import { APP_INITIALIZER, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appInitialize } from './app-initialize';
import { PathComponent } from './wc-path/wc-path.component';
import { PoiComponent } from './wc-poi/wc-poi.component';
import { TabsComponent } from './wc-tabs/wc-tabs.component';
import { MapComponent } from './wc-map/wc-map.component';
import { ConfigService } from '../services/config.service';
import { routing } from './lazy.routing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/comune/', '.json');
}
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forChild({ loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    routing
  ],
  declarations: [
    PoiComponent, // private and public
    PathComponent,
    TabsComponent,
    MapComponent
  ],
  exports: [
    PoiComponent, // private and public
    PathComponent,
    TabsComponent,
    MapComponent
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComuneModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComuneModule,
      providers: [
        ConfigService,
        {
          provide: APP_INITIALIZER,
          useFactory: appInitialize,
          multi: true
        }
      ]
    };
  }
}
