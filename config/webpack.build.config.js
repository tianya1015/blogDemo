//production
const webpack = require('webpack');
const config = require('./webpack.base.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

config.devtool = '#source-map'
config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
])

module.exports = config;
