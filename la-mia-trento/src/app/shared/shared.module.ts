import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FilterPage } from './filter-page/filter-page.page';
import { FormsModule } from '@angular/forms';
import { InViewportModule } from 'ng-in-viewport';
import { TranslateModule } from '@ngx-translate/core';
import { ItemListComponent, ListItemDirective } from './itemlist/itemlist.component';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    InViewportModule,
    TranslateModule

  ],
  declarations: [
    ItemListComponent, ListItemDirective,
    FilterPage,PopoverComponent
  ],
  exports: [
    ItemListComponent, ListItemDirective, FilterPage,PopoverComponent, TranslateModule,IonicModule
  ]
})
export class SharedModule {}
