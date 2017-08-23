const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

console.log(`###${process.env.NODE_ENV}###`);

module.exports = function(env, argv) {

  // env = env || process.env.NODE_ENV;

  // 插件
  let plugins = [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ title: 'HELLO WEBPACK' }),
  ];

  if (env == 'production') {
    plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': "'production'" }));
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: true },
      sourceMap: true,
    }));
  } else {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  // sourceMap
  let devtool = 'eval';

  if (env == 'production') {
    devtool = 'source-map';
  }

  return {
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
            cacheDirectory: true,
          }
        }
      }],
    },
    plugins: plugins,
    devServer: {
      contentBase: './dist',
      hot: true,
      port: 8080,
      disableHostCheck: true,
      historyApiFallback: true,
    },
    devtool: devtool,
  };

};
