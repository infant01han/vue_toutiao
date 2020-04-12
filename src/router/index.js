import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Profile from '@/pages/Profile'
import PostDetail from '@/pages/PostDetail'
import MoreComments from '@/pages/MoreComments'
import MyFollow from '@/pages/MyFollow'
const EditProfile = () => import('@/pages/EditProfile');
const MyComments = () => import('@/pages/MyComments');
const MyCollections = () => import('@/pages/MyCollections');
const tabManager = () => import('@/pages/tabManager');
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
      path: '/moreComments/:id',
      name: 'moreComments',
      component: MoreComments
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
    },
    {
      path: '/myFollow',
      name: 'myfollowPage',
      component: MyFollow
    },
    {
      path: '/editProfile',
      name: 'editProfile',
      component: EditProfile
    }, {
      path: '/myComments',
      name: 'myCommentsPage',
      component: MyComments
    }, {
      path: '/myCollections',
      name: 'myCollections',
      component: MyCollections
    },
    {
      path: '/tabManager',
      name: 'tabManagerPage',
      component: tabManager
    }
  ]
})


