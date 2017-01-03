const Article = require('../models/articles.js');

module.exports.init = router => {
  //获取文章列表
  router.get('/api/articles',getArticles);
  //获取文章详情
  router.get('/api/article/:id',articleDateil);
  //添加文章
  router.post('/api/article',articleSave);
  //修改文章
  router.put('/api/article/:id',articlePut);
  //删除文章
  router.del('/api/article/:id',articleDel);
}

//获取文章列表
function* getArticles(next){
  const tag = this.query.tag;
  let info = tag == undefined ? 'all' : tag,
      data = {};

  let articleList = yield Article.find({tag:info})
                    .select('title createTime lastEditTime')
                    .sort({ createTime: -1})
                    .exec().catch(err => {
                        data.status = 500;
                        data.message = '内部错误';
                    });


  data.status = 200;
  data.data = articleList;
  this.body = data;
}
//获取文章详情
function* articleDateil(next){
  const id = this.params.id;

  let dateil = yield Article.findOne({_id:id})
    .select('title visits tags createTime lastEditTime excerpt content')
    .exec().catch(err => {
      utils.logger.error(err);
      this.throw(500,'内部错误')
    });
}
//添加文章
function* articleSave(){}
//修改文章
function* articlePut(){}
//删除文章
function* articleDel(){}
