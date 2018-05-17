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
import QuestionDetail from "@/components/service/questionDetail/QuestionDetail"
import Download from "@/components/download/Download"
import Benefit from "@/components/benefit/Benefit"
import Coupon from  "@/components/coupon/Coupon"
import Detaill from "@/components/detail/Detaill"
import Info from "@/components/info/Info"
import Setusername from "@/components/setusername/Setusername"
import Address from  "@/components/address/Address"
import Add from  "@/components/add/Add"
import AddDetail from "@/components/addDetail/AddDetail"
import ConfirmOrder from "@/components/confirmOrder/ConfirmOrder"
import ChooseAddress from "@/components/chooseAddress/ChooseAddress"
import SearchAddress from "@/components/searchAddress/SearchAddress"
import Payment from "@/components/payment/Payment"
import  VipDescription from "@/components/vipDescription/VipDescription"
import UseCart from "@/components/useCart/UseCart"
import InvoiceRecord from "@/components/invoiceRecord/InvoiceRecord"
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
    ,
    {
      path:"/service/questionDetail",
      name:"QuestionDetail",
      component:QuestionDetail
    },
    {
      path:'/download',
      name:"Download",
      component:Download
    },
    {
      path:'/benefit',
      name:"Benefit",
      component:Benefit
    },
    {
      path:"/coupon",
      name:"Coupon",
      component:Coupon
    },
    {
      path:"/detaill",
      name:"Detaill",
      component:Detaill
    },
    {
      path:"/info",
      name:"Info",
      component:Info
    },
    {
      path:"/setusername",
      name:"Setusername",
      component:Setusername
    },
    {
      path:"/address",
      name:'Address',
      component:Address
    },
    {
      path:'/add',
      name:"Add",
      component:Add
    },
    {
      path:"/addDetail",
      name:"AddDetail",
      component:AddDetail
    },
    {
      path:"/confirmOrder",
      name:"ConfirmOrder",
      component:ConfirmOrder
    },
    {
      path:"/chooseAddress",
      name:"ChooseAddress",
      component:ChooseAddress
    },
    {
      path:"/searchAddress",
      name:"SearchAddress",
      component:SearchAddress
    },
    {
      path:"/payment",
      name:"Payment",
      component:Payment
    },
    {
      path:"/vipDescription",
      name:"VipDescription",
      component:VipDescription
    },
    {
      path:"/useCart",
      name:"UseCart",
      component:UseCart
    },
    {
      path:"/invoiceRecord",
      name:"InvoiceRecord",
      component:InvoiceRecord
    }

  ]
})
