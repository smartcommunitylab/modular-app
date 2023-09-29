import { NgModule } from '@angular/core';
import { HomeCommonPage } from './pages/home-common/home-common.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: '/profile', pathMatch: 'full'},
  // { path: 'home', loadChildren: './module-comune/web-components.module#ComuneModule' },
  { path: 'profile',
  loadChildren: () => import('./pages/profile/profile.module').then(x => x.ProfilePageModule)
  },
  { 
    path: 'home-common', 
    loadChildren: () => import('./pages/home-common/home-common.module').then(x => x.HomeCommonPageModule)
  },
  { path: 'setting',
  loadChildren: () => import('./pages/setting/setting.module').then(x => x.SettingPageModule)
 },
  { path: 'favourites', 
  loadChildren: () => import('./pages/favourites/favourites.module').then(x => x.FavouritesPageModule)
},
  { path: 'credits',
  loadChildren: () => import('./credits/credits.module').then(x => x.CreditsPageModule)
},
  { path: 'home-settings', 
  loadChildren: () => import('./pages/home-settings/home-settings.module').then(x => x.HomeSettingsPageModule)
},
  // { path: 'filter-page-food', loadChildren: './module-comune/pages/list-food/filter-page-food/filter-page-food.module#FilterPageFoodPageModule' },
  // { path: 'filter-page-rh', loadChildren: './module-comune/pages/list-rh/filter-page-rh/filter-page-rh.module#FilterPageRhPageModule' },
  // { path: 'detail-event', loadChildren: './module-comune/pages/detail-event/detail-event.module#DetailEventPageModule' },
  // { path: 'touris-services', loadChildren: './module-comune/pages/touris-services/touris-services.module#TourisServicesPageModule' }
]  
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
