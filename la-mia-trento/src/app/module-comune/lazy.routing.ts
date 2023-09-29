import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  // { path: '', redirectTo: 'home-common', pathMatch: 'full' },
  {
    path: 'home-page',
    loadChildren: () => import('./pages/home/home.module').then(x => x.HomePageModule),
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then(x => x.MapModule),
  },
  {
    path: 'list-path', loadChildren: () => import('./pages/list-path/list-path.module').then(x => x.ListPathPageModule),
  },
  {
    path: 'list-poi', loadChildren: () => import('./pages/list-poi/list-poi.module').then(x => x.ListPoiPageModule),
  },
  {
    path: 'list-event', loadChildren: () => import('./pages/list-event/list-event.module').then(x => x.ListEventPageModule),
  },
  {
    path: 'list-rh', loadChildren: () => import('./pages/list-rh/list-rh.module').then(x => x.ListRHPageModule),
  },

  {
    path: 'detail-path', loadChildren: () => import('./pages/detail-path/detail-path.module').then(x => x.DetailPathPageModule),
  },
  {
    path: 'map-path',

    loadChildren: () => import('./pages/map-path/map-path.module').then(x => x.MapPathPageModule),
  },
  {
    path: 'list-food',

    loadChildren: () => import('./pages/list-food/list-food.module').then(x => x.ListFoodPageModule),
  },
  {
    path: 'farmacie',

    loadChildren: () => import('./pages/list-farmacie/list-farmacie.module').then(x => x.ListFarmaciePageModule),
  },

  {
    path: 'tourist-services',

    loadChildren: () => import('./pages/tourist-services/tourist-services.module').then(x => x.TouristServicesPageModule),
  },
  { path: 'detail-comune', loadChildren: () => import('./pages/detail-comune/detail-comune.module').then(x => x.DetailComunePageModule) },


];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
