import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from "@/components/homePage/HomePage"
import  City from "@/components/city/City"
import Search from "@/components/search/Search"
import Order from "@/components/order/Order"
import Profile from "@/components/profile/Profile"
import Balance from  "@/components/balance/Balance"
import Detail from "@/components/balance/detail/Detail"
import Points from "@/components/points/Points"
import Vipcard from "@/components/vipcard/Vipcard"
import AutoLogin from "@/components/autoLogin/AutoLogin"
import Service from "@/components/service/Service"

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
      path:"/search",
      name:"Search",
      component:Search
    },
    {
      path:"/order",
      name:"Order",
      component:Order
    },
    {
      path:"/profile",
      name:"Profile",
      component:Profile
    },
    {
      path:"/balance",
      name:"Balance",
      component:Balance
    },
    {
      path:"/balance/detail",
      name:"Detail",
      component:Detail
    },
    {
      path:"/points",
      name:"Points",
      component:Points
    },
    {
      path:"/vipcard",
      name:"Vipcard",
      component:Vipcard
    },
    {
      path:"/autoLogin",
      name:"AutoLogin",
      component:AutoLogin
    },
    {
      path:"/service",
      name:"Service",
      component:Service
    }
  ]
})
