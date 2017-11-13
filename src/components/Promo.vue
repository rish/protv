<template>
<div id="promo">
  <div class="container">
    <slick ref="promo" :options="slickOptions">
    <div class="slick-item" :key="item.id" v-for="item in items">
      <div class="block">
        <div class="thumb"
          :style="{'background-image': renderBackgroundImage(item.poster)}"
          >
        </div>
        <div class="content">
          {{ item.title | truncateOnWord(50) }}
        </div>
      </div>
    </div>
    </slick>
    <div class="controls">
      <a class="left" v-on:click="prevSlide"><img src="../assets/left-arrow.svg" ref="arrowLeft"></a>
      <a class="right" v-on:click="nextSlide"><img src="../assets/right-arrow.svg" ref="arrowRight"></a>
    </div>
  </div>
</div>
</template>
<script>
import Slick from 'vue-slick'
import {
  renderBackgroundImage,
  calculateArrowColorization
} from '@/utils'
import { truncateOnWord } from '@/filters'

export default {
  name: 'Promo',
  components: {
    Slick
  },
  props: [
    'context',
    'items',
    'title'
  ],
  data () {
    return {
      arrowColor: 'blue',
      slickOptions: {
        slidesToShow: 5,
        arrows: false,
        variableWidth: true
      }
    }
  },
  mounted () {
    const refs = ['arrowLeft', 'arrowRight']
    const arrowColor = this.context.conf.colors[this.arrowColor]
    calculateArrowColorization(refs, arrowColor, this)
  },
  methods: {
    renderBackgroundImage,
    calculateArrowColorization,
    nextSlide () {
      this.$refs.promo.next()
    },
    prevSlide () {
      this.$refs.promo.prev()
    }
  },
  filters: {
    truncateOnWord
  }
}
</script>
<style lang="scss">
@import "../../node_modules/slick-carousel/slick/slick.scss";
#promo {
  .slick-slide {
    width: 232px;
    margin-right: 15px;
  }
  .slick-list {
    width: 980px;
  }
  .controls {
  }
}
</style>
<style lang="scss" scoped>
.container {
  width: 1000px;
  position: relative;
  padding-bottom: 60px;
}

.block {
  background: #222222;
  width: 232px;
  height: 325px;
  padding: 10px 0;
}

.thumb {
  width: 211px;
  height: 241px;
  background-size: cover;
  background-position: center top;
  margin: 0 auto;
}

.content {
  width: 211px;
  margin: 10px;
  font-size: 12px;
  font-weight: 500;
}

.controls {
  width: 90px;
  height: 50px;
  position: absolute;
  bottom: -250px;
  img {
    width: 15px;
  }
}
</style>
