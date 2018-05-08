import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import land from "@/components/land/land"
import changePassword from '@/components/changePassword/changePassword'
import face from "@/components/face/face"
import effect from "@/components/effect/effect"


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
    },{
      path: '/changePassword',
      name: 'changePassword',
      component: changePassword
    },{
      path: '/face',
      name: 'face',
      component: face
    },{
      path: '/effect',
      name: 'effect',
      component: effect
    }
  ]
})





