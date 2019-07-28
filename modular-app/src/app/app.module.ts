import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComuneModule } from './module-comune/web-components.module';
import { TrasportiModule } from './module-trasporti/module-trasporti.module';
import { SettingService } from './services/setting.service'
import { GeoService } from './services/geo.service'
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ConfigService } from './services/config.service';
import { PopoverComponent } from './shared/popover/popover.component';
import { ModulePulstradeModule } from './module-pulstrade/module-pulstrade.module';
import { DragulaModule } from 'ng2-dragula';
import { DelayDragDirective } from './directives/delay-drag.directive';
import { InfoModule } from './module-info/web-components.module';
import { FuneraliModule } from './module-funerali/web-components.module';
import { HotCodePush } from '@ionic-native/hot-code-push/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
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
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/common/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent, PopoverComponent],
  entryComponents: [PopoverComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    DragulaModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    IonicModule.forRoot(),
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
    CallNumber,
    HotCodePush,
    SettingService,
    { provide: APP_INITIALIZER, useFactory: initializeAppConfig, deps: [ConfigService], multi: true },
    { provide: APP_INITIALIZER, useFactory: initializeAppSetting, deps: [SettingService], multi: true },
    { provide: APP_INITIALIZER, useFactory: initializeAppGeo, deps: [GeoService], multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
