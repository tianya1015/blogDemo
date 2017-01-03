const User = require('../models/user.js');
const md5 = require('md5');

module.exports.init = function* (router){
  yield send();
  router.get('/api/user/:id',getUser);
  router.put('/api/user',userPut);
}

//初始化管理员账户
function* send(){
  let user = yield User.find().exec().catch(err => {
    throw(new Error('数据seed失败,请debug后重新启动'));
  });

  if(user.length === 0){
    user = new User({
      name: 'admin',
      username: 'admin',
      password: md5('password').toUpperCase(),
      avatar:'',
      createTime: new Date()
    });

    yield user.save().catch(err => {
      throw(new Error('数据seed失败,请debug后重新启动'));
    });
  }
}

//获取管理员信息
function* getUser(next){
  const id = this.params.id;

  let user = yield User.find().exec().catch(err => {
    throw(new Error('数据seed失败,请debug后重新启动'));
  });
}

function* userPut(next){

}
