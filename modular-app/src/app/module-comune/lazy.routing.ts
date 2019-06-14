import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    // { path: '', redirectTo: 'home-common', pathMatch: 'full' },
    { path: 'home-page', loadChildren: './pages/home/home.module#HomePageModule' },
    { path: 'map', loadChildren: './pages/map/map.module#MapModule' },
    { path: 'list-path', loadChildren: './pages/list-path/list-path.module#ListPathPageModule' },
    { path: 'list-poi', loadChildren: './pages/list-poi/list-poi.module#ListPoiPageModule' },
    { path: 'list-event', loadChildren: './pages/list-event/list-event.module#ListEventPageModule' },
    { path: 'list-rh', loadChildren: './pages/list-rh/list-rh.module#ListRHPageModule' },
    { path: 'detail-poi', loadChildren: './pages/detail-poi/detail-poi.module#DetailPoiPageModule' },
    { path: 'detail-path', loadChildren: './pages/detail-path/detail-path.module#DetailPathPageModule' },
    { path: 'list-categories', loadChildren: './pages/list-categories/list-categories.module#ListCategoriesPageModule' },
    { path: 'detail-path', loadChildren: './pages/detail-path/detail-path.module#DetailPathPageModule' },
    { path: 'detail-info', loadChildren: './pages/detail-info/detail-info.module#DetailInfoPageModule' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
