import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const HOME_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(HOME_ROUTES);
