import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComuneModule } from './module-comune/web-components.module';
import {SettingService} from './services/setting.service'
export function initializeApp1(appInitService: SettingService) {
  return (): Promise<any> => { 
    return appInitService.Init();
  }
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),ComuneModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    SettingService,
    { provide: APP_INITIALIZER, useFactory: initializeApp1, deps: [SettingService], multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
