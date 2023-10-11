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
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ConfigService } from './services/config.service';
import { ModulePulstradeModule } from './module-pulstrade/module-pulstrade.module';
import { InfoModule } from './module-info/web-components.module';
import { FuneraliModule } from './module-funerali/web-components.module';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { LinkDirective } from './directives/link.directive';
import { SharedModule } from './shared/shared.module';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { HelloModule } from './module-hello-world/web-components.module';
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
  declarations: [AppComponent, LinkDirective],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    IonicModule.forRoot({
      innerHTMLTemplatesEnabled:true
    }),
    DragulaModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    ComuneModule.forRoot(),
    AppRoutingModule,
    ModulePulstradeModule.forRoot(),
    FuneraliModule.forRoot(),
    InfoModule.forRoot(),
    HelloModule.forRoot(),
    AppRoutingModule,
    TrasportiModule.forRoot(),
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    // FirebaseX,
    CallNumber,
    InAppBrowser,
    SettingService,
    DragulaService,
    { provide: APP_INITIALIZER, useFactory: initializeAppConfig, deps: [ConfigService], multi: true },
    { provide: APP_INITIALIZER, useFactory: initializeAppSetting, deps: [SettingService], multi: true },
    { provide: APP_INITIALIZER, useFactory: initializeAppGeo, deps: [GeoService], multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
