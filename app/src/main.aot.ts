import '@/polyfills';

import '~/styles/main';

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from '../aot/app/src/app.module.ngfactory';

enableProdMode();

platformBrowser()
  .bootstrapModuleFactory(AppModuleNgFactory)
  .then(_ => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js');
    }
  });
