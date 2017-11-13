<template>
<div class="container"
  :class="{
  'b-inline': bannerPlacement === 'inline',
  ['page-' + type]: true
  }">
  <div v-if="bannerPlacement === 'inline'" class="backdrop-single" :class="{ inline: bannerPlacement === 'inline'}">
    <img :src="banner"/>
  </div>
  <div class="header"
    :style="{ 'background-image': media[0].itype === 'item_mov_vod' ? 'url(' + media[0].poster + ')' :'url(' + media[0] + ')' }"
    >
    <div class="menu row">
      <div class="thumb">
        <img v-if="type === 'show'" :src="icon" width="100" height="100">
        <img v-else :src="icon" width="200" height="200">
      </div>
      <ul>
        <li v-for="item in menu">
          <router-link :to="item.link" :class="{active: item.link === $route.path}">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'SiteHeader',
  props: [
    'context',
    'buttons',
    'icon',
    'media',
    'menu',
    'banner',
    'banner-placement',
    'type'
  ],
  mounted () {
    console.log('site header', this)
  }
}
</script>
<style scoped>
.container {
  width: 1235px;
  padding: 0;
  position: relative;
  margin: 0 auto;
}

.b-inline .backdrop-single {
  width: 100%;
  position: absolute;
  height: 740px;
}

.backdrop-single img {
  width: 100%;
}


.header {
  position: relative;
  width: 975px;
  height: 400px;
  top: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-bottom: 80px;
}

.b-inline .header {
  margin-bottom: 200px;
  top: 150px;
  height: 385px;
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

.page-channel .thumb {
  top: -180px;
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

li a.active {
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
