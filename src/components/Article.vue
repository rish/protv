<template>
<div id="article" v-if="home.length">
  <div class="container">
    <Banner type="horizontal" padding="20"/>
    <div class="main">

      <img class="img-responsive" src="../assets/temp/article/main.jpg">

      <h3 class="title" v-html="mock.title"></h3>
      <h4 class="subheading" v-html="mock.subheading"></h4>
      <Share />
      <div class="text" v-html="mock.text"></div>

      <img class="img-responsive article" src="../assets/temp/article/second.jpg">
      <div class="text">
        Antrenorii vor ramane maine fara cuvinte in fata unui concurent cu o voce formidabila. ”Esti tare... esti foarte tare. Cred ca este unul dintre momentele alea de la Vocea Romaniei in care-i spui unui moment ca e cat o finala. Ai fost stare de la un cap la altul.”, ii va spune Tudor, vizibil emotionat..
      </div>

      <img class="img-responsive article" src="../assets/temp/article/third.jpg">
      <div class="text">
        "Eu am apasat butonul, m-am intors, si in momentul ala mi-am dat seama ca am uitat tot ce as fi vrut sa-ti spun in momentul in care te-am vazut. Dar daca Tudor a spus despre tine ca esti o scorpie... acum mi-e putin frica.”, ii va spune Despot unei concurente, in timp ce Smiley, uimit de o alta reprezentatie, va spune: ”Eram siderat!!! Ba, esti prost?! Serios??? Heeei, hei, sunt si eu aici! Nici nu m-a vazut! Am zis sa nu ma bag peste momentul asta emotionant. M-am emotionat si eu, m-am emotionat serios. Si n-am mai apucat sa zic nimic.".
      </div>

      <h4 class="subheading">Incepand de VINERI, dam sunetul mai tare in sezonul sapte Vocea Romaniei!</h4>

    </div>
    <!-- .main -->
    <div class="sidebar">
      <h3 class="heading">Video Recommended</h3>

      <MediaPlayerRelated :videoItems="items" limit=5 barebones="true" />

      <Banner type="square" padding="30"/>

      <MediaPlayerRelated :videoItems="items" limit=5 barebones="true" />

      <Banner type="vertical-large" padding="30"/>

      <MediaPlayerRelated :videoItems="items" limit=5 barebones="true" />
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
      const url = 'http://protv.vidnt.com/page/voice_home/'
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
