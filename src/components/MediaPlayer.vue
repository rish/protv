<template>
  <div v-if="items.length" class="container">
    <div class="main">
      <MediaPlayerVideo :item="items.slice(0,1)[0]"/>
    </div>
    <div class="sidebar">
      <MediaPlayerRelated :videoItems="items" :limit="relatedCount"/>
    </div>
  </div>
</template>
<script>
import MediaPlayerVideo from './MediaPlayerVideo'
import MediaPlayerRelated from './MediaPlayerRelated'

export default {
  name: 'MediaPlayer',
  components: {
    MediaPlayerVideo,
    MediaPlayerRelated
  },
  props: [
    'items',
    'related-count'
  ]
}
</script>
<style scoped>
.container {
  width: 933px;
  padding: 0;
}
.main, .sidebar {
  float: left;
}
</style>
