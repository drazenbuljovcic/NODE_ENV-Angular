import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import RoutingModule from '@/app.routes';

import AppComponent from '@/app.component';
import HomeComponent from '@/components/home/home.component';
import AboutComponent from '@/components/about/about.component';
import NotFoundComponent from '@/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
