<template>
<div>
  <div class="container-fluid" :style="{ 'background-image': background ? 'url(' + background + ')' : 'none' }">
    <div class="row heading-container" v-if="title">
      <img v-if="titleIcon" :src="titleIcon" class="icon" width="50" height="50">
      <h2 class="section-title" :class="{ [titleColor]: titleColor ? true : null }">{{ title }}</h2>
      <div class="title-button" v-if="buttonColor">
        <a class="btn" :class="{ [buttonColor]: buttonColor ? true : null }">Button Text Placeholder</a>
      </div>
    </div>
    <div class="row component-container" :class="{'grid-carousel': rows === 2, 'grid-4': columns === 4}" v-if="items.length">
      <slick ref="slick" :options="slickOptions" :class="{ 'grid-container': rows >= 2 }">
        <div class="slick-item" v-for="(item, index) in items" :key="item.id">
          <router-link :to="'/video/' + item.id" class="link">
          <div class="thumb"
            :style="{
              'background-image': 'url(' + item.poster + ')'
            }"
            >
            <div v-if="item.duration" class="duration">
              <img src="../assets/icons/clock.png" width="9.5">
              <span>{{ item.duration | duration }}</span>
            </div>
            <div class="play-icon">
              <img src="../assets/icons/thumbnail-play.png">
            </div>
          </div>
          <div :class="widthClass">
            <div v-if="meta" class="meta row">
              <div class="remind pull-left">
                <img src="../assets/icons/remind.png">
              </div>
              <div class="views pull-right">
                <img src="../assets/icons/views.png">
                {{ item.views }} views
              </div>
            </div>
            <div v-if="columns === 3 || rows === 2">
              <h5 class="title clearfix">{{ item.title | truncateOnWord(20) }}</h5>
            </div>
            <div v-else>
              <h5 class="title clearfix">{{ item.title | truncateOnWord(40) }}</h5>
            </div>
            <div v-if="item.synopsis" class="synopsis-container">
              <p class="synopsis">{{ item.synopsis | truncateOnWord(80) }}</p>
            </div>
          </div>
          </router-link>
        </div>
      </slick>
      <div v-if="banner === 'vertical'" class="b-vertical">
        <img :src="bannerPlaceholder" width="300" height="600"/>
      </div>
      <div class="controls">
        <a class="left" v-on:click="prevSlide"><img src="../assets/left-arrow.png"></a>
        <a class="right" v-on:click="nextSlide"><img src="../assets/right-arrow.png"></a>
      </div>
    </div>
  </div>
</div>
</template>
<script>
// import {$} from 'jquery'
import Slick from 'vue-slick'
import { duration } from '@/filters'

export default {
  name: 'ProCarousel',
  components: {
    Slick
  },
  props: [
    'title',
    'titleColor',
    'titleIcon',
    'items',
    'grid',
    'meta',
    'playIcon',
    'synopsis',
    'background',
    'banner',
    'bannerPlaceholder',
    'buttonColor'
  ],
  data () {
    const gridConfig = this.grid.split('_')
    const autoplay = gridConfig[3] === 'auto'
    const rows = parseInt(gridConfig[0])
    const columns = parseInt(gridConfig[1])
    const step = parseInt(gridConfig[2])
    return {
      rows: rows,
      columns: columns,
      next: step,
      autoplay: autoplay,
      slickOptions: {
        autoplay: autoplay,
        slidesToShow: rows > 1 ? rows : columns,
        slidesToScroll: step,
        rows: rows,
        variableWidth: true,
        arrows: false
      }
    }
  },
  mounted () {
    // Placeholder
  },
  methods: {
    nextSlide () {
      this.$refs.slick.next()
    },
    prevSlide () {
      this.$refs.slick.prev()
    }
  },
  computed: {
    widthClass () {
      return this.columns % 3 === 0 || this.rows === 2 ? 'wide' : 'narrow'
    },
    truncate (text, length) {
      return text.substring(0, length) + ' ...'
    }
  },
  filters: {
    duration,
    truncateOnWord (str, limit) {
      var trimmable = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF'
      var reg = new RegExp('(?=[' + trimmable + '])')
      var words = str.split(reg)
      var count = 0
      var returnWords = words.filter(function (word) {
        count += word.length
        return count <= limit
      }).join('')
      if (str.length > limit) {
        returnWords = returnWords + ' ...'
      }
      return returnWords
    }
  }
}
</script>
<style lang="scss">
  @import "../../node_modules/slick-carousel/slick/slick.scss";
  a:focus {
    outline: none;
  }
  .slick-list {
    width: 850px;
    margin: 0 auto;
  }
  .slick-slide {
    width: 267px;
    margin-right: 25px;
  }
  .grid-4 .slick-slide {
    width: 171px;
    margin-right: 60px;
  }
  .grid-4 .slick-slide .thumb {
    height: 96px;
  }
  .grid-4 .controls {
    top: 10px;
  }
  .grid-carousel {
    /* override .row.component-container padding for now */
    padding-right: 0 !important;
  }
  .grid-container {
    float: left;
    width: 600px;
    padding-left: 35px;
  }
  .grid-carousel .controls {
    top: 165px;
    width: 680px;
    left: -300px;
  }
  .grid-carousel .slick-list {
    width: 550px;
  }
  .grid-carousel .slick-item {
    padding-bottom: 20px;
  }
  .b-vertical {
    float: right;
    margin-top: -80px;
  }
  .controls {
    position: absolute;
    top: 50px;
    width: 1000px;
    height: auto;
    left: 0;
    right: 0;
    margin: auto;
  }
  .controls a {
    display: inline-block;
    position: absolute;
    padding: 20px;
  }
  .controls a:hover {
    cursor: pointer;
  }
  .controls .right {
    right: 0;
  }

