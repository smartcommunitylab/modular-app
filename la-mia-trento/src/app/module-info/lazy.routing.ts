import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    { 
        path: 'notizie',
        loadChildren: () => import('./pages/notizie/notizie.module').then(x => x.NotiziePageModule),
         },
    { 
        path: 'video',
        loadChildren: () => import('./pages/video/video.module').then(x => x.VideoPageModule),
        },
];

export const routing: ModuleWithProviders<RouterModule>  = RouterModule.forChild(routes);
