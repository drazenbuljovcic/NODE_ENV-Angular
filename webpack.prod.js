const webpack = require('webpack'),
  path = require('path'),
  webpackMerge = require('webpack-merge'),
  AotPlugin = require('@ngtools/webpack').AotPlugin;


const webpackCommon = require('./webpack.config.js');

const PROD = process.env.NODE_ENV === "production" ? true : false;
const BUILD = !!process.env.BUILD;

module.exports = webpackMerge(webpackCommon, {
  entry: {
    'app': path.resolve(__dirname, 'app', 'src', 'main.aot.ts'),
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new AotPlugin({
      tsConfigPath: './tsconfig.aot.json',
      entryModule: 'app/src/app.module#AppModule'
    })
  ],
  module: {
    rules: [
      { test: /\.tsx?/, loaders: ['@ngtools/webpack'] }
    ]
  }
})
