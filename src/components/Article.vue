<template>
<div id="show" v-if="home.length">
  <div class="container">
    <Banner type="horizontal" padding="20"/>

    <img :src="content.poster">

    <div class="main">
      <h3 class="title" v-html="content.title"></h3>
      <div class="text" v-html="content.content"></div>
    </div>

    <Banner type="large" padding="30"/>

    <div class="blocks">
      <div class="block">
        <img src="../assets/temp/show/news-thumb.jpg">
        <h3 class="title">{{ mock.thumbText }}</h3>
      </div>
      <div class="block">
        <img src="../assets/temp/show/news-thumb.jpg">
        <h3 class="title">{{ mock.thumbText }}</h3>
      </div>
      <div class="block">
        <img src="../assets/temp/show/news-thumb.jpg">
        <h3 class="title">{{ mock.thumbText }}</h3>
      </div>
      <div class="block">
        <img src="../assets/temp/show/news-thumb.jpg">
        <h3 class="title">{{ mock.thumbText }}</h3>
      </div>
      <div class="block">
        <img src="../assets/temp/show/news-thumb.jpg">
        <h3 class="title">{{ mock.thumbText }}</h3>
      </div>
      <div class="block no-bg">
        <Banner type="square"/>
      </div>
      <div class="block">
        <img src="../assets/temp/show/news-thumb.jpg">
        <h3 class="title">{{ mock.thumbText }}</h3>
      </div>
      <div class="block">
        <img src="../assets/temp/show/news-thumb.jpg">
        <h3 class="title">{{ mock.thumbText }}</h3>
      </div>
      <div class="block">
        <img src="../assets/temp/show/news-thumb.jpg">
        <h3 class="title">{{ mock.thumbText }}</h3>
      </div>
      <div class="block">
        <img src="../assets/temp/show/news-thumb.jpg">
        <h3 class="title">{{ mock.thumbText }}</h3>
      </div>
      <div class="block">
        <img src="../assets/temp/show/news-thumb.jpg">
        <h3 class="title">{{ mock.thumbText }}</h3>
      </div>
      <div class="block">
        <img src="../assets/temp/show/news-thumb.jpg">
        <h3 class="title">{{ mock.thumbText }}</h3>
      </div>
    </div>

    <Banner type="horizontal" padding="30"/>
  </div>

  <div class="container-wide">
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

  name: 'Article',
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
        title: 'Tudor, Smiley, Lori si Despot incep in pasi de dans sezonul sapte Vocea Romaniei! Vineri, de la 20:30, la PROTV!',
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
        this.content = response.data.content.areas[0].items[0]
        // this.items = this.content.items
        // // console.log('Show content', this.content)
        // this.head = response.data.head
        // this.video = this.content.items[0]

        // this.getContext()
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
#show > .container {
  margin-bottom: 10px;
  width: 999px;
  padding: 0;
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

.text {
  font-size: 16px;
  font-weight: 300px;
}

.text >>> a {
  /*color: #487bec;*/
  color: white;
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
