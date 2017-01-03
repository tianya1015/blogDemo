import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import index from '../views/index'
import articles from '../views/articles'
import detail from '../views/detail'
import tags from '../views/tags'
import about from '../views/about'
import links from '../views/links'

export default new Router({
  mode: 'history',
  routes: [
    {name:'index',path:'/',component:index},//首页
    {name:'articles',path:'/articles',component:articles},//列表页
    {name:'detail',path:'/article/:id',component:detail},//详情页
    {name:'tags',path:'/tags',component:tags},//标签页
    {name:'about',path:'/about',component:about},//标签页
    {name:'links',path:'/links',component:links}//标签页
  ]
});
