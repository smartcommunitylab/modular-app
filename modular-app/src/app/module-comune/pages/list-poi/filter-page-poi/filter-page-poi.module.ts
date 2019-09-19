import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

// import { FilterPagePoiPage } from './filter-page-poi.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: FilterPagePoiPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
    // ,
    // RouterModule.forChild(routes)
  ]
  // ,
  // declarations: [FilterPagePoiPage]
})
export class FilterPagePoiPageModule {}
