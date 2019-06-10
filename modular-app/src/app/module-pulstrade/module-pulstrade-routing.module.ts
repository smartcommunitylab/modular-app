import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home-common', pathMatch: 'full' },
  { path: 'home-ps', loadChildren: './pages/home-ps/home-ps.module#HomePagePSModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulePulstradeRoutingModule { }
