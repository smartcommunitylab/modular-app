<a name="readme-top"></a>
<br />

<div align="center">
  <a href="https://github.dev/smartcommunitylab/modular-app/tree/2023-new-version">
    <img src="la-mia-trento/resources/icon.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Modular App</h3>

<p align="center">
This branch shows you how create and integrate a new module created with Stencil and how to set the authentication part inside the modular app. If you want to understand the structure of the application choose the branch 2023-new-version
    <br />
</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#Create a module with Stencil">Create a module with Stencil</a>
      <ul>
        <li><a href="#Creation">Creation</a></li>
      </ul>
            <ul>
        <li><a href="#Build and Public">Build and Public</a></li>
      </ul>
    </li>
    <li>
      <a href="#Integrate inside the existing app">Integrate inside the existing app</a>
      <ul>
        <li><a href="#Installation">Installation</a></li>
      </ul>
      <ul>
        <li><a href="#Create the container">Create the container </a></li>
      </ul>
      <ul>
        <li><a href="#Modification of the files">Modification of the files</a></li>
      </ul>
    </li>
    <li>
      <a href="#Authentication">Authentication</a>
      <ul>
        <li><a href="#Install library">Install library</a></li>
      </ul>
      <ul>
        <li><a href="#Set up the environment">Set up the environment </a></li>
      </ul>
      <ul>
        <li><a href="#Create the authentication part">Create the authentication part</a></li>
      </ul>
      <ul>
        <li><a href="#Modify the existing files">Modify the existing files</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- Create the module -->

## Create a module with Stencil

This chapter shows how to create a stencil form and integrate it into your application. Stencil is not a necessary requirement but it is how several of the present components have been implemented. Each module is composed of several components but it is also possible to create a single component that independently changes the content.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Creation

