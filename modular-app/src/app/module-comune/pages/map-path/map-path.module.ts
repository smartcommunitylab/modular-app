import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapPathPage } from './map-path.page';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: MapPathPage
  }
];
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/comune/i18n/', '.json');
// }
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // TranslateModule.forRoot({ loader: {
    //   provide: TranslateLoader,
    //   useFactory: HttpLoaderFactory,
    //   deps: [HttpClient]
    // }}),
    RouterModule.forChild(routes)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [MapPathPage]
})
export class MapPathPageModule {}
