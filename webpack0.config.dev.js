const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

console.log('sss');

module.exports = {
  devtool: 'eval-source-map',
  //多文件入口
  entry: {
    main: './app/admin/main.js',
    build:'./app/client/main.js'
  },
  output:{
    path: path.resolve(__dirname, './public/js'),//编译后输出的位置
    publicPath:'/assets/',//页面引用路径
    filename: '[name].min.js'//编译后文件名
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module:{
    // loaders:[
    //   {test: /\.vue$/,loader: 'vue'},
    //   {test: /\.js$/,loader: 'babel',exclude: /node_modules/},
    //   {test: /\.css$/,loader: "style!css"},
    //   {test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,loader: "file"},
    //   {test: /\.(png|jpg|gif|svg)$/,loader: 'file',query: {name: '[name].[ext]?[hash]'}}
    // ]
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue',
        options: {
          loaders: {
            sass: ExtractTextPlugin.extract({
              loader: 'css!sass!',
              fallbackLoader: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  resolve:{
    extensions: ['', '.js', '.vue'],
    alias: {vue: 'vue/dist/vue.js'}
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    hot: true,
    proxy: {
      '/': {
        target: 'http://localhost:3100/'
      }
    }
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    // new CopyWebpackPlugin([
    //   {from: './src/assets/img', to: './'}
    // ])
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
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
