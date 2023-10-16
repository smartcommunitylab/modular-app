// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authConfig: {
    client_id: 'c_684f6f62-8b89-4616-bc07-6f698668f4ff',
    server_host: 'https://aac.platform.smartcommunitylab.it',
    redirect_url: 'it.smartcommunitylab.comuneintasca.trento://auth/callback',
    end_session_redirect_url: 'it.smartcommunitylab.comuneintasca.trento://auth/endsession',
    scopes: 'openid email profile',
    automaticSilentRenew: true,
    pkce: true,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
