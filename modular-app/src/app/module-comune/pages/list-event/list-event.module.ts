import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListEventPage } from './list-event.page';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { InViewportModule } from 'ng-in-viewport';
import { FilterPageEventPage } from './filter-page-event/filter-page-event.page';

const routes: Routes = [
  {
    path: '',
    component: ListEventPage
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
    TranslateModule.forRoot({ loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }}),
    RouterModule.forChild(routes)
  ],
  entryComponents:[FilterPageEventPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ListEventPage,FilterPageEventPage]
})
export class ListEventPageModule {}
