import { APP_INITIALIZER, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appInitialize } from './app-initialize';
import { PathComponent } from './wc-path/wc-path.component';
import { PoiComponent } from './wc-poi/wc-poi.component';
import { TabsComponent } from './wc-tabs/wc-tabs.component';
import { MapComponent } from './wc-map/wc-map.component';
import { ConfigService } from '../services/config.service';
import { routing } from './lazy.routing';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { TranslationLoaderService } from '../services/translation-loader.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
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
  constructor(private translationLoader: TranslationLoaderService) {
    this.translationLoader.loadTranslations('./assets/comune/i18n/', '.json');
  }
}
