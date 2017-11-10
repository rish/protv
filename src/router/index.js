import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import HomeContainer from '@/views/HomeContainer'
import PageContainer from '@/views/PageContainer'
import ShowContainer from '@/views/ShowContainer'
import VideoContainer from '@/views/VideoContainer'
import ChannelContainer from '@/views/ChannelContainer'
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
      path: '/page/:name',
      name: 'Page',
      component: PageContainer
    },
    {
      path: '/show/:name',
      name: 'Show',
      component: ShowContainer
    },
    {
      path: '/video/:id',
      name: 'Video',
      component: VideoContainer
    },
    {
      path: '/itempage/video/:id',
      name: 'Video',
      component: VideoContainer
    },
    {
      path: '/channel',
      name: 'Channel',
      component: ChannelContainer
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
