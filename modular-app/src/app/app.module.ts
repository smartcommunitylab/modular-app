import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComuneModule } from './module-comune/web-components.module';
import { SettingService } from './services/setting.service';
import { GeoService } from './services/geo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ConfigService } from './services/config.service';
import { PopoverComponent } from './shared/popover/popover.component';

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
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent, PopoverComponent],
  entryComponents: [PopoverComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(),
    ComuneModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    SettingService,
    { provide: APP_INITIALIZER, useFactory: initializeAppConfig, deps: [ConfigService], multi: true },
    { provide: APP_INITIALIZER, useFactory: initializeAppSetting, deps: [SettingService], multi: true },
    { provide: APP_INITIALIZER, useFactory: initializeAppGeo, deps: [GeoService], multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
 // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