First of all, the Stencil library must be installed on your machine.
Follow the guide [here](https://stenciljs.com/).

After the installation create the new collection with the command

```

npm init stencil

```

Select `component` option and put the name of the project.
In this example the name is `la-mia-trento-hello-world`

Enter in the folder just created and install the missing npm missing packets

```
  $ cd la-mia-trento-hello-world
  $ npm install
```

After this phase you are almost ready to implement your components. There are a couple of changes you have to do for let the application use you component:

First of all open `stencil.config.ts` and remove the line

```
    {
      type: 'dist',
  ->  esmLoaderPath: '../loader',
    },
```
After that open `package.json` and remove the line

```
 "files": [
    "dist/",
  ->"loader/"
  ],
```
By default the component create is my-component. You can change manually the entries or delete the folder `component/my-component` and then create the new one with
```
npm run generate
```
Insert the name of the component `hello` and say yes to the creation of the Stylesheet, Spec Test e E2E Test

Now you are ready to implement your code.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Build and public -->

### Build and public

The build and and the publish works as usual using the npm commands

```
  $ npm run build
  $ npm publish
```

<!-- Integrate inside the existing app -->

## Integrate inside the existing app

After you have created the new components and module using Stencil, you have to integrate in the existing application. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Integrate inside the existing app -->

### Installation

First of all enter in the folder of the container app  `la-mia-trento` and install the component created wiht npm command

```
npm i la-mia-trento-hello-world
```

After this in your `node_modules` folder you will find the new module created.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Create the container

Now you have to prepare the new page inside the container application
Inside the folder `src/app `create `module-hello-world` folder and subfolders `pages` for the single pages containing the components. It is possible add other folders and files like `utils` or `assets` if u need specific assets or functionalities.

```
 $ mkdir module-hello-world
 $ cd module-hello-world
 $ mkdir pages
 $ cd pages

```

Now lets create a new component and module with lazy routing. You can use ng g or create by hand.
Following you see all the file you will have in the main module folder

```
app-initialize.ts        ->initialization function for loading all the web components
lazy.routing.ts          -> lazy routing for the single module
utils                    -> folder with utilities service
assets                   -> folder with specific assets for the module
pages                    -> page or pages with the web components
web-components.module.ts -> definition of the new module
```

The first file defines a function for loading all the custom elements and is called in the `web-components.module.ts`

```
import { defineCustomElements as WcHello } from 'la-mia-trento-hello-world/dist/loader';

export function appInitialize() {
  return () => {
    const win = window as any;
    if (typeof win !== 'undefined') {
      // Define all of our custom elements
      WcHello(win);
    }
  };
}


```

The routing file provide all the path for the internal pages. Here we have only one page at the route 'hello'

```
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    { 
        path: 'hello',
        loadChildren: () => import('./pages/hello/hello.module').then(x => x.HelloPageModule),
    },

];

export const routing: ModuleWithProviders<RouterModule>  = RouterModule.forChild(routes);


```

The module file initialize the components and defines the fact we are using a schema CUSTOM_ELEMENTS_SCHEMA.

```
import { APP_INITIALIZER, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appInitialize } from './app-initialize';
import { ConfigService } from '../services/config.service';
import { routing } from './lazy.routing';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/info/i18n/', '.json');
}
@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [

  ],
  exports: [

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelloModule {
  static forRoot(): ModuleWithProviders<HelloModule> {
    return {
      ngModule: HelloModule,
  
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
}
```
Entering in the pages/hello folder you will find a set of files like these
```
    hello.module.ts     -> module that use the web component 
    hello.page.html     -> html page that include the <hello-component> tag
    hello.page.scss     -> style for the page
    hello.page.spec.ts  -> unit test
    hello.page.ts       -> the ts code
```
You can generate   enter in the folder pages and generate the a new page with `ng generate page [nome]`
Remember to change  the `[nome.module.ts]` adding the custom element schema:
```
...
schemas: [CUSTOM_ELEMENTS_SCHEMA]
...
```

The component is added in the page in this way
```
...
   <ion-content>
 ->    <hello-component></hello-component>
    </ion-content>
...
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Modification of the files

Finally add the  following row in the `app.module.ts`

```
@NgModule({
  declarations: [AppComponent, LinkDirective],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    ...
->  HelloModule.forRoot(),
    ...
```

Last but not least, you have to add your module to the menu. Open the `module-entries.json` and add the new entry
```
...
->,{
  "id": "helo-world",
  "name": {
    "it": "Ciao mondo",
    "en": "Buenas dias",
    "de": "Guten morgen"
  },
  "url": "/hello"
},
...
```
If you want add it to a specific profile at the installation phase, open `default-profiles-module.json` and add it in one of them. For example, if you want add it to the citizen profile:
```
{
  "turist": [
    ....
],
 ->"citizen": [    {
   "id": "helo-world",
  "name": {
    "it": "Ciao mondo",
    "en": "Buenas dias",
    "de": "Guten morgen"
  },
  "url": "/hello"
   "icon": "home"
  },
  ...
```
Now your module is ready to be visualized.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Authentication -->

## Authentication
In the following part you will see how to add the authentication part for your application. We used a set of open source libraries integrated with our authentication provider AAC. The implementation using other authentication provider is similar.
### Install library

In order to add authentication on your Ionic application add the following npm modules

```
npm install @capacitor/browser
npm i @ionic/storage-angular
npm i @openid/appauth
npm i angular-auth-oidc-client
npm i capacitor-secure-storage-plugin
npm i ionic-appauth
```

and copy the new web assets with the native platform if creted

```
npm cap sync
```

### Set up the environment

Inside the `src/environment` folder you have 2 files
```
environment.prod.ts
environment.ts
```
On the relative environment file you have to add the following configuration
```
  ...
  authConfig: {
    client_id: 'clientidxxx',
    server_host: 'https://authserverurlxxx',
    redirect_url: 'it.smartcommunitylab.comuneintasca.trento://auth/callback',
    end_session_redirect_url: 'it.smartcommunitylab.comuneintasca.trento://auth/endsession',
    scopes: 'openid email profile',
    pkce: true,
  }
  ...
```
This is an example of configuration where `client_id` is the client id of our application generated by the authentication provider, `server_host` is the url where is the auth provider ,  `redirect_url` and `end_session_redirect_url` are the callback to be called after login and logout, `scopes` are the profile data the application wants to access, `pkce`  means we are using code verifier and code challenge in order to access to the system
### Create the authentication part
Inside the auth folder you can find all the files your application needs (and more) to have the authentication. You can copy the entire directory
```
auth-guard.service.ts        -> the Guard that implements the CanActivate interface. Not used in this example
auth.service.ts              -> the service that manage login, logout, storage of token, refresh and more
auth.interceptor.ts          -> interceptor that get the token and attach it to every request
auth.module.ts               -> the module with some provider defined
refresher.service.ts         -> service for refresh the content of the page
auth-pages                   -> the auth callback page for log in and logout
factories                    -> the auth factory, create listener for the callback in the application
local-storage.service.ts     -> service for get and set variable from localstorage
ng-http.service.ts           -> implements the Requestor, used by auth module
spinner.service.ts           -> service for managing the spinner for login and logout
```


### Modify the existing files
In order to have the application run with the authentication you have to change the following files:

android/app/src/main/Androidmanifest.xml
```
...
 <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="it.smartcommunitylab.comuneintasca.trento" />
 </intent-filter>
 ...
 ```

src/app/app-routing.module.ts
```
...
{
  path: 'auth/callback',
  loadChildren: () =>
    import('./auth/auth-pages/auth-callback/auth-callback.module').then(
      (m) => m.AuthCallbackPageModule
    ),
},
{
  path: 'auth/endsession',
  loadChildren: () =>
    import('./auth/auth-pages/end-session/end-session.module').then(
      (m) => m.EndSessionPageModule
    ),
},
...
```
src/app/app.component.ts

```
this.platform.ready().then(async () => {
      await this.authService.init();
```
src/app/app.module.ts

```
...
import { AuthModule } from './auth/auth.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

const Drivers = {
  SecureStorage: 'ionicSecureStorage',
  IndexedDB: 'asyncStorage',
  LocalStorage: 'localStorageWrapper',
};
...
  imports: [
...
    AuthModule,

...
    IonicStorageModule.forRoot({
      driverOrder: [
        CordovaSQLiteDriver._driver,
        Drivers.IndexedDB,
        Drivers.LocalStorage,
      ],
    }),
    ...
```

Now you can add in your page the method for calling the login and logout
Here we added them in home-setting.page.html 
```
<div  *ngIf="isSelected('auth')">
    <ion-button (click)="signIn()"*ngIf="(isAuthenticated$ | async) === false">Sign In</ion-button>
    <ion-card *ngIf="isAuthenticated$ | async">
      <ion-card-header>
      </ion-card-header>
      <ion-card-content>
        <ion-button (click)="signOut()">Sign Out</ion-button>
        <div *ngIf="user$ | async as user">
          {{user | json}}
      </div>
    </ion-card-content>
    </ion-card>
  </div>
```
and call the methods for login and logout.
```
  public async signIn() {
    await this.authService.login();
  }
  public async signOut() {
    await this.authService.logout();
  }
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

distributed under Apache [2.0](https://www.apache.org/licenses/LICENSE-2.0) license.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)
Comune di Trento app's page: [https://www.comune.trento.it/Aree-tematiche/Smart-city/App-e-Servizi-in-Comune/Tutte-le-APP-disponibili/APP-La-mia-Trento](https://www.comune.trento.it/Aree-tematiche/Smart-city/App-e-Servizi-in-Comune/Tutte-le-APP-disponibili/APP-La-mia-Trento)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [FBK](https://www.fbk.eu/)
- [Comune di Trento](https://www.comune.trento.it/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Ionic.com]: https://img.shields.io/badge/ionic-0769AD?style=for-the-badge&logo=ionic&logoColor=white
[Ionic-url]: https://ionic.com
[Stencil.com]: https://img.shields.io/badge/stencil-0769AD?style=for-the-badge&logo=stencil&logoColor=white
[stencil-url]: https://stencil.com
