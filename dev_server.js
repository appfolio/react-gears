'use strict';

const express = require('express');
const app = new express();
const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');

app.use(express.static(path.resolve(__dirname, 'public')));

// Dev middleware:

const webpack = require('webpack');
const config = require('./webpack.dev.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(config);
compiler.apply(new DashboardPlugin());
app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath, quiet: true }));
app.use(webpackHotMiddleware(compiler, { log: () => {} }));

const port = 8080 || process.env.port;
app.listen(port, () => console.log(`Listening on ${port}`));
