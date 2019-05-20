import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    // { path: '', redirectTo: 'home-page', pathMatch: 'full' },
    { path: 'home-page', loadChildren: './pages/home/home.module#HomePageModule' },
    { path: 'list-poi', loadChildren: './pages/list-poi/list-poi.module#ListPoiPageModule' },
    { path: 'detail-poi', loadChildren: './pages/detail-poi/detail-poi.module#DetailPoiPageModule' },
    { path: 'list-categories', loadChildren: './pages/list-categories/list-categories.module#ListCategoriesPageModule' },
    { path: 'detail-path', loadChildren: './pages/detail-path/detail-path.module#DetailPathPageModule' },
    { path: 'detail-info', loadChildren: './pages/detail-info/detail-info.module#DetailInfoPageModule' }  ];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);