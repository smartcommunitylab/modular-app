import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomeCommonPage } from './home-common.page';
import { TranslateModule } from '@ngx-translate/core';
import { DragulaModule } from 'ng2-dragula';
import { DelayDragDirective } from 'src/app/directives/delay-drag.directive';

const routes: Routes = [
  {
    path: '',
    component: HomeCommonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // DragulaModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // declarations: [HomeCommonPage,DelayDragDirective]
  declarations: [HomeCommonPage]
})
export class HomeCommonPageModule { }
