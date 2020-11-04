const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
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
    port: 6666,
    hot: true,
    stats: 'errors-only',
    historyApiFallback: true
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserWebpackPlugin({ url: 'http://localhost:6666' })
  ]
})

module.exports = webpackConfig;
