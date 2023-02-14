import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../pages/home/index.vue'
const defaultRouterList = [
  {
    path: '/',
    redirect: { name: 'home' },
  },
  {
    path: '/index',
    name: 'home',
    component: home,
    meta: { title: '主页' },
  },
]

const allRoutes = [...defaultRouterList]

const router = createRouter({
  history: createWebHashHistory(),
  routes: allRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        el: '#app',
        top: 0,
        behavior: 'smooth',
      }
    }
  },
})

export default router
