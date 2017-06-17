import 'zone.js/dist/zone-node';
import '~/styles/main';

import * as fs from 'fs';
import * as path from 'path';
import * as express from 'express';
import * as compression from 'compression';

import { enableProdMode } from '@angular/core';

import { AppServerModuleNgFactory } from './aot/server/server.module.ngfactory';
import { renderModuleFactory } from '@angular/platform-server';

enableProdMode();

declare var $dirname: string;

const server = express();
server.use(compression());


let template = fs.readFileSync(path.join($dirname, 'index.html')).toString();
server.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

// set our angular engine as the handler for html files, so it will be used to render them.
server.set('view engine', 'html');
// set default view directory

// handle requests for static files
server.get('*.*', express.static(path.resolve($dirname)));
// handle requests for routes in the app.  ngExpressEngine does the rendering.
server.get('**', (req, res) => {
    res.render(path.join($dirname, 'index.html'), {
      req,
      res
    });
});

// start the server
server.listen(3000, () => {
    console.log('listening on port 3000...');
});
