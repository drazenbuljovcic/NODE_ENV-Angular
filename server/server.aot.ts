import 'zone.js/dist/zone-node';

import * as path from 'path';
import * as express from 'express';

import { enableProdMode } from '@angular/core';

import { AppServerModuleNgFactory } from './aot/server/server.module.ngfactory';
import { ngUniversalEngine } from './universal.engine';

enableProdMode();

const server = express();
// set our angular engine as the handler for html files, so it will be used to render them.
server.engine('html', ngUniversalEngine({
    bootstrap: [ AppServerModuleNgFactory ]
}));
// set default view directory
server.set('views', '.');
server.set(express.static('.'));
// handle requests for routes in the app.  ngExpressEngine does the rendering.
server.get('*', (req, res) => {
    res.render('index.html', {req});
});

// handle requests for static files
server.get(['/*.js', '/*.css'], (req, res, next) => {
    let fileName: string = req.originalUrl;
    console.log(fileName);
    let root = fileName.startsWith('/node_modules/') ? '.' : 'dist';
    res.sendFile(fileName, { root: root }, function (err) {
        if (err) {
            next(err);
        }
    });
});
// start the server
server.listen(3000, () => {
    console.log('listening on port 3000...');
});
