import '@/polyfills';

import '~/styles/main';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

declare var module: any;
console.clear();
if (module.hot) {
  module.hot.accept();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(_ => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js');
    }
  });
