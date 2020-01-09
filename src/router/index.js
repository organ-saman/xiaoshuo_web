import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/views/homepage/index'

Vue.use(Router)

// const _import = require('./_import_' + process.env.NODE_ENV)

export default new Router({
  routes: [
    {
      path: '/',
      component: homepage,
    },
    {
      path: '/login',
      // component: _import('login')
      component: resolve => require(['@/views/login'], resolve)
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

// import dynamicRouter from "@/router/dynamicRouter.js";
// import { getToken } from '@/utils/store.js';
// import Vue from 'vue';
// import Router from 'vue-router';
// import { getRouter } from "@/api/menu.js";
//
// Vue.use(Router)
/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
//
// const router = new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'login',
//       component: () => import('@/views/Login.vue')
//     }
//   ]
// });
// /**
//  * 避免循环执行
//  */
// let newRoutes = null;
// router.beforeEach((to, from, next) => {
//   // 判断是否是登录界面
//   if (to.path != '/') {
//     // 从获取store中Token
//     if (getToken()) {
//       // 刷新动态路由丢失
//       if (!newRoutes) {
//         // 调用API获取动态路由
//         getRouter().then(res => {
//           res.data.data.forEach(element => {
//             // 重要：赋值给变量
//             let value = element.component;
//             element.component = function component(resolve) {
//               require(["@/views" + value], resolve);
//             };
//           });
//           dynamicRouter.routes[0].children = res.data.data;
//           newRoutes = dynamicRouter.routes;
//           // 添加路由数据
//           router.addRoutes(newRoutes);
//           next({ ...to, replace: true });
//         });
//       } else {
//         next()
//       }
//     }else{
//       next("/");
//     }
//   } else {
//     // 如果是登录界面放行
//     next();
//   }
// });
//
// export default router;
