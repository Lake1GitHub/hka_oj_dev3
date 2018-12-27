
'use strict';

const env = process.argv[1];
const path = require('path');

let baseConfig = require('./webpack.base.config.js');

module.exports = Object.assign({
  mode: 'development',
  devServer:{
    host: 'localhost',
    port: '9080',
    hot: true,
  }
}, baseConfig);