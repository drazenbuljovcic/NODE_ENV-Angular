// Angular Router
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { NotFoundComponent } from './components/not-found/not-found.component';

const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // Not Found path
  { path: '**', component: NotFoundComponent }
];

export const RoutingModule = RouterModule.forRoot(APP_ROUTES);
