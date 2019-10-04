import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListEventPage } from './list-event.page';
import { InViewportModule } from 'ng-in-viewport';
import { FilterPageEventPage } from './filter-page-event/filter-page-event.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ListEventPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InViewportModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [FilterPageEventPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ListEventPage, FilterPageEventPage]
})
export class ListEventPageModule {}
