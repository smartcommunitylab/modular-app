import { forwardRef, Inject, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TokenResponse } from '@openid/appauth/built/token_response';
import { StringMap } from '@openid/appauth/built/types';

import {
  AuthService as IonicAppAuthService,
  AuthActions,
  IAuthAction,
} from 'ionic-appauth';
import {
  filter,
  map,
  Observable,
  shareReplay,
  switchMap,
  take,
  first,
  lastValueFrom,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root',
})
/**
 * Wrapper around ionic-appauth service.
 */
export class AuthService {
  public isInitComplete$: Observable<void> =
    this.ionicAppAuthService.initComplete$.pipe(
      filter(Boolean),
      map(() => undefined),
      take(1),
      shareReplay(1)
    );
    public user$: Observable<any> = this.ionicAppAuthService.user$;
    public events$: Observable<any> = this.ionicAppAuthService.events$;
    public isAuthenticated$: Observable<boolean> = this.isInitComplete$.pipe(
    switchMap(() => this.ionicAppAuthService.isAuthenticated$),
    shareReplay(1)
  );

  public validToken$: Observable<TokenResponse> =
    this.ionicAppAuthService.token$.pipe(filter(Boolean), shareReplay(1));

  public isReadyForApi$: Observable<void> = this.validToken$.pipe(
    map(() => undefined),
    first(),
    shareReplay(1)
  );

  private refreshTokenCallPromise: null | Promise<void> = null;

  constructor(
    @Inject('IonicAppAuthService')
    private ionicAppAuthService: IonicAppAuthService,
    private router: Router,
    private navController: NavController,
    private localStorageService: LocalStorageService,
    private injector: Injector,
    private spinnerService: SpinnerService
  ) { }

  public async init() {
    await this.ionicAppAuthService.init();
    this.ionicAppAuthService.events$.subscribe((action) => {
      const actionType = action.action;
      if (actionType === AuthActions.SignInSuccess) {
        this.onSignInSuccess(action);
      }
      if (actionType === AuthActions.SignOutSuccess) {
        this.postLogoutCleanup();
      }
      if (actionType === AuthActions.SignOutFailed) {
        console.error('sign out failed', action);
        // there is nothing else to do...
        this.postLogoutCleanup();
      }

      if (
        actionType === AuthActions.SignInFailed ||
        actionType === AuthActions.SignInSuccess
      ) {
        console.log('AuthActions hide spinner', actionType);
        this.spinnerService.hide('login');
      }
      if (
        actionType === AuthActions.SignInFailed ||
        actionType === AuthActions.RefreshFailed
      ) {
        console.error('auth error', action);
        this.logoutAfterAuthFailed();
      }

      if (
        actionType === AuthActions.RefreshSuccess ||
        actionType === AuthActions.RefreshFailed
      ) {
        this.refreshTokenCallPromise = null;
      }
    });
  }

  /**
   * Waits for the first token available, but later it will return latest token immediately
   *
   * This api is just promise version of authService.validToken$
   * */
  public async getToken(): Promise<TokenResponse> {
    return await lastValueFrom(this.validToken$.pipe(take(1)));
  }

  public async login(): Promise<void> {
    // redirect is handled from global event subscription
    await this.ionicAppAuthService.signIn(undefined);
  }

  public async logout(): Promise<void> {
    // redirect is handled from global event subscription
    try {
      // in the future, we may not need to perform signOut, just delete the token. (from secure storage)
      await this.ionicAppAuthService.signOut();
    } finally {
      setTimeout(() => this.postLogoutCleanup(), 300);
    }
  }

  public async logoutAfterAuthFailed() {
    //todo alert('You are not longer logged in, please log in again.');
    try {
      await this.ionicAppAuthService.signOut();
    } finally {
      // redirect should be handled from global event subscription,
      // but if not, we do it manually
      setTimeout(() => this.postLogoutCleanup(), 300);
    }
  }

  public async postLogoutCleanup() {
    // clear out storage
    await this.localStorageService.clearAll();

    // clear local state stored in variables of all services. By doing
    // hard page reload.
    location.replace('home-common');
  }

  /**
   * Uses one time refresh token, to get a new token from aac.
   *
   * Function guarantees that the token will be asked only once, even if there are multiple calls.
   */
  public forceRefreshToken(): Promise<void> {
    if (!this.refreshTokenCallPromise) {
      this.refreshTokenCallPromise = this.ionicAppAuthService.refreshToken();
    }
    return this.refreshTokenCallPromise;
  }

  /** called from EndSessionPage */
  public endSessionCallback() {
    this.ionicAppAuthService.endSessionCallback();
    this.navController.navigateRoot('home-settings');
  }
  /** called from AuthCallbackPage */
  public authorizationCallback() {
    return this.ionicAppAuthService.authorizationCallback(
      window.location.origin + this.router.url
    );
  }

  private async onSignInSuccess(action: IAuthAction) {
      alert('login done'+JSON.stringify(action));
      console.log('login',action);
  }

}
export type AuthProvider = 'facebook' | 'google' | 'apple';
