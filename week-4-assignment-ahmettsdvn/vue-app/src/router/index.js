import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorites/:userId',
    name: 'Favorites',
    component: () => import('../components/Favorites/Favorite.vue'),
 
  },
  {
    path: '/watch',
    name: 'Video',
    component: () => import('../components/Video/Video.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
