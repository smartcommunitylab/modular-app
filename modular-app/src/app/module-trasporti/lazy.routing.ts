import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: 'home-trasporti', loadChildren: './pages/home-trasporti/home-trasporti.module#HomeTrasportiPageModule' },
    { path: 'ttlist/:ref', loadChildren: './pages/transport-list/transport-list.module#TransportListPageModule' },
    { path: 'ttgroup/:ref/:agencyId/:groupId', loadChildren: './pages/transport-list/transport-list.module#TransportListPageModule' },
    { path: 'tt/:ref/:agencyId/:groupId/:routeId/:title', loadChildren: './pages/transport-tt/transport-tt.module#TransportTtPageModule' },
    { path: 'plan', loadChildren: './pages/plan/plan.module#PlanPageModule' },
    { path: 'parking/:ref', loadChildren: './pages/parking/parking.module#ParkingPageModule' },
    { path: 'parkingMeters', loadChildren: './pages/parking-meters/parking-meters.module#ParkingMetersPageModule' },
    { path: 'bikesharing/:ref', loadChildren: './pages/bikesharing/bikesharing.module#BikesharingPageModule' },
    { path: 'taxi', loadChildren: './pages/taxi/taxi.module#TaxiPageModule' },
    { path: 'transport-tt', loadChildren: './pages/transport-tt/transport-tt.module#TransportTtPageModule' },
    { path: 'map-spots', loadChildren: './pages/map-spots/map-spots.module#MapSpotsPageModule' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);