import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../views/MSite'
// 声明使用路由插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/msite',
    component: MSite
  },
  {
    path: '/order',
    component: () => import('../views/Order')
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/search',
    component: () => import('../views/Search')
  }, {
    path: '/personal',
    component: () => import('../views/Personal')
  }, {
    path: '/',
    redirect: '/msite'
  }
]

const router = new VueRouter({
  routes
})

export default router
