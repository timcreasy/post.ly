const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: 'eval',
  entry: './front_end/client.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
   module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};