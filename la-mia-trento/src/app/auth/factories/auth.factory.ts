import { Platform } from '@ionic/angular';
import { AuthService, Browser } from 'ionic-appauth';
import { App } from '@capacitor/app';
import { environment } from 'src/environments/environment';
import { NgZone } from '@angular/core';
import { Requestor } from '@openid/appauth/built/xhr';
import { StorageBackend } from '@openid/appauth/built/storage';
import { SpinnerService } from '../spinner.service';

export const authFactory = (
  platform: Platform,
  ngZone: NgZone,
  requestor: Requestor,
  browser: Browser,
  storage: StorageBackend,
  spinnerService: SpinnerService
) => {
  browser.browserCloseListener((closeBrowserEvent: any) => {
    spinnerService.hide('login');
  });

  const authService = new AuthService(browser, storage, requestor);
  authService.authConfig = environment.authConfig;
  if (!platform.is('cordova')) {
    authService.authConfig.redirect_url =
      window.location.origin + '/auth/callback';
    authService.authConfig.end_session_redirect_url =
      window.location.origin + '/auth/endsession';
  }

  if (platform.is('capacitor')) {
    console.log('capacitor');
    App.addListener('appUrlOpen', (data: any) => {
      if (data.url !== undefined) {
        ngZone.run(() => {
          if (data.url.indexOf(authService.authConfig.redirect_url) === 0) {
            authService.authorizationCallback(data.url);
          } else {
            authService.endSessionCallback();
          }
        });
      }
    });
  }

  return authService;
};
