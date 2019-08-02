import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ListPoiPage } from './list-poi.page';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { InViewportModule } from 'ng-in-viewport';
import { FilterPagePoiPage } from './filter-page-poi/filter-page-poi.page';

const routes: Routes = [
  {
    path: '',
    component: ListPoiPage
  }
];
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/comune/i18n/', '.json');
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InViewportModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[FilterPagePoiPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ListPoiPage,FilterPagePoiPage]
})
export class ListPoiPageModule {}
