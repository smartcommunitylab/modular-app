import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FilterPageFoodPage } from './filter-page-food.page';

const routes: Routes = [
  {
    path: '',
    component: FilterPageFoodPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FilterPageFoodPage]
})
export class FilterPageFoodPageModule {}
