import Vue from 'vue'
import App from './App.vue'

// 导入下载好的路由模块
import Router from "vue-router"
import $ from "jquery"

// 导入路由配置的脚本文件
import RouterConfig from "./router.config.js"


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
 

// 使用路由
Vue.use(Router)

// 关联路由和路由配置文件
const router = new Router(RouterConfig)

new Vue({
  el: '#app',
  // 挂载路由
  router,
  render: h => h(App)
})
