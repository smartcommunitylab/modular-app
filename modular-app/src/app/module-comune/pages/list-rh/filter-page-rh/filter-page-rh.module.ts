import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FilterPageRhPage } from './filter-page-rh.page';

const routes: Routes = [
  {
    path: '',
    component: FilterPageRhPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FilterPageRhPage]
})
export class FilterPageRhPageModule {}
