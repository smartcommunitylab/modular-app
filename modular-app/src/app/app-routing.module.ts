import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'list-poi', loadChildren: './pages/list-poi/list-poi.module#ListPoiPageModule' },
  { path: 'detail-path', loadChildren: './pages/detail-path/detail-path.module#DetailPathPageModule' },
  { path: 'list-categories', loadChildren: './pages/list-categories/list-categories.module#ListCategoriesPageModule' },
  { path: 'detail-info', loadChildren: './pages/detail-info/detail-info.module#DetailInfoPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