</style>
<style scoped>
.container-fluid {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.section-title {
  font-size: 45px;
  font-weight: 200;
  text-transform: uppercase;
  padding: 20px 10% 30px 0px;
}

.section-title.red {
  color: #bc0d0d;
}

.title-button {
  float: right;
  display: inline-block;
  position: absolute;
  top: 50px;
  right: 0;
}

.title-button .btn {
  border-radius: 0;
  border: 1px solid white;
  color: white;
}

.title-button .btn.red {
  background: #bc0d0d;
}

.row {
  padding-left: 30px;
  padding-right: 30px;
}

.row.heading-container {
  position: relative;
  width: 850px;
  margin: 0 auto;
  padding-left: 0px;
}

.heading-container .icon {
  position: absolute;
  top: 40px;
  left: -70px;
  float: left;
}

.row.component-container {
  width: 1000px;
  margin: 0 auto;
  padding-bottom: 30px;
  position: relative;
}

.row.component-container.grid-carousel {
}

.grid-carousel .carousel-controls .left {
  left: 10px;
}

.grid-carousel .carousel-controls {
  top: 180px;
}

.carousel-inner .item {
  padding: 0 10%;
}

.pager li>a, .pager li>span {
  background: none;
  border: none;
}

.carousel-controls {
  position: absolute;
  top: 25px;
  width: 100%;
}

.carousel-controls.tall {
  top: 30px;
}

.carousel-controls ul {
  height: 10px;
  margin: 0;
  padding: 0;
}

.carousel-controls .left, .carousel-controls .right {
  position: absolute;
}

.carousel-controls .left {
  left: 50px;
}

.carousel-controls .right {
  right: 50px;
}

.thumb {
  width: 100%;
  height: 151px;
  background-size: cover;
  background-position: 50% 25%;
  background-repeat: no-repeat;
  position: relative;
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
.grid-4 .play-icon {
  top: 25%;
}

.narrow {
  width: 150px;
  font-size: 14px;
}

.wide {
  width: 267px;
}

.wide .title {
  font-size: 22px;
  font-weight: 400;
}

.now-playing {
  color: white;
  font-size: 10px;
  background: rgba(31, 85, 255, 0.5);
  position: absolute;
  bottom: 0;
  padding: 5px 10px;
}

.timestamp, .duration {
  position: absolute;
  bottom: 0;
  padding: 5px 10px;
  font-size: 10px;
  background: #7f7f7f;
}

.timestamp img, .duration img {
  display: inline-block;
  position: relative;
  left: -3px;
  top: -1px;
}

.meta.row {
  padding-left: 20px;
  padding-right: 20px;
}

.views {
  font-size: 11px;
  padding-top: 3px;
}

.views img {
  display: inline-block;
  margin-right: 5px;
}

.remind img {
  margin-top: 5px;
}

.synopsis-container {
  height: 30px;
}

.synopsis {
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;
}

.link, .link:hover {
  color: inherit;
  text-decoration: none;
}

</style>

