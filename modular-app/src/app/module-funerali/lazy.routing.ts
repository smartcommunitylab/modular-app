import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    { path: 'funerali', loadChildren: './pages/funerali/funerali.module#FuneraliPageModule' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
