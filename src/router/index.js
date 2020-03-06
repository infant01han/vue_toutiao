import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Profile from '@/pages/Profile'
import PostDetail from '@/pages/PostDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'homePage',
      component: Home
    },
    {
      path: '/postDetail/:id',
      name: 'postDetailPage',
      component: PostDetail
    },
    {
      path: '/register',
      name: 'registerPage',
      component: Register
    },
    {
      path: '/login',
      name: 'loginPage',
      component: Login
    },
    {
      path: '/search',
      name: 'searchPage',
      component: Search
    },
    {
      path: '/profile',
      name: 'profilePage',
      component: Profile
    }
  ]
})


