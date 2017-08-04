import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/about',
    	name: 'About',
    	component: About
    },

    // dynamic route matching
    {
    	path: '/user/:id',
    	name: 'User',
    	component: User
    }
  ]
})
