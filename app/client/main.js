import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

//引入vuex
import store from './store'
//引入路由配置
import router from './router'

//引入样式
import '../assets/css/base.scss'
import '../assets/css/style.scss'

//引组件
import MyCanvas from './components/canvas.vue'
import MyHeader from './components/header.vue'
import MyNav from './components/nav.vue'
import MyFooter from './components/footer.vue'


Vue.use(VueResource)

new Vue({
  router,
  store,
  components: {MyCanvas,MyHeader,MyNav,MyFooter}
}).$mount('#blog');
