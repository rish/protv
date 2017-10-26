import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
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
      path: '/channel/:name',
      name: 'Channel',
      component: Channel
    }
  ]
})
