<template>
<div v-if="!barebones" class="block" :class="{active: item.active, sponsored: item.sponsored}">
  <router-link :to="'/video/' + item.id">
    <MediaPlayerRelatedThumb :image="item.thumbnail" :item="item" :active="item.active" />
    <MediaPlayerRelatedTitle :title="item.title" :active="item.active"/>
    <img v-if="item.sponsored" class="logo" src="../assets/temp/sponsored-logo.png">
  </router-link>
</div>
<div v-else class="block">
  <router-link :to="'/video/' + item.id">
    <MediaPlayerRelatedThumb :image="item.thumbnail" :item="item" />
    <MediaPlayerRelatedTitle :title="item.title"/>
  </router-link>
</div>
</template>
<script>
import MediaPlayerRelatedThumb from './MediaPlayerRelatedThumb'
import MediaPlayerRelatedTitle from './MediaPlayerRelatedTitle'

export default {
  name: 'MediaPlayerRelatedBlock',
  components: {
    MediaPlayerRelatedThumb,
    MediaPlayerRelatedTitle
  },
  props: [
    'item',
    'barebones'
  ]
}
</script>
<style scoped>
a:hover, a:active, a:focus {
  text-decoration: none;
}
.block a {
  overflow: auto;
  display: block;
  height: 100%;
}
.block {
  clear: both;
  overflow: auto;
  position: relative;
}
.block:hover {
  background: #efefef;
}
.active, .active:hover {
  background: #001968;
}

.sponsored {
  background: #efefef;
  padding-bottom: 20px;
}

.logo {
  position: absolute;
  bottom: 10px;
}

</style>
