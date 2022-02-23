import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/starships',
    name: 'Starships',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "starships" */ '../views/ListStartShip.vue')
  },
  {
    path: '/video',
    name: 'Video',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "video" */ '../views/Video.vue')
  }
  ,
 {
   path: '/detailship/:id',
   name: 'DetailShip',
  component: () => import(/* webpackChunkName: "detailship" */ '../views/DetailShip.vue'),
  props:true
  },
  {
    path: '/listStartShip',
    name: 'ListStartShip',
   component: () => import(/* webpackChunkName: "detailship" */ '../views/ListStartShip.vue'),
   props:true
  },
  {
    path: '/login',
    name: 'Login',
   component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
   props:true
   },
   {
     path: '/register',
     name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    props:true
    }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
