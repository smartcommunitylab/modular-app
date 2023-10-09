import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { 
        path: 'home-trasporti',
        loadChildren: () => import('./pages/home-trasporti/home-trasporti.module').then(x => x.HomeTrasportiPageModule)
    },
    { 
        path: 'ttlist/:ref',
        loadChildren: () => import('./pages/transport-list/transport-list.module').then(x => x.TransportListPageModule)
    },
    { 
        path: 'ttgroup/:ref/:agencyId/:groupId',
        loadChildren: () => import('./pages/transport-list/transport-list.module').then(x => x.TransportListPageModule)
    },
    { 
        path: 'tt/:ref/:agencyId/:groupId/:routeId/:title/:color', 
        loadChildren: () => import('./pages/transport-tt/transport-tt.module').then(x => x.TransportTtPageModule)
    },
    { 
        path: 'transport-tt',
        loadChildren: () => import('./pages/transport-tt/transport-tt.module').then(x => x.TransportTtPageModule)
    }
];

export const routing: ModuleWithProviders<RouterModule>  = RouterModule.forChild(routes);