const webpack = require('webpack'),
  path = require('path'),
  autoprefixer = require('autoprefixer'),
  friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
  webpackClean = require('clean-webpack-plugin'),
  webpackHtml = require('html-webpack-plugin'),
  webpackExtract = require('extract-text-webpack-plugin');

const DEV = process.env.NODE_ENV === "development" ? true : false;
const TESTING = process.env.NODE_ENV === "testing_unit" ? true : false;
const BUILD = !!process.env.BUILD;

console.log('Build: ', BUILD);
console.log('Environment: ', process.env.NODE_ENV);

module.exports = {
  entry: {
    'app': path.resolve(__dirname, 'app', 'src', 'main.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name][hash:6].bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.html', '.pug', '.css', '.sass', '.scss', '.ico' ],
    modules: [ 'node_modules' ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 3000,
    contentBase: path.resolve(__dirname + '/dist')
  },
  devtool: 'source-map',
  plugins: [
    new webpackClean('dist'),
    new webpackHtml({
      template: path.resolve(__dirname, 'app', 'index.html')
    }),

    new webpackExtract({
      filename: 'css/app[hash:6].bundle.css',
      disable: DEV && !BUILD
    }),

    new webpack.DefinePlugin({
      'env': JSON.stringify(process.env.NODE_ENV || '')
    }),

    new webpack.optimize.CommonsChunkPlugin({
      filename: 'js/[name][hash:6].bundle.js',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),

    new friendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.html/,
        use: [
          {
            loader: 'raw-loader'
          },
          // {
          //   loader: 'html-loader',
          //   options: {
          //     interpolate: true
          //   }
          // },
        ]
      },
      {
        test: /\.pug/,
        use: 'pug-loader'
      },
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFileName: TESTING ? 'tsconfig.spec.json' : 'tsconfig.app.json'
          }
        }],
      },
      {
        test: /\.tsx?/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'tslint-loader',
        options: {
          configFile: 'tslint.json',
        },
      },
      {
        test: /\.(sass|scss)/,
        exclude: /node_modules/,
        use: DEV && !BUILD ?
          [ 'style-loader', 'css-loader?sourceMap', {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer()]
              }
            },
          'sass-loader?sourceMap&sourceComments' ]
        :
          webpackExtract.extract({
            use: ['css-loader', {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer()]
              }
            }, 'sass-loader']
          })
      },

      {
        test: /\.(png|gif|jpe?g|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: '[name][hash:6].[ext]',
              outputPath: 'images/'
            },
          },
          { loader: 'image-webpack-loader' }
        ]
      },

      //favicon loader
      {
        test: /favicon\.ico$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1,
              name: '[name].[ext]',
            },
          }
        ]
      },
    ]
  }
}
