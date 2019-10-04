import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FuneraliPage } from './funerali.page';
import { InViewportModule } from 'ng-in-viewport';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FuneraliPage
  }
];
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/funerali/i18n/', '.json');
// }
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InViewportModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FuneraliPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FuneraliPageModule {

}
