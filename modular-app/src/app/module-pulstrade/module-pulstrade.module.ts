import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulePulstradeRoutingModule } from './module-pulstrade-routing.module';
import { ConfigService } from '../services/config.service';
import { appInitialize } from './app-initialize';
import { MapService } from './services/map.service';
import { NotificationService } from './services/notification.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { SharedModule } from '../shared/shared.module';
import { TranslationLoaderService } from '../services/translation-loader.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ModulePulstradeRoutingModule
  ],
  providers: [
    MapService,
    NotificationService,
    LocalNotifications
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModulePulstradeModule {
  static forRoot(): ModuleWithProviders {
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
  constructor(private translationLoader: TranslationLoaderService) {
    this.translationLoader.loadTranslations('./assets/strade/i18n/', '.json');
  }
 }
