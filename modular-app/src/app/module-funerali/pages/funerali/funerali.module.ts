import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FuneraliPage } from './funerali.page';

const routes: Routes = [
  {
    path: '',
    component: FuneraliPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FuneraliPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FuneraliPageModule {

}
