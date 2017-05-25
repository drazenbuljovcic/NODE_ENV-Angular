import '@/polyfills';

import '~/styles/main';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import { config } from './config';

declare var module: any;

console.clear();
if (module.hot) {
  module.hot.accept();
}

if (config.env === 'production') {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(_ => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js');
    }
  });
