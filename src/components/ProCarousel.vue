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
                <h5>{{ item.title }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav class="carousel-controls">
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
  props: ['items', 'id', 'grid', 'cols'],
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
    console.log('ProCarousel mounted', this)
    console.log(typeof this.items)
  },
  computed: {
    widthClass () {
      return this.columns % 3 === 0 ? 'wide' : 'narrow'
    }
  }
}
</script>
<style scoped>

.row {
  padding-left: 70px;
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
  top: -150px;
}

.carousel-controls .left, .carousel-controls .right {
  position: relative;
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

</style>

