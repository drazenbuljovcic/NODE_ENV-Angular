const webpack = require('webpack'),
  path = require('path'),
  webpackMerge = require('webpack-merge'),
  friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'),
  bundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const webpackCommon = require('./webpack.config.js');

const DEV = process.env.NODE_ENV === "development" ? true : false;
const TESTING = process.env.NODE_ENV === "testing_unit" ? true : false;
const BUILD = !!process.env.BUILD;

module.exports = webpackMerge(webpackCommon, {
  entry: {
    'app': path.resolve(__dirname, 'app', 'src', 'main.ts'),
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 3000,
    contentBase: path.resolve(__dirname + '/dist')
  },
  plugins: [
    new friendlyErrorsWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new bundleAnalyzerPlugin({
      analyzerMode: DEV && !BUILD ? 'server' : 'disabled',
      analyzerHost: '127.0.0.1',
      analyzerPort: 3001,
      openAnalyzer: false,
      generateStatsFile: false,
      statsFilename: 'stats.json',
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'tslint-loader',
        options: { configFile: 'tslint.json' },
        enforce: 'pre',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: TESTING ? 'tsconfig.spec.json' : 'tsconfig.app.json'
            }
          },
          { loader: 'angular2-template-loader' }, // needed for resolving templateUrl inside angular components
          { loader: 'angular-router-loader' } // needed for resolving lazy loaded children in app routing
        ]
      }
    ]
  }
})
