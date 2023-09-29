import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InViewportModule } from 'ng-in-viewport';
import { HomeTrasportiPage } from './home-trasporti.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: HomeTrasportiPage
  }
];
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/trasporti/i18n/", ".json");
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InViewportModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }, isolate: true
    }),    RouterModule.forChild(routes)
  ],
  declarations: [HomeTrasportiPage]
})
export class HomeTrasportiPageModule {}
