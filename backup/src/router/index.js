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
import five from '../components/change/five'
import axios from '../../node_modules/axios/dist/axios'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/register',
      name: 'register',
      component: register
    }, {
      path: '/index',
      name: 'index',
      component: index,
      beforeEnter(to, from, next) {
        if (to.path == "/index") {
          let token = localStorage.getItem("token")
          axios({
            url: "http://127.0.0.1:3000/check",
            method: "get",
            params: {
              token: token
            }
          }).then(ok => {
            console.log(ok.data)
            if (ok.data.loginOk) {
              alert("欢迎你" + ok.data.username)
              next()
            } else {
              alert("请你先登录在进行操作")
              next("/login")
            }
          })
        }
      }

    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: broadcast
    },
    {
      path: '/change',
      name: 'change',
      component: change
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/moviedetail',
      name: 'movieDetail',
      component: movieDetail
    },
    {
      path: '/indexdetail',
      name: 'indexDetail',
      component: indexDetail
    },
    {
      path: '/five',
      name: 'five',
      component: five
    }
  ]
})
