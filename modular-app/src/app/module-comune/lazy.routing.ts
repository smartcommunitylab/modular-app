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
    { path: 'list-food', loadChildren: './pages/list-food/list-food.module#ListFoodPageModule' },
    { path: 'farmacie', loadChildren: './pages/list-farmacie/list-farmacie.module#ListFarmaciePageModule' },
    { path: 'farmacie', loadChildren: './pages/list-farmacie/list-farmacie.module#ListFarmaciePageModule' },
    { path: 'detail-info', loadChildren: './pages/detail-info/detail-info.module#DetailInfoPageModule' },
    { path: 'tourist-services', loadChildren: './pages/tourist-services/tourist-services.module#TouristServicesPageModule' },
    { path: 'filter-page-food', loadChildren: './pages/list-food/filter-page-food/filter-page-food.module#FilterPageFoodPageModule' },
  { path: 'filter-page-rh', loadChildren: './pages/list-rh/filter-page-rh/filter-page-rh.module#FilterPageRhPageModule' },
  { path: 'detail-event', loadChildren: './pages/detail-event/detail-event.module#DetailEventPageModule' },

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
