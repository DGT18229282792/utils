import Vue from 'vue'
import Router from 'vue-router'
import store from './../store/index'
Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path:'/login',
      name:'login',
      component:resolve => require(['@/view/login'],resolve),      
    },
    {
      path: '/',
      name: 'nav',
      component: resolve =>require(['@/components/nav'],resolve),
      redirect: 'index'
    },
    {
      path:'/index',
      name:'index',
      component: resolve => require(['@/view/index'], resolve)
    },
    {
      path:'/second',
      name:'second',
      component: resolve => require(['@/view/second'], resolve)
    },
    {
      path:'/header',
      name:'header',
      component: resolve => require(['@/components/header'], resolve)
    },
    {
      path:'/test',
      name:'test',
      component: resolve => require(['@/view/testRem'],resolve)
    },
    {
      path:'/test2',
      name:'test2',
      component: resolve => require(['@/view/testRem2'],resolve)
    },
    {
      path:'/message',
      name:'message',
      component: resolve => require(['@/view/testMessage'],resolve)
    }
  ]
})
export default router

