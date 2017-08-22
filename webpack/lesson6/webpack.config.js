const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader', 'less-loader'],
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          // presets: ['env'],
          // plugins: [
          //   ['transform-runtime', {
          //     helpers: true,
          //     polyfill: true,
          //     regenerator: true,
          //     moduleName: 'babel-runtime',
          //   }]
          // ],
          cacheDirectory: true,
        }
      }
    }],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ title: 'HELLO WEBPACK' }),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8080,
    disableHostCheck: true,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map', // eval inline-source-map cheap-eval-source-map
};
