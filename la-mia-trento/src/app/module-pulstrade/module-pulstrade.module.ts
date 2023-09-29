import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePulstradeRoutingModule } from './module-pulstrade-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ConfigService } from '../services/config.service';
import { appInitialize } from './app-initialize';
import { MapService } from './services/map.service';
import { NotificationService } from './services/notification.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/strade/i18n/', '.json');
}
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulePulstradeRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  providers: [
    MapService,
    NotificationService,
    LocalNotifications
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModulePulstradeModule {
  static forRoot(): ModuleWithProviders<ModulePulstradeModule> {
    return {
      ngModule: ModulePulstradeModule,
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
