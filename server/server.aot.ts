import 'zone.js/dist/zone-node';
import '~/styles/main';

import * as path from 'path';
import * as express from 'express';

import { enableProdMode } from '@angular/core';

import { AppServerModuleNgFactory } from './aot/server/server.module.ngfactory';
import { ngUniversalEngine } from './universal.engine';

enableProdMode();

declare var $dirname: String;

const server = express();
// set our angular engine as the handler for html files, so it will be used to render them.
server.engine('html', ngUniversalEngine({
    bootstrap: [ AppServerModuleNgFactory ]
}));
console.log(path.resolve($dirname))
// set default view directory
server.set('view engine', 'html')
server.set('views', path.resolve($dirname));
server.set(express.static(path.resolve($dirname)));
// handle requests for routes in the app.  ngExpressEngine does the rendering.
server.get('**', (req, res) => {
    res.render('index.html', {req});
});

// start the server
server.listen(3000, () => {
    console.log('listening on port 3000...');
});
