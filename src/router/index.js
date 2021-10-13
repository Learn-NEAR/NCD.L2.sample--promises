import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/store.js'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/create',
    name: 'Create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreatePromise.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
})

router.beforeEach((to,from) => {
  if (store.state.accountId&&(to.path==="/"&&from.path==="/")) {
    router.push('/dashboard')
  }
})

router.afterEach((to,from)  => {
  if ( (from.path==="/create"||from.path==="/dashboard") && to.path==="/") {
    window.location.reload()
  }
})

export default router 
