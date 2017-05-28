import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { ServerModule } from '@angular/platform-server';

import { AppComponent } from '../app/src/app.component';
import { AppModule } from '../app/src/app.module';

@NgModule({
  imports: [
    ServerModule,
    AppModule
  ],
  bootstrap: [ AppComponent ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class AppServerModule {}
