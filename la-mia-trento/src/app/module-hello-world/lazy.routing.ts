import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    { 
        path: 'hello',
        loadChildren: () => import('./pages/hello/hello.module').then(x => x.HelloPageModule),
         },

];

export const routing: ModuleWithProviders<RouterModule>  = RouterModule.forChild(routes);
