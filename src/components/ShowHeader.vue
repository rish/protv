<template>
  <div class="container" v-if="context.hasOwnProperty('menu')">
    <!-- TODO: Get actual DFP units and embed
    <div class="backdrop">
      <div class="top">
        <img src="../assets/temp/backdrop-2/top.jpg">
      </div>
      <div class="left">
        <img src="../assets/temp/backdrop-2/left.jpg">
      </div>
      <div class="right">
        <img src="../assets/temp/backdrop-2/right.jpg">
      </div>
    </div>
    -->
    <div v-if="banner" class="backdrop-single">
      <img :src="banner"/>
    </div>
    <div class="header"
      :style="{ 'background-image': 'url(' + context.media[0] + ')' }"
      >
      <div class="row">
        <div class="thumb">
          <img :src="context.icon" width="100" height="100">
        </div>
        <ul>
          <li v-for="item in menu">
            <router-link :to="item.route">{{ item.title }}</router-link>
          </li>
          <!-- TODO: Map active and highlight
          <li class="active">Home</li>
          <li>Sezoane</li>
          <li>Best Performance</li>
          <li>Juriu</li>
          <li>Concurenti</li>
          <li>Exclusiv Online</li>
          <li>Stiri</li>
          <li class="highlight">Voteaza</li>
          -->
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShowHeader',
  props: [
    'context',
    'banner'
  ],
  data () {
    return {
      menu: []
    }
  },
  mounted () {
    this.replacePaths()
  },
  methods: {
    replacePaths () {
      // Temporary replace paths until fixed in API
      const menu = this.context.menu
      this.menu = menu.map((item) => {
        let route
        switch (true) {
          case item.link.includes('_home'):
            route = item.link.replace('page', 'show')
            route = route.replace('_home/', '_home')
            item.route = route
            break
          case item.link.includes('_season'):
            route = item.link.replace('page', 'show')
            route = route.replace('_season', '/episodes')
            item.route = route
            break
          default:
            item.route = '/'
        }
        console.log('mounted item', item)
        return item
      })
    }
  }
}
</script>
<style scoped>
.container {
  width: 1235px;
  padding: 0;
  margin-top: -18px;
  margin-bottom: -70px;
  position: relative;
}
.backdrop {
  position: relative;
  height: 740px;
}

.backdrop, .backdrop-single {
  position: relative;
  height: 740px;
}

.backdrop-single {
  width: 100%;
}

.backdrop-single img {
  width: 100%;
}

.top, .left, .right {
  position: absolute;
}

.top {
  margin-right: auto;
  margin-left: auto;
  left: 0;
  right: 0;
  width: 1000px;
}

.left, .right {
  top: 0px;
}

.right {
  right: 0;
}

.header {
  position: relative;
  width: 975px;
  height: 385px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin: -609px auto 200px;
}

.row {
  background: white;
  position: absolute;
  bottom: -40px;
  width: 100%;
  margin: 0;
  height: 40px;
}

.thumb {
  float: left;
  position: relative;
  border: 3px solid white;
  left: 80px;
  top: -25px;
  margin-right: 100px;
}

ul {
  padding-top: 5px;
}

li {
  display: inline-block;
  font-size: 16px;
  margin-right: 25px;
  font-weight: 300;
  padding-top: 3px;
}

li a {
  color: #434343;
}

li.active {
  color: black;
  font-weight: 500;
  text-transform: uppercase;
}

li.highlight {
  background: #1f55ff;
  color: white;
  padding: 3px 10px;
  text-transform: uppercase;
  font-weight: 400;
  margin-right: 0;
}
</style>
