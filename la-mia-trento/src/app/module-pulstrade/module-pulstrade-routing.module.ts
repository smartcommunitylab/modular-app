import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home-common', pathMatch: 'full' },
  {
     path: 'ps',
     loadChildren: () => import('./pages/home-ps/home-ps.module').then(x => x.HomePagePSModule),
    },
 // { path: 'ps/home-common', redirectTo: 'home-common', pathMatch: 'full'},
  { 
    path: 'ps-search',
    loadChildren: () => import('./pages/search/search.module').then(x => x.SearchPageModule),
  },
  { 
    path: 'ps-notification', 
    loadChildren: () => import('./pages/notification/notification.module').then(x => x.NotificationPageModule),
   },
  { 
    path: 'street-detail',
    loadChildren: () => import('./pages/street-detail/street-detail.module').then(x => x.StreetDetailPageModule),
   },
  { 
    path: 'list-streets',
    loadChildren: () => import('./pages/list-streets/list-streets.module').then(x => x.ListStreetsPageModule),
   },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulePulstradeRoutingModule { }
