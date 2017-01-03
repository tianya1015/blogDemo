const app = require('koa')();
const mongoose = require('mongoose');
const path = require('path');
const static = require('koa-static');
const co = require('co');
const fs = require('fs');
const favicon = require('koa-favicon');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const config = require('../config/config');
const api = require('./api/index');

mongoose.Promise = global.Promise;
//全局时间格式
Date.prototype.format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1,                 //月份
    'd+': this.getDate(),                    //日
    'h+': this.getHours(),                   //小时
    'm+': this.getMinutes(),                 //分
    's+': this.getSeconds(),                 //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    'S': this.getMilliseconds()             //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
  return fmt;
}

co(function *(){
  mongoose.connect(config.mongoConfig.url);

  //错误控制
  app.use(function *(next) {
    try {
      yield next;
    } catch (err) {
      this.status = err.status || 500;
      this.body = err.message;
      //this.app.emit('error', err, this);
    }
  });

  app.use(bodyParser());
  app.use(static(path.join(__dirname,'../')));
  yield api(router);
  app.use(router.routes());

  //中间件 - 分离前后台
  app.use(function* index(){
    const path = this.path,
          isHtml = path.indexOf('.') > -1;
    let html = '';
    if(!isHtml){
      if(path === '/admin'){
          html = fs.readFileSync('admin.html', 'utf-8');
      }else{
         html = fs.readFileSync('index.html', 'utf-8');
      }
      this.body = html;
    }
  });

  app.listen(config.port ,()=>{
    console.log('server start http://localhost:' + config.port)
  });

}).catch(function(err){

});
