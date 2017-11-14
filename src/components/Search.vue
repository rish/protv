<template>
<div id="show" v-if="areas">
  <div class="container">
    <div class="filter">
      <h2>Search for: {{ searchQuery }}</h2>
      <h3>Results for:</h3>
      <label><input type="checkbox" v-model="displayVideos"> Video</label>
      <label><input type="checkbox" v-model="displayArticles"> Articles</label>
    </div>
    <div v-for="area in areas">
      <div class="b top"
        :class="area.aclass"
        v-if="area.banner === 'top'">
        <img :src="area.banner_placeholder">
      </div>
      <div class="video-blocks" v-if="area.aclass === 'section_video' && displayVideos">
        <div class="video-block" v-for="item in area.items">
          <router-link :to="item.page">
          <div class="thumb"
            :style="{'background-image': renderBackgroundImage(item.poster)}"
            >
            <img class="play-icon" src="../assets/icons/thumbnail-play.png">
          </div>
          <div class="info">
            <div class="meta row">
              <div class="remind pull-left">
                <img src="../assets/icons/remind.png">
              </div>
              <div class="views pull-right">
                <img src="../assets/icons/views.png">
                {{ item.views }} views
              </div>
            </div>
            <div>
              <h5 class="title clearfix">{{ item.title }}</h5>
            </div>
            <div>
              <p class="description">{{ item.synopsis }}</p>
            </div>
          </div>
          </router-link>
        </div>
      </div>
      <div class="blocks" v-if="area.aclass === 'section_articles' && displayArticles">
        <div class="block" v-for="item in area.items">
          <router-link :to="item.page">
          <div class="thumb"
            :style="{'background-image': renderBackgroundImage(item.poster) }"
            ></div>
          <h3 class="title">{{ item.title }}</h3>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { renderBackgroundImage } from '@/utils'

export default {
/* global axios */

  name: 'Search',
  props: [
    'context'
  ],
  components: {
  },
  data () {
    return {
      areas: null,
      searchQuery: this.$router.currentRoute.query.q,
      displayVideos: true,
      displayArticles: true
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    renderBackgroundImage,
    getData () {
      const query = this.$router.currentRoute.query.q
      const searchUrl = '/page/search/?term=' + query
      axios.get(searchUrl).then(response => {
        this.areas = response.data.content.areas
        this.searchQuery = query
      })
    },
    toggleDisplay (type) {
      this[type] = !this[type]
    }
  },
  watch: {
    '$route' (to, from) {
      this.getData()
    }
  }
}
</script>
<style scoped>
#search > .container {
  margin-bottom: 10px;
  width: 1299px;
  padding: 0;
}

.filter {
  width: 950px;
  margin: 0 auto;
  padding-bottom: 50px;
}

.filter label {
  text-transform: uppercase;
  margin-right: 20px;
}
input[type="checkbox"]{
  /*
  width: 30px;
  height: 30px;
  cursor: pointer;
  /*
  -webkit-appearance: none;
  appearance: none;
  */
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

.meta.row {
  margin: 0;
}

.video-block {
  width: 267px;
  float: left;
  margin: 10px;
  height: 260px;
}

.video-block .thumb {
  background-size: cover;
  background-position: center center;
  width: 267px;
  height: 151px;
  position: relative;
}

.block .thumb {
  background-image: url('../assets/default-placeholder.png');
  background-size: cover;
  background-position: center center;
  width: 300px;
  height: 164px;
  position: relative;
}

.video-block .title {
  font-size: 22px;
  font-weight: 500;
}

.video-block .description {
  font-weight: 300;
  font-size: 12px;
}

.play-icon {
  position: absolute;
  top: 35%;
  width: 50px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}

.views img {
  display: inline-block;
  margin-right: 5px;
}

.video-blocks {
  padding-bottom: 20px;
  overflow: auto;
  width: 865px;
  margin: 0 auto;
}

.blocks {
  padding-bottom: 20px;
  overflow: auto;
  width: 1020px;
  margin: 0 auto;
}

.block {
  width: 300px;
  float: left;
  background: #131313;
  margin: 20px;
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

a, a:active, a:focus {
  color: white;
  text-decoration: none;
}

.b {
  text-align: center;
}

.b img {
  margin-bottom: 30px;
}

.b.section_video img {
  width: 1000px;
  height: 120px;
}

.b.section_video img {
  width: 970px;
  height: 250px;
}
</style>
