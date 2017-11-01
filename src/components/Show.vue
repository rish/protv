<template>
  <div id="show">
    <div class="container">
      <ShowHeader v-if="header.hasOwnProperty('head')" :poster="header.head.poster"/>
      <div class="media-player-container">
        <MediaPlayer
        :items="items"
        related-count="6"
        :tags="tags"
        />
      </div>
      <div class="container">
        <Banner type="horizontal" padding="50"/>
      </div>

      <div class="container" v-if="home.length">
        <ProCarousel title="Exclusive Online" :items="home[3].items" id="exclusive-online" :grid="home[3].grid" meta="true" synopsis="true"/>
      </div>

      <div class="container" v-if="home.length">
        <ProCarousel title="Newest Uploads" :items="home[3].items" id="newest-uploads" :grid="home[3].grid" meta="true" synopsis="true"/>
      </div>

      <div class="container">
        <Banner type="horizontal" padding="50"/>
      </div>

    </div>

    <div class="fluid-container"
      :style="{'background-image': 'url(' + require('../assets/temp/show-bg-wide.jpg') + ')'}"
      >
      <div class="container" v-if="home.length">
        <ProCarousel title="Recommended For You" :items="home[6].items" id="recommended" :grid="home[6].grid" meta="true" synopsis="true"/>
      </div>
    </div>

    <div class="container">

      <div class="container">
        <Banner type="large" padding="70"/>
      </div>

      <div class="container" v-if="home.length">
        <ProCarousel title="Full Episodes" :items="home[6].items" id="full-episodes" :grid="home[6].grid" meta="true" synopsis="true"/>
      </div>
    </div>

    <div class="articles" v-if="home.length">
      <Articles :articles="home[8].items"/>
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

  name: 'Show',
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
  methods: {
    getData () {
      const url = 'http://protv.vidnt.com/page/' + this.$route.params.name + '/'
      const home = 'http://protv.vidnt.com/page/home/'

      // Get show context
      axios.get(url).then((response) => {
        // console.log('Show', JSON.parse(JSON.stringify(response.data)))
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
    }
  }
}
</script>
<style scoped>
#show {
  padding-top: 20px;
}

#show > .container {
  margin-bottom: 10px;
  width: 1238px;
  padding: 0;
}

#related {
  height: 500px;
  background: white;
  color: black;
  overflow-y: scroll;
  padding-bottom: 30px;
}

.media-player-container {
  margin: -80px auto 10px;
}

.articles {
  margin-bottom: 90px;
}
</style>
