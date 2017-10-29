<template>
  <div class="row component-container" :class="{'grid-carousel': rows === '2'}">
    <div v-if="title">
      <h2 class="section-title">{{ title }}</h2>
    </div>
    <div class="carousel slide" :id="carouselId" data-ride="carousel" data-interval="5000">
      <div class="carousel-inner">
        <div class="item" v-for="i in Math.ceil(items.length / (columns * rows))" :class="{ active: (i === 1) }">
          <div v-for="item in items.slice((i - 1) * (columns * rows), i * (columns * rows))">
            <div :class="{
              'col-md-4': columns % 3 === 0,
              'col-md-3': columns % 4 === 0,
              'grid-thumbs': rows ==='2'
              }">
              <div class="thumb"
                :style="{
                'background-image': 'url(' + item.poster + ')',
                'height': (columns === '3' || rows === '2') ? '150px' : '96px',
                'width': (columns === '3' || rows === '2') ? '267px' : '170px'
                }"
                >
                <div v-if="columns === 4">
                  <div class="timestamp">
                    <img src="../assets/icons/clock.png" width="9.5">
                    <span>1:23</span>
                  </div>
                </div>
                <div v-else>
                  <div class="play-icon">
                    <img src="../assets/icons/thumbnail-play.png">
                  </div>
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
                <div v-if="columns === '3' || rows === '2'">
                  <h5 class="title clearfix">{{ item.title | truncateOnWord(20) }}</h5>
                </div>
                <div v-else>
                  <h5 class="title clearfix">{{ item.title | truncateOnWord(40) }}</h5>
                </div>
                <div v-if="synopsis" class="synopsis-container">
                  <p class="synopsis">{{ item.synopsis | truncateOnWord(80) }}</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <nav class="carousel-controls" :class="{ tall: columns === '3' }">
        <ul class="control-box pager">
          <li class="left pull-left"><a data-slide="prev" :href="carouselIdRef" v-on:click.prevent><img src="../assets/left-arrow.png"></a></li>
          <li class="right pull-right"><a data-slide="next" :href="carouselIdRef" v-on:click.prevent><img src="../assets/right-arrow.png"></a></li>
        </ul>
      </nav>

    </div>
  </div>
</template>
<script>
/* globals $ */
export default {
  name: 'ProCarousel',
  props: ['title', 'items', 'id', 'grid', 'cols', 'meta', 'playIcon', 'synopsis'],
  data () {
    const gridConfig = this.grid.split('_')
    console.log(gridConfig)
    const carouselId = 'carousel-' + this.id
    return {
      carouselId: carouselId,
      carouselIdRef: '#' + carouselId,
      rows: gridConfig[0],
      columns: this.cols || gridConfig[1],
      next: gridConfig[2],
      autoplay: gridConfig[3] === 'auto'
    }
  },
  mounted () {
    // console.log('ProCarousel mounted', this)
    $(this.carouselIdRef).carousel()
  },
  computed: {
    widthClass () {
      return this.columns % 3 === 0 || this.rows === '2' ? 'wide' : 'narrow'
    },
    truncate (text, length) {
      return text.substring(0, length) + ' ...'
    }
  },
  filters: {
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
<style scoped>

.section-title {
  font-size: 45px;
  font-weight: 200;
  text-transform: uppercase;
  padding: 20px 10% 30px 123px;
}

.row {
  padding-left: 30px;
  padding-right: 30px;
}

.row.component-container {
  padding-bottom: 30px;
}

.grid-carousel {
  width: 800px;
  padding: 0;
  padding-left: 70px;
}
.grid-thumbs {
  width: 280px;
  float: left;
  margin-bottom: 20px;
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
  height: 150px;
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

.timestamp {
  position: absolute;
  bottom: 0;
  padding: 5px 10px;
  font-size: 10px;
  background: #7f7f7f;
}

.timestamp img {
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

.synopsis-container {
  height: 30px;
}

.synopsis {
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;
}

</style>

