import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home-common', pathMatch: 'full' },
  { path: 'ps', loadChildren: './pages/home-ps/home-ps.module#HomePagePSModule' },
 // { path: 'ps/home-common', redirectTo: 'home-common', pathMatch: 'full'},
  { path: 'ps-search', loadChildren: './pages/search/search.module#SearchPageModule' },
  { path: 'ps-notification', loadChildren: './pages/notification/notification.module#NotificationPageModule' },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulePulstradeRoutingModule { }
