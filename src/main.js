import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import store from './store'

import VueVideoPlayer from "vue-video-player"
import 'video.js/dist/video-js.css'

// 导入下载好的路由模块
import Router from "vue-router"
import $ from "jquery"

// 导入路由配置的脚本文件
import RouterConfig from "./router.config.js"


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
 
// vant组件
Vue.use(Vant)

// 使用路由
Vue.use(Router)

Vue.use(VueVideoPlayer, 
  /* 
    {
      options: 全局默认配置,
      events: 全局videojs事件
    } 
  */
)

// 关联路由和路由配置文件
const router = new Router(RouterConfig)

new Vue({
  el: '#app',
  // 挂载路由
  router,
  store,
  render: h => h(App)
})
