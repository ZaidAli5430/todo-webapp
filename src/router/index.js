import Vue from 'vue'
import VueRouter from 'vue-router'
import mainboard from '../views/main-board'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'main-board',
    component: mainboard
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
