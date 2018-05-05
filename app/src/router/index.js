import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from "@/components/homePage/HomePage"
<<<<<<< HEAD
=======

>>>>>>> 6a7c97e32ffc4f3e5417e25cda1e4cced7e98a54
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
<<<<<<< HEAD
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
=======
    },{
      path:"/home",
      name:"HomePage",
      component:HomePage
>>>>>>> 6a7c97e32ffc4f3e5417e25cda1e4cced7e98a54
    }
  ]
})
