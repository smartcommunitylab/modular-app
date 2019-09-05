import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListStreetsPage } from './list-streets.page';

const routes: Routes = [
  {
    path: '',
    component: ListStreetsPage
  }
];
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/strade/i18n/', '.json');
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forRoot({ loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }}),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ListStreetsPage]
})
export class ListStreetsPageModule {}
