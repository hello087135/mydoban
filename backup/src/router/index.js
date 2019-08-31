import Vue from 'vue'
import Router from 'vue-router'
import register from '../pages/register'
import index from '../pages/index'
import login from '../pages/login'

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
  }]
})
