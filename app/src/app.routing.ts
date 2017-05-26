// Angular Router
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';

const APP_ROUTES: Routes = [
  {
    path: '', pathMatch: 'full',
    loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutModule'
  },
  // Not Found path
  { path: '**', component: NotFoundComponent }
];

export const RoutingModule = RouterModule.forRoot(APP_ROUTES);
