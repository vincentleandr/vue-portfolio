import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css'
import './styles/main.scss'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
