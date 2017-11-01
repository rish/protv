<template>
<div id="article" v-if="home.length">
  <div class="container">
    <Banner type="horizontal" padding="20"/>
    <div class="main">

      <img class="img-responsive" :src="content.items[0].poster">

      <h3 class="title" v-html="content.title"></h3>
      <h4 class="subheading" v-html="mock.subheading"></h4>
      <Share />
      <div class="text" v-html="content.items[0].content"></div>

    </div>
    <!-- .main -->
    <div class="sidebar">
      <h3 class="heading">Video Recommended</h3>

      <MediaPlayerRelated :videoItems="home[0].items" limit=5 barebones="true" />

      <Banner type="square" padding="30"/>

      <MediaPlayerRelated :videoItems="home[0].items" limit=5 barebones="true" />

      <Banner type="vertical-large" padding="30"/>

      <MediaPlayerRelated :videoItems="home[0].items" limit=5 barebones="true" />
    </div>
  </div>


  <div class="container-wide">
      <Banner type="large" padding="30"/>
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
import Share from '@/components/Share'
import MediaPlayerRelated from '@/components/MediaPlayerRelated'

export default {
/* global axios */

  name: 'ShowNews',
  components: {
    ShowHeader,
    MediaPlayer,
    Home,
    Banner,
    ProCarousel,
    Articles,
    Share,
    MediaPlayerRelated
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
        title: 'Tudor, Smiley, Lori si Despot incep in pasi de dans sezonul sapte Vocea Romaniei! Vineri, de la 20:30, la PROTV!',
        subheading: 'VINERI incepe sezonul sapte Vocea Romaniei!',
        text: [
          '<p>De la 20:30, telespectatorii vor urmari prima editie a celei mai tari competitii a vocilor si se vor bucura de un spectacol fascinant. Concurentii sunt pregatiti sa impresioneze si nu se tem sa dea totul pe scena, iar Tudor, Smiley, Lori si Despot danseaza, inspirati fiind de melodia cantata de unul dintre participanti. Ei vor realiza vineri un moment electrizant, plin de energie si foarte mult umor</p>',
          '<p>Nu va lipsi nici iubirea din prima editie Vocea Romaniei. Un concurent indragostit va fi incurajat de catre iubita lui intr-un mod special atat in culise, cat si pe scena. Cei doi isi vor face declaratii pline de patos, iar antrenorii le vor urma exemplul si vor incepe un sir de imbratisari. ”Am inteles de ce canti atat de bine, pentru ca ai o muza.”, ii va spune Lori baiatului la finalul reprezentatiei acestuia.</p>'
        ].join(''),
        thumbText: 'Deea Ibacka, Roxana Vancea, Razvan Fodor, Ionut Iftimoaie si Jorge sunt pregatiti pentru experienta Fort Boyard!'
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      const url = 'http://protv.vidnt.com/itempage/article/' + this.$route.params.id + '/'
      const home = 'http://protv.vidnt.com/page/home/'

      // Get show context
      axios.get(url).then((response) => {
        console.log('Article', JSON.parse(JSON.stringify(response.data)))
        this.content = response.data.content.areas[0]
        // this.items = this.content.items
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
#article {
  background: white;
  color: black;
}
#article > .container {
  margin-bottom: 10px;
  width: 999px;
  padding: 0;
  overflow: hidden;
}

.main {
  width: 675px;
  float: left;
}

.sidebar {
  width: 300px;
  float: left;
  margin-left: 20px;
}

.sidebar .heading {
  text-transform: uppercase;
  font-weight: 300;
  font-size: 25px;
  margin-top: 0;
}

.container-wide {
  width: 1100px;
  margin: 0 auto;
  padding-bottom: 30px;
}
.title {
  font-size: 35px;
  font-weight: 500;
  margin-top: 10px;
}
.subheading {
  font-size: 25px;
  font-weight: 500;
  margin-top: 10px;
}

.text {
  font-size: 20px;
  font-weight: 300;
}

img.article {
  margin: 30px 0;
}

.blocks {
  padding-bottom: 20px;
  overflow: auto;
  width: 960px;
  margin: 0 auto;
}

.block {
  width: 300px;
  float: left;
  background: #131313;
  margin: 10px;
  height: 280px;
}

.block .title {
  color: #e3e3e3;
  font-size: 18px;
  padding: 10px;
}

.no-bg {
  background: none;
}
</style>
