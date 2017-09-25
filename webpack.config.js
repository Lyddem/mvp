const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/app.js`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
     {
     test: /\.jsx$/,
     loader: 'babel-loader',
     exclude: /node_modules/,
     query: {
      presets:['es2015', 'react'] }

     }
    ]
  },
};