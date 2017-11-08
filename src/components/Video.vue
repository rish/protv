<template>
<div id="video">

  <div class="container">
    <div class="backdrop-container">
      <div class="media-player-container">
        <MediaPlayer
        :items="items"
        :related-count=11
        :tags="tags"
        showSponsored="false"
        :extended="true"
        />
      </div>
    </div>
  </div>

  <div class="container">
    <Banner type="horizontal" padding="50"/>
  </div>

  <div class="container" v-if="home.length">
    <ProCarousel title="Top Viewed" :items="home[3].items" id="top-viewed" :grid="home[3].grid" meta="true" synopsis="true"/>

    <ProCarousel title="Related" :items="home[3].items" id="related" :grid="home[3].grid" meta="true" synopsis="true"/>
  </div>

  <div class="container">
    <Banner type="horizontal" padding="50"/>
  </div>

  <div class="fluid-container"
    :style="{'background-image': 'url(' + require('../assets/bg2.jpg') + ')'}"
    >
    <div class="container" v-if="home.length">
      <ProCarousel title="Recommended For You" :items="home[6].items" id="recommended" :grid="home[6].grid" meta="true" synopsis="true" fullWidth="true" />
    </div>
  </div>

</div>
</template>
<script>
import Home from './Home'
import ShowHeader from './ShowHeader'
import MediaPlayer from './MediaPlayer'
import Banner from './Banner'
import ProCarousel from '@/components/ProCarousel'
import Articles from '@/components/Articles'

export default {
/* global axios */

  name: 'Video',
  components: {
    ShowHeader,
    MediaPlayer,
    Home,
    Banner,
    ProCarousel,
    Articles
  },
  data () {
    return {
      content: {},
      items: [],
      head: {},
      header: {},
      video: {},
      tags: [
        'Genre',
        'Ap..Violence',
        'Country of Pro.',
        'Available in..',
        'Available for..'
      ],
      home: []
    }
  },
  mounted () {
    this.getData()
  },
  watch: {
    '$route' (to, from) {
      this.getData()
      window.scrollTo(0, 0)
    }
  },
  methods: {
    getData () {
      console.log(this)
      const url = 'http://protv.vidnt.com/itempage/video/' + this.$route.params.id + '/'
      const home = 'http://protv.vidnt.com/page/home/'

      // Get show context
      axios.get(url).then((response) => {
        console.log('Video', JSON.parse(JSON.stringify(response.data)))
        this.content = response.data.content.areas[0]
        this.items = this.content.items
        // console.log('Show content', this.content)
        this.head = response.data.head
        this.video = this.content.items[0]

        this.getContext()
      })

      // Get home context
      axios.get(home).then((response) => {
        console.log('Phone home', response)
        this.home = response.data.content.areas
      })
    },
    getContext () {
      const url = 'http://protv.vidnt.com' + this.head.context
      axios.get(url).then((response) => {
        // console.log('Context response', response)
        this.header = response.data
        // console.log('HEADER', this)
      })
    },
    doubleUp (arr) {
      arr = arr.push(arr)
      return arr
    }
  }
}
</script>
<style scoped>
#video {
  padding-top: 20px;
}

#video > .container {
  margin-bottom: 10px;
  width: 1238px;
  padding: 0;
}

.backdrop-container {
  background: url('../assets/temp/banners-backdrop.jpg') no-repeat;
  background-size: contain;
  width: 1240px;
  height: 800px;
}

#related {
  height: 500px;
  background: white;
  color: black;
  overflow-y: scroll;
  padding-bottom: 30px;
}

.media-player-container {
  margin-top: -20px;
  padding-top: 150px;
}

.fluid-container {
  margin-bottom: 30px;
}
</style>
