//development
const webpack = require('webpack');
const config = require('./webpack.base.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

config.devtool = 'source-map';

config.plugins = (config.plugins || []).concat([
  new ExtractTextPlugin("styles.css"),
  new CopyWebpackPlugin([
    {from: '../app/assets/images', to: './'}
  ])
]);

module.exports = config;
