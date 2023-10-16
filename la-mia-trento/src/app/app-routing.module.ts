import { NgModule } from '@angular/core';
import { HomeCommonPage } from './pages/home-common/home-common.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: '/profile', pathMatch: 'full'},
  { path: 'profile',
  loadChildren: () => import('./pages/profile/profile.module').then(x => x.ProfilePageModule)
  },
  { 
    path: 'home-common', 
    loadChildren: () => import('./pages/home-common/home-common.module').then(x => x.HomeCommonPageModule)
  },
  { path: 'setting',
  loadChildren: () => import('./pages/setting/setting.module').then(x => x.SettingPageModule)
 },
  { path: 'favourites', 
  loadChildren: () => import('./pages/favourites/favourites.module').then(x => x.FavouritesPageModule)
},
  { path: 'credits',
  loadChildren: () => import('./credits/credits.module').then(x => x.CreditsPageModule)
},
  { path: 'home-settings', 
  loadChildren: () => import('./pages/home-settings/home-settings.module').then(x => x.HomeSettingsPageModule)
},
{
  path: 'auth/callback',
  loadChildren: () =>
    import('./auth/auth-pages/auth-callback/auth-callback.module').then(
      (m) => m.AuthCallbackPageModule
    ),
},
{
  path: 'auth/endsession',
  loadChildren: () =>
    import('./auth/auth-pages/end-session/end-session.module').then(
      (m) => m.EndSessionPageModule
    ),
},
]  
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
