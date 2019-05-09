import { APP_INITIALIZER, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appInitialize } from './app-initialize';
import { PathComponent } from './wc-path/ws-path.component';
import { PoiComponent } from './wc-poi/wc-poi.component';
import { ConfigService } from '../services/config.service';
import { routing } from './lazy.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    PoiComponent, //private and public
    PathComponent
  ],
  exports: [
    PoiComponent, //private and public
    PathComponent
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
