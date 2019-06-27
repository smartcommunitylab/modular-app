import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    { path: 'notizie', loadChildren: './pages/notizie/notizie.module#NotiziePageModule' },
    { path: 'video', loadChildren: './pages/video/video.module#VideoPageModule' },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
