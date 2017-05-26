import { NgModule } from '@angular/core';
import { RoutingModule } from './about.routing';

import { AboutComponent, ContactComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent
  ],
  imports: [ RoutingModule ]
})
export class AboutModule {}
