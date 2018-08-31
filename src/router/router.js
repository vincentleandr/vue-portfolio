import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Work from '../pages/Work.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})