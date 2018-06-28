import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import videoOne from '@/pages/videoOne'

Vue.use(Router)
export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '',
      redirect: {name: 'index'}
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/videoOne',
      name: 'videoOne',
      component: videoOne
    }

  ]
})
