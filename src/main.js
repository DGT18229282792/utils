// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueResource from "vue-resource"
import axios from 'axios'
import bus from '@/components/messageBus'
import '@/utils/自定义指令/index'
// import './utils/rem'
Vue.config.productionTip = false
Vue.use(vueResource)
Vue.prototype.$bus = bus
Vue.prototype.$httpAxios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
