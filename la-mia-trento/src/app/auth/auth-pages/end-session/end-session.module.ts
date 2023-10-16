import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { EndSessionPage } from './end-session.page';


const routes: Routes = [
  {
    path: '',
    component: EndSessionPage,

  },
];

@NgModule({
  imports: [],
  declarations: [EndSessionPage],
})
export class EndSessionPageModule {}
