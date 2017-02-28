import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/MainPage/MainPage.vue'
import LaterNews from '../components/LaterNews/LaterNews.vue'
import User from '../components/User/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/main',
      name:'main',
      component:MainPage
    },
    {
      path:'/later',
      name:'later',
      component:LaterNews
    },
    {
      path:'/user',
      name:'user',
      component:User
    },
    {
      path:'*',
      redirect:'/main'
    }
  ]
})
