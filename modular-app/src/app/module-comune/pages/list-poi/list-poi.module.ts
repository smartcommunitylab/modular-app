import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListPoiPage } from './list-poi.page';
import { InViewportModule } from 'ng-in-viewport';
import { FilterPagePoiPage } from './filter-page-poi/filter-page-poi.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ListPoiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    InViewportModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [FilterPagePoiPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ListPoiPage, FilterPagePoiPage]
})
export class ListPoiPageModule {}
