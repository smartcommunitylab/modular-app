import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomeSettingsPage } from './home-settings.page';
import { DragulaModule } from 'ng2-dragula';
import { TranslateModule } from '@ngx-translate/core';
import { DelayDragDirective } from 'src/app/directives/delay-drag.directive';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { LongPressModule } from 'ionic-long-press';

const routes: Routes = [
  {
    path: '',
    component: HomeSettingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DragulaModule,
    DragDropModule,
    LongPressModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomeSettingsPage,DelayDragDirective]
})
export class HomeSettingsPageModule {}
