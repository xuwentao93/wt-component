const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../app/')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          // {
          //   loader: 'thread-loader',
          //   options: {
          //     workers: 3
          //   }
          // },
          'babel-loader'
          // 'eslint-loader'
        ],
        exclude: path.join(__dirname, '../node_modules')
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          'ts-loader'
        ],
        exclude: path.join(__dirname, '../node_modules')
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: './[name]/index.css'
      filename: './index.css'
    }),
    new FriendlyErrorsWebpackPlugin(),
    new HardSourceWebpackPlugin()
  ]
};
