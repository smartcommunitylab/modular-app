import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import {
  catchError,
  concatMap,
  finalize,
  take,
  share,
  tap,
} from 'rxjs/operators';
import { AuthService } from './auth.service';
import { TokenResponse } from '@openid/appauth/built/token_response';
import { SpinnerService } from './spinner.service';
import { RefresherService } from './refresher.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private urlsToNotUse: Array<string>;
  private sharedToken$: Observable<TokenResponse> =
    this.authService.validToken$;

  constructor(
    private authService: AuthService,
    private spinnerService: SpinnerService,
    private refresherService: RefresherService
  ) {
    this.urlsToNotUse = [];
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.isValidRequestForInterceptor(request.url)) {
      return next.handle(request);
    }
    return this.handle(request, next);
  }

  handle(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const spinnerTopic = request.url + Math.random();
    return this.sharedToken$.pipe(
      take(1),
      // timeout({ first: 5000 }),
      tap(() => this.spinnerService.show(spinnerTopic)),
      tap(() => this.refresherService.httpCallStarted()),
      concatMap((token) => {
        const requestWithToken = request.clone({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          setHeaders: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Authorization: `${token.tokenType === 'bearer' ? 'Bearer' : token.tokenType
              } ${token.accessToken}`,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Accept: '*/*',
          },
        });

        return next.handle(requestWithToken).pipe(
          catchError((error: HttpErrorResponse) => {
            if (error instanceof HttpErrorResponse && error.status === 401) {
              return this.handle401Error(requestWithToken, next);
            }
            return throwError(() => error);
          })
        );
      }),
      finalize(() => {
        this.spinnerService.hide(spinnerTopic);
        this.refresherService.httpCallEnded();
      })
    );
  }

  private handle401Error(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.authService.forceRefreshToken()).pipe(
      concatMap(() => this.sharedToken$.pipe(take(1))),
      concatMap((newToken) =>
        next.handle(this.changeToken(newToken.accessToken, request))
      ),
      catchError((err) => {
        this.authService.postLogoutCleanup();
        return throwError(() => err);
      })
    );
  }
  changeToken(accessToken: string, request: HttpRequest<any>) {
    return request.clone({
      headers: request.headers.set('Authorization', `Bearer ${accessToken}`),
    });
  }

  private isValidRequestForInterceptor(requestUrl: string): boolean {

    if (requestUrl.indexOf('api/') > 0) {
      return true;
    }
    return false;
  }
}
