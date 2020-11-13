const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBase = require('./webpack.base');

const port = 4000;

const webpackConfig = merge(webpackBase, {
  entry: path.join(__dirname, '../app/main.js'),
  output: {
    path: path.join(__dirname, '../wt-component'),
    filename: 'index.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: '../dist',
    port,
    hot: true,
    stats: 'errors-only',
    historyApiFallback: true
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserWebpackPlugin({ url: `http://localhost:${port}` }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../app/index.html'),
      favicon: './bighead.ico',
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
