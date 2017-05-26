import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent, ContactComponent } from './about.component';

const HOME_ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
    ]
  }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(HOME_ROUTES);
