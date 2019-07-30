import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCommonPage } from './pages/home-common/home-common.page';

const routes: Routes = [
   { path: '', redirectTo: '/profile', pathMatch: 'full'},
  // { path: 'home', loadChildren: './module-comune/web-components.module#ComuneModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'home-common', loadChildren: './pages/home-common/home-common.module#HomeCommonPageModule' },
  { path: 'setting', loadChildren: './pages/setting/setting.module#SettingPageModule' },
  { path: 'favourites', loadChildren: './pages/favourites/favourites.module#FavouritesPageModule' },
  { path: 'credits', loadChildren: './credits/credits.module#CreditsPageModule' },
  { path: 'home-settings', loadChildren: './pages/home-settings/home-settings.module#HomeSettingsPageModule' },
  { path: 'filter-page-food', loadChildren: './module-comune/pages/list-food/filter-page-food/filter-page-food.module#FilterPageFoodPageModule' },
  { path: 'filter-page-rh', loadChildren: './module-comune/pages/list-rh/filter-page-rh/filter-page-rh.module#FilterPageRhPageModule' },
  { path: 'detail-event', loadChildren: './module-comune/pages/detail-event/detail-event.module#DetailEventPageModule' }
]  
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
