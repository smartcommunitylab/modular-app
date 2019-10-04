import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListFoodPage } from './list-food.page';
import { FilterPageFoodPage } from './filter-page-food/filter-page-food.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ListFoodPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [FilterPageFoodPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ListFoodPage, FilterPageFoodPage]
})
export class ListFoodPageModule {}
