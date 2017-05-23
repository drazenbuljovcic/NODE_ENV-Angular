import 'core-js';
import 'zone.js/dist/zone';
import 'reflect-metadata';

import './styles/main';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './src/app.module';

declare var module: any;
if (module.hot) {
  module.hot.accept();
}

declare var env: String;
if (env === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
