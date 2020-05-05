import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComuneModule } from './module-comune/module-comune.module';
import { TrasportiModule } from './module-trasporti/module-trasporti.module';
import { SettingService } from './services/setting.service';
import { GeoService } from './services/geo.service';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ConfigService } from './services/config.service';
import { ModulePulstradeModule } from './module-pulstrade/module-pulstrade.module';
import { DragulaModule } from 'ng2-dragula';
import { InfoModule } from './module-info/module-info.module';
import { FuneraliModule } from './module-funerali/module-funerali.module';
// import { HotCodePush } from '@ionic-native/hot-code-push/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { LinkDirective } from './directives/link.directive';
import { TranslationLoaderService } from './services/translation-loader.service';
import { CodePush } from '@ionic-native/code-push/ngx';

export function initializeAppSetting(appInitService: SettingService) {
  return (): Promise<any> => {
    return appInitService.Init();
  };
}
export function initializeAppGeo(geoService: GeoService) {
  return (): Promise<any> => {
    return geoService.Init();
  };
}
export function initializeAppConfig(configService: ConfigService) {
  return (): Promise<any> => {
    return configService.Init();
  };
}
@NgModule({
  declarations: [AppComponent, LinkDirective],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    DragulaModule.forRoot(),
    TranslateModule.forRoot(),
    IonicModule.forRoot({
      backButtonText: ''
    }),
    ComuneModule.forRoot(),
    AppRoutingModule,
    ModulePulstradeModule.forRoot(),
    FuneraliModule.forRoot(),
    InfoModule.forRoot(),
    AppRoutingModule,
    TrasportiModule.forRoot(),
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    FirebaseX,
    CallNumber,
    InAppBrowser,
    // HotCodePush,
    SettingService,
    CodePush,
    { provide: APP_INITIALIZER, useFactory: initializeAppConfig, deps: [ConfigService], multi: true },
    { provide: APP_INITIALIZER, useFactory: initializeAppSetting, deps: [SettingService], multi: true },
    { provide: APP_INITIALIZER, useFactory: initializeAppGeo, deps: [GeoService], multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
  constructor(private translationLoader: TranslationLoaderService) {
    this.translationLoader.loadTranslations('./assets/common/i18n/', '.json');
  }
}
