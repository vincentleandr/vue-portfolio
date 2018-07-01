import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import VueMouseParallax from 'vue-mouse-parallax'

import 'normalize.css'
import './styles/main.scss'

Vue.use(VueMouseParallax)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
