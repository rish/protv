<template>
<div id="show" v-if="home.length">
  <div class="container">
    <ShowHeader v-if="header.hasOwnProperty('head')" :poster="header.head.poster"/>
  </div>
  <div class="container blocks">

    <div class="row block">
      <div class="pull-left left">
        <img src="../assets/temp/channel/panel-thumb.jpg">
      </div>
      <div class="right">
        <h3 class="title" v-html="mock.title"></h3>
        <div class="text" v-html="mock.text"></div>
      </div>
    </div>

    <div class="row block">
      <div class="pull-left left">
        <img src="../assets/temp/channel/panel-thumb.jpg">
      </div>
      <div class="right">
        <h3 class="title" v-html="mock.title"></h3>
        <div class="text" v-html="mock.text"></div>
      </div>
    </div>

    <div class="row block">
      <div class="pull-left left">
        <img src="../assets/temp/channel/panel-thumb.jpg">
      </div>
      <div class="right">
        <h3 class="title" v-html="mock.title"></h3>
        <div class="text" v-html="mock.text"></div>
      </div>
    </div>

    <div class="row block">
      <div class="pull-left left">
        <img src="../assets/temp/channel/panel-thumb.jpg">
      </div>
      <div class="right">
        <h3 class="title" v-html="mock.title"></h3>
        <div class="text" v-html="mock.text"></div>
      </div>
    </div>

    <Banner type="horizontal" padding="30"/>

    <ProCarousel title="Most Viewed" :items="home[6].items" id="full-episodes" :grid="home[6].grid" meta="true" synopsis="true"/>
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

  name: 'ShowPanel',
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
      home: [],
      mock: {
        title: '#echipa<strong>Tudor</strong>',
        text: [
          '<p>Actor, solist vocal, compozitor și producator, Tudor Chirila a debutat in muzica ca membru fondator si vocalist al uneia dintre cele mai iubite formații rock din Romania, Vama Veche. Tudor isi continua cariera muzicala ca lider si solist vocal al formatiei Vama, formula in care a lansat doua albume: "Vama" si "2012".</p>',
          '<p>De-a lungul celor 16 ani de muzica a scris, ca autor sau coautor, peste 80 de cantece. Alaturi de colegii lui a produs prima opera rock din Romania de dupa \'89 – Am sa ma-ntorc barbat.</p>'
        ].join('')
      }
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

.blocks {
  margin-top: -30px;
}

.block {
  width: 973px;
  margin: 0 auto 80px;
}

.block img {
  border: 3px solid #2b2b2b;
}

.block .right {
  width: 640px;
  margin-left: 20px;
  float: left;
}

.block .title {
  font-size: 30px;
  margin-top: 0;
}

.text {
  font-size: 16px;
  font-weight: 300px;
}
</style>
