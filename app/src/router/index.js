import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from "@/components/homePage/HomePage"
import  City from "@/components/city/City"
import Msite from "@/components/msite/Msite"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld

    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage

    },
    {
      path:"/city",
      name:"City",
      component:City
    },
    {
      path:"/msite",
      name:"Msite",
      component:Msite
    }
  ]
})
