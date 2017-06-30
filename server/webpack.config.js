'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    path.join(__dirname, 'server.js')
  ],
  output: {
    path: path.join(__dirname, '../dist_server/'),
    filename: 'prod_server.js',
    publicPath: '/'
  }
};