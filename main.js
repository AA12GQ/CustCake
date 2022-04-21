import App from './App'
import store from './store/index.js'
// #ifndef VUE3
import Vue from 'vue'
import uView from "uview-ui";
Vue.use(uView);
Vue.config.productionTip = false

import NavCustom from 'components/nav-custom.vue'
Vue.component('nav-custom',NavCustom)
import HomeTitle from 'components/home-title.vue'
Vue.component('home-title',HomeTitle)
import GoodItem from 'components/good-item.vue'
Vue.component('good-item',GoodItem)
import TabCustom from 'components/tab-custom.vue'
Vue.component('tab-custom',TabCustom)

// 原型挂载异步请求方法
// import {$http,$get,$post} from 'utils/request.js'
// Vue.prototype.$http = $http
// Vue.prototype.$get = $get
// Vue.prototype.$post = $post
import * as request from 'utils/request.js'
for(let key in request) {
	Vue.prototype[key]  = request[key]
}
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif