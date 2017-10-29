import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Show from '@/components/Show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Show/:name',
      name: 'Show',
      component: Show
    }
  ]
})
