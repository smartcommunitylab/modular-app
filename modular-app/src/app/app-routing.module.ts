import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home-common', pathMatch: 'full' },
  // { path: 'home', loadChildren: './module-comune/web-components.module#ComuneModule' },
  { path: 'home-common', loadChildren: './pages/home-common/home-common.module#HomeCommonPageModule' },
  { path: 'setting', loadChildren: './pages/setting/setting.module#SettingPageModule' },
  { path: 'favourites', loadChildren: './pages/favourites/favourites.module#FavouritesPageModule' },
  { path: 'credits', loadChildren: './credits/credits.module#CreditsPageModule' },

  // { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  // { path: 'list-poi', loadChildren: './pages/list-poi/list-poi.module#ListPoiPageModule' },
  // { path: 'detail-poi', loadChildren: './pages/detail-poi/detail-poi.module#DetailPoiPageModule' },
  // { path: 'list-categories', loadChildren: './pages/list-categories/list-categories.module#ListCategoriesPageModule' },
  // { path: 'detail-info', loadChildren: './pages/detail-info/detail-info.module#DetailInfoPageModule' },
  // { path: 'setting', loadChildren: './pages/setting/setting.module#SettingPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
