import Vue from 'vue'
import Router from 'vue-router'
import List from './components/List'
import Main from './views/Main'
import Home from './views/Home'
import Book from './views/BookView'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/book',
      name: 'book',
      component: Book,

    },
    {
      path: '/',
      name: 'Main',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Main
    },
    {
      path: '/home',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Home
    }
  ]
})
