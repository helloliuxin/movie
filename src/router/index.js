import Vue from 'vue'
import VueRouter from 'vue-router'
import IsHit from '../views/IsHit.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'ishit',
        name: 'ishit',
        component: IsHit
      },
      {
        path: 'roulruiz',
        name: 'roulruiz',
        component: () => import('../views/RaoulRuiz.vue'),
      },
    ]
  },
  {
    path: '/moviedetails',
    name: 'moviedetails',
    props: true,
    component: () => import('../views/MovieDetails.vue')
  },
  {
    path: '/movievideo',
    name: 'movievideo',
    props:true,
    component: () => import('../views/MovieVideo.vue')
  },
  { 
    path: '*', 
    redirect: { name: 'ishit' }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
})

export default router
