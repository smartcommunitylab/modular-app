import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailPathPage } from './detail-path.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPathPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [DetailPathPage]
})
export class DetailPathPageModule {}
