import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import HomeContainer from '@/views/HomeContainer'
import Show from '@/components/Show'
import Video from '@/components/Video'
import Channel from '@/components/Channel'
import Episodes from '@/components/Episodes'
import ShowPanel from '@/components/ShowPanel'
import ShowNews from '@/components/ShowNews'
import Search from '@/components/Search'
// import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeContainer
    },
    {
      path: '/show/:name',
      name: 'Show',
      component: Show
    },
    {
      path: '/video/:id',
      name: 'Video',
      component: Video
    },
    {
      path: '/channel',
      name: 'Channel',
      component: Channel
    },
    {
      path: '/show/:name/episodes',
      name: 'Episodes',
      component: Episodes
    },
    {
      path: '/show/:name/panel',
      name: 'ShowPanel',
      component: ShowPanel
    },
    {
      path: '/show/:name/news',
      name: 'ShowNews',
      component: ShowNews
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: ShowNews
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
