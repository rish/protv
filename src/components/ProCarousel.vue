<template>
  <div class="row">
    <div class="carousel slide" :id="carouselId" data-interval="false">
      <div class="carousel-inner">
        <div class="item" v-for="i in Math.ceil(items.length / columns)" :class="{ active: (i === 1) }">
          <div v-for="item in items.slice((i - 1) * columns, i * columns)">
            <div :class="{
              'col-md-4': columns % 3 === 0,
              'col-md-3': columns % 4 === 0
              }">
              <div class="thumb"
                :style="{
                'background-image': 'url(' + item.poster + ')',
                'height': columns % 3 === 0 ? '150px' : '96px',
                'width': columns % 3 === 0 ? '267px' : '170px'
                }"
                >
                <div v-if="columns === 4">
                  <div class="timestamp">
                    <img src="../assets/icons/clock.png" width="9.5">
                    <span>1:23</span>
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
                <h5 class="title clearfix">{{ item.title | truncateOnWord(19) }}</h5>
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
export default {
  name: 'ProCarousel',
  props: ['items', 'id', 'grid', 'cols', 'meta', 'playIcon', 'synopsis'],
  data () {
    const gridConfig = this.grid.split('_')
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
  },
  computed: {
    widthClass () {
      return this.columns % 3 === 0 ? 'wide' : 'narrow'
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

.row {
  padding-left: 30px;
  padding-right: 30px;
}

.carousel-inner .item {
  padding: 0 10%;
}

.pager li>a, .pager li>span {
  background: none;
  border: none;
}

.carousel-controls {
  position: relative;
  top: -140px;
}

.carousel-controls.tall {
  position: relative;
  top: -300px;
}

.carousel-controls ul {
  height: 10px;
  margin: 0;
  padding: 0;
}

.carousel-controls .left, .carousel-controls .right {
  position: relative;
}

.carousel-controls .left {
  left: 50px;
}

.carousel-controls .right {
  right: 60px;
}

.thumb {
  width: 100%;
  height: 150px;
  background-size: cover;
  background-position: 0% 0%;
  background-repeat: no-repeat;
  position: relative;
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

