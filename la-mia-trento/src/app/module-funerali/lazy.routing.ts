import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    { 
        path: 'funerali',
        loadChildren: () => import('./pages/funerali/funerali.module').then(x => x.FuneraliPageModule),
        }
];

export const routing: ModuleWithProviders<RouterModule>  = RouterModule.forChild(routes);
