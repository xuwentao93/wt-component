const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBase = require('./webpack.base');

const webpackConfig = merge(webpackBase, {
  entry: path.join(__dirname, '../app/main.js'),
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'index.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: '../dist',
    port: 4000,
    hot: true,
    stats: 'errors-only',
    historyApiFallback: true
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserWebpackPlugin({ url: 'http://localhost:4000' }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../app/index.html'),
      filename: 'index.html',
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    })
  ]
});

module.exports = webpackConfig;
