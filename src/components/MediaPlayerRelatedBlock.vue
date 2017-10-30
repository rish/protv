<template>
  <div v-if="!barebones" class="block" :class="{active: item.active, sponsored: item.sponsored}">
    <MediaPlayerRelatedThumb :image="item.thumbnail" :item="item" :active="item.active" />
    <MediaPlayerRelatedTitle :title="item.title" :active="item.active"/>
    <img v-if="item.sponsored" class="logo" src="../assets/temp/sponsored-logo.png">
  </div>
  <div v-else class="block">
    <MediaPlayerRelatedThumb :image="item.thumbnail" :item="item" />
    <MediaPlayerRelatedTitle :title="item.title"/>
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
.block {
  clear: both;
  overflow: auto;
  position: relative;
}
.active {
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
