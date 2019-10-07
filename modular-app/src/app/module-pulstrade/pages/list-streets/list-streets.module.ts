import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListStreetsPage } from './list-streets.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslationLoaderService } from 'src/app/services/translation-loader.service';

const routes: Routes = [
  {
    path: '',
    component: ListStreetsPage
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
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ListStreetsPage]
})
export class ListStreetsPageModule {}
