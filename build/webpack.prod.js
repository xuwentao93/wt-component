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
    index: path.join(__dirname, '../app/component/index.js')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: './js/[name].js',
    library: 'wtComponent',
    libraryTarget: 'umd', // 支持 import, require, script 标签等方式引入.
    libraryExport: 'default' // 不设置要 xxx.default 的方式引入.
  },
  externals: { // 外部引入 react, 防止版本不同使用 hooks 报错.
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    }
  },
  stats: 'errors-only',
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
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
