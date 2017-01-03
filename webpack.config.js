const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  //多文件入口
  entry: {
    main: './app/admin/main.js',
    build:'./app/client/main.js'
  },
  output:{
    path: path.resolve(__dirname, './public'),//编译后输出的位置
    publicPath:'/public/',//页面引用路径
    filename: '[name].min.js'//编译后文件名
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module:{
    loaders:[
      {test: /\.vue$/,loader: 'vue'},
      {test: /\.js$/,loader: 'babel',exclude: /node_modules/},
      {test: /\.scss$/,loader: ExtractTextPlugin.extract('style', 'css!sass!autoprefixer')},
      {test: /\.css$/,loader: ExtractTextPlugin.extract('style', 'css!sass!autoprefixer')},
      {test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,loader: "file"},
      {test: /\.(png|jpg|gif|svg)$/,loader: 'file',query: {name: '[name].[ext]?[hash]'}}
    ]
  },
  vue:{
      css: ExtractTextPlugin.extract("css"),
      sass: ExtractTextPlugin.extract("css!sass-loader")
  },
  resolve:{
    extensions: ['', '.js', '.vue'],
    alias: {vue: 'vue/dist/vue.js'}
  },
  devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      grogress: true
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new CopyWebpackPlugin([
      {from: './app/assets/images', to: './'}
    ])
  ],
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
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
}
