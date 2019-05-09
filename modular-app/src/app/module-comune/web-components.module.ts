import { APP_INITIALIZER, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appInitialize } from './app-initialize';
import { PathComponent } from './wc-path/ws-path.component';
import { PoiComponent } from './wc-poi/wc-poi.component';
import { TabsComponent } from './wc-tabs/wc-tabs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PoiComponent, //private and public
    PathComponent,
    TabsComponent
  ],
  exports: [
    PoiComponent, //private and public
    PathComponent,
    TabsComponent
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComuneModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComuneModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: appInitialize,
          multi: true
        }
      ]
    };
  }
}
