import Vue from 'vue'
import Router from 'vue-router'
import register from '../pages/register'
import index from '../pages/index'
import login from '../pages/login'
import book from '../pages/book'
import broadcast from '../pages/broadcast'
import change from '../pages/change'
import group from '../pages/group'
import movie from '../pages/movie'
import movieDetail from '../pages/movieDetail'
import indexDetail from '../pages/indexDetail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/register',
    name: 'register',
    component: register
  }, {
    path: '/index',
    name: 'index',
    component: index
  }, {
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/book',
    name: 'book',
    component: book
  }, {
    path: '/broadcast',
    name: 'broadcast',
    component: broadcast
  }, {
    path: '/change',
    name: 'change',
    component: change
  }, {
    path: '/group',
    name: 'group',
    component: group
  }, {
    path: '/movie',
    name: 'movie',
    component: movie
  }, {
    path: '/moviedetail',
    name: 'movieDetail',
    component: movieDetail
  }, {
    path: '/indexdetail',
    name: 'indexDetail',
    component: indexDetail
  }]
})
