import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HelloPage } from './hello.page';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: HelloPage
  }
];
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/hello/i18n/', '.json');
}
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forRoot({ loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }}),
    RouterModule.forChild(routes)
  ],
  declarations: [HelloPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelloPageModule {

}
