import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

// import { FilterPageEventPage } from './filter-page-event.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: FilterPageEventPage
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
  // declarations: [FilterPageEventPage]
})
export class FilterPageEventPageModule {}
