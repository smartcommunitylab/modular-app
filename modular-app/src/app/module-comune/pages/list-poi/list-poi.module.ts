import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListPoiPage } from './list-poi.page';
import { InViewportModule } from 'ng-in-viewport';
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
    FormsModule,
    InViewportModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListPoiPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ListPoiPageModule {}
