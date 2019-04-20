import Vue from "vue";
import Router from "vue-router";

import Home from '../views/home/index.vue'

Vue.use(Router);

//其他路由配置
export const constantRouter = [{
  path: '/500',
  name: '500',
  component: () => import('@/views/error/500.vue'),
  hidden: true
}]

//界面路由配置
export const asyncRouter = [{
  path: "/",
  name: "home",
  component: Home
}]

//所有界面路由
export const routers = [
  ...constantRouter,
  ...asyncRouter
]

const routerConfig = {
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: routers
}

export default new Router(routerConfig)
