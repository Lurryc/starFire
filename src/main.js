// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/js/jquery-1.11.3.js'
import './assets/js/bootstrap.js'
import './assets/css/font-awesome.css'
import './assets/css/bootstrap.css'
import './assets/css/animate.css'
import './assets/css/common.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
