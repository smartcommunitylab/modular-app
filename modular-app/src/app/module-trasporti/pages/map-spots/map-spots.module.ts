import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapSpotsPage } from './map-spots.page';
import { StopDetailComponent } from './stop-detail/stop-detail.component';
import { StopSingleLineComponent } from './stop-single-line/stop-single-line.component';

const routes: Routes = [
  {
    path: '',
    component: MapSpotsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[StopDetailComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [MapSpotsPage, StopDetailComponent,StopSingleLineComponent]
})
export class MapSpotsPageModule {}
