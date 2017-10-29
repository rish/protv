import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Show from '@/components/Show'
import ShowExtended from '@/components/ShowExtended'
import Channel from '@/components/Channel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/show/:name',
      name: 'Show',
      component: Show
    },
    {
      path: '/show-extended/:name',
      name: 'ShowExtended',
      component: ShowExtended
    },
    {
      path: '/channel',
      name: 'Channel',
      component: Channel
    }
  ]
})
