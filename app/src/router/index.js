import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import land from "@/components/land/land"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/land',
      name: 'land',
      component: land
    }
  ]
})





