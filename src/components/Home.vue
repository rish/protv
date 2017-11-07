<template>
  <div id="home">
    <div v-for="(content, index) in contents">
      <div
        v-if="content.aclass === 'video'"
        >
        <div class="container backdrop">
          <div class="video-container" :style="{ 'background-image': displayVideo ? null : 'url(' + content.items[0].poster + ')' }">
            <div class="overlay">
              <div class="row">
                <div class="content" v-if="!displayVideo">
                  <h2 class="title">{{ content.items[0].title }}</h2>
                  <h3 class="subheading">Emisiunea Fort Boyard vine la ProTV.</h3>
                  <p>{{ content.items[0].description | truncateOnWord(200) }}</p>
                  <router-link :to="'/video/' + content.items[0].id">
                    <a class="more-videos-btn" href="#">Mai multe video-uri</a>
                  </router-link>
                </div>
                <div class="play-btn" v-on:click="displayVideo = true" v-if="!displayVideo"></div>
                <div class="main-video" v-if="displayVideo">
                  <iframe class="video-player" src="http://st-rr-d.vidnt.com/player/?account=ipbc&width=100%&font_size=10&fullScreen=false&showEmbedded&qualityChange=true&&autoplay=true&playerType=videojs&videojsVersion=0.4.1.4&playback_url=http%3A%2F%2Fprotvstgmms.vidnt.com%2Fcontent%2Fprotvstg-SJ25C1-LO.1264-854x480.mp4" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="epg" :style="{ 'padding-top': displayVideo ? 0 : inherit }">
          <div class="container">
            <ProCarousel :items="content.items" id="epg" :grid="content.grid" :cols="4"/>
            <div class="b1">
              <img src="../assets/temp/b-horizontal.png">
            </div>
          </div>
        </div>
      </div>
      <!-- /video content -->
      <div
        v-if="content.itype === 'section' && !content.hasOwnProperty('box') && index !== 9 && index !== 10"
        :style="[content.hasOwnProperty('background') ? { 'background-image': 'url(' + require('../assets/bg2.jpg') + ')' } : null]"
        :class="{ 'background-wide': content.hasOwnProperty('background') }"
      >
        <div class="container carousel-holder">
          <h3
            class="section title"
            :style="[content.hasOwnProperty('title_color') ? { 'color': content.title_color } : null]"
          >
            {{ content.title }}
          </h3>
          <img class="title-icon" v-if="content.icon" src="../assets/temp/logo-special.png">
          <a v-if="content.icon" class="special-btn" href="#">Vezi mai multe &raquo;</a>
          <div :class="{'pull-left': index === 4}">
            <ProCarousel :items="content.items" :id="content.id" :grid="content.grid" meta="true" synopsis="true" playIcon="true" />
          </div>
          <div class="b-vertical" v-if="index === 4">
            <img src="../assets/temp/b-vertical.jpg">
          </div>
        </div>
      </div>
      <!-- /section -->
      <div
        v-if="content.box && content.box === 'articles'"
        class="articles-container"
      >
        <Articles :articles="content.items" :loadMoreLink="content.link"/>
      </div>
      <!-- /articles -->
      <div class="b1 bpad" v-if="index === 8">
        <img src="../assets/temp/b-horizontal.png">
      </div>

      <div class="b1 bpad" v-if="index === 6">
        <img src="../assets/temp/b-large.jpg">
      </div>

      <div class="plugs-container" v-if="index === 9 || index === 10">
        <Plugs :plugs="content"/>
      </div>
    </div>
    <!-- /contents -->
  </div>
</template>

<script>
import ProCarousel from '@/components/ProCarousel'
import Articles from '@/components/Articles'
import Plugs from '@/components/Plugs'
import { duration, truncateOnWord } from '@/filters'
/* global axios */
export default {
  name: 'Home',
  components: {
    ProCarousel,
    Articles,
    Plugs
  },
  data () {
    return {
      contents: [],
      displayVideo: false
    }
  },
  filters: {
    duration,
    truncateOnWord
  },
  mounted () {
    this.getData()
  },
  updated () {
    // console.log('updated ...')
    // console.log($('.carousel').carousel())
  },
  methods: {
    getData () {
      const url = 'http://protv.vidnt.com/page/home/'
      axios.get(url).then((response) => {
        console.log(JSON.parse(JSON.stringify(response.data)))
        this.contents = response.data.content.areas
      })
    },
    generateSlug (text) {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
    },
    generateId (slug) {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.container {
}

#home {
  padding-bottom: 50px;
}

.backdrop {
  background: url('../assets/temp/banners-backdrop.jpg') no-repeat;
  background-size: contain;
  width: 1240px;
}

.video-container {
  min-height: 600px;
  background-repeat: no-repeat;
  margin: 126px 42px 0 111px;
  width: 988px;
}

.video-container .overlay {
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  min-height: 600px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7));
}

.video-container .content {
  width: 250px;
  float: right;
  margin-right: 50px;
}

.video-container .title {
  font-size: 20px;
  border-bottom: 1px solid white;
  padding: 0 10px 10px 0;
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 200;
  padding-top:20px
}

.b1 {
  text-align: center;
  padding: 30px 0 40px;
}

.video-container .subheading {
  font-size: 25px;
  font-weight: 400;
}

.video-container p {
  font-size: 15px;
  margin: 0 20px 0 0;
  text-align: justify;
  font-weight: 400;
  line-height: 17px;
}

.video-container .more-videos-btn {
  opacity: 0.6;
  padding: 7px;
  background: #1f55ff;
  border: 1px solid white;
  max-width: 120px;font-size: 12px;
  color: white;
  text-align: center;
  margin-top: 10px;
  display: inline-block;
}

.video-container .more-videos-btn:hover {
  text-decoration: none;
  opacity: 1;
}

.video-container .play-btn {
  width: 100px;
  height: 100px;
  background: url('../assets/temp/main-video-play.png');
  opacity: 0.8;
  position: absolute;
  bottom: 30px;
  left: 30px;
}

.video-container .play-btn:hover {
  cursor: pointer;
  opacity: 1;
}

.epg {
  padding-top: 80px;
}

.carousel-holder {
  position: relative;
  padding-bottom: 30px;
}

.section.title {
  font-size: 45px;
  font-weight: 200;
  text-transform: uppercase;
  padding: 20px 10% 30px 140px;
}

.title-icon {
  height: 50px;
  position: absolute;
  top: 43px;
  left: 100px;
}

.special-btn {
  position: absolute;
  top: 43px;
  right: 150px;
  background: #bc0d0d;
  color: white;
  padding: 5px 10px;
}

.background-wide {
  background-repeat: no-repeat;
  background-size: 100%;
}

.articles-container {
  background: #131313;
  overflow: auto;
}

.bpad {
  padding-top: 44px;
}

.b-vertical {
  margin-top: -75px;
}

.main-video {
  position: relative;
  top: 0;
  left: 11px;
  height: 580px;
  overflow: hidden;
}

.video-player {
  border: 0;
  width: 992px;
  height: 1100px;
}

.plugs-container {
  padding-bottom: 30px;
}

</style>
