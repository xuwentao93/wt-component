const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const merge = require('webpack-merge');
const webpackBase = require('./webpack.base.js');

const webpackConfig = merge(webpackBase, {
  entry: {
    'index': path.join(__dirname, '../app/main.js')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: './js/[name].js',
    library: 'wtComponent',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  stats: 'errors-only',
  // mode: 'production',
  mode: 'none',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        parallel: true
      })
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano
    }),
    new CleanWebpackPlugin(),
    new SpeedMeasureWebpackPlugin()
  ]
});

module.exports = webpackConfig;
