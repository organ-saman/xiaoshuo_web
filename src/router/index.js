import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/views/homepage/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    }
  ]
})

/*
export const asyncRouterMap = [
  {
    path: '/login',
    name: '登录',
    component: _import('/login'),
    meta: {title: '登录', icon: 'example'},
    menu: 'login'
  }
]
*/
