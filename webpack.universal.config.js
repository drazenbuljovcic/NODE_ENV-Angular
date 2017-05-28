const webpack = require('webpack'),
  path = require('path'),
  ngtools = require('@ngtools/webpack'),
  webpackHtml = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
      main: [
        path.resolve(__dirname, 'server', 'server.module.ts'),
        path.resolve(__dirname, 'server', 'server.aot.ts')
      ]
    },
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        '~': path.resolve(__dirname, 'app'),
        '@': path.resolve(__dirname, 'app', 'src'),
      }
    },
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },
    plugins: [
        new ngtools.AotPlugin({
            tsConfigPath: './tsconfig.uni.json'
        }),
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
    ],
    module: {
        rules: [
            { test: /\.css$/, loader: 'raw-loader' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.ts$/, loader: '@ngtools/webpack' },
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
            }
        ]
    }
}
