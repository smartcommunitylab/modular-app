import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InViewportModule } from 'ng-in-viewport';
import { HomeTrasportiPage } from './home-trasporti.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: HomeTrasportiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InViewportModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeTrasportiPage]
})
export class HomeTrasportiPageModule {}
