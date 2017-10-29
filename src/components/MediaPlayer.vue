<template>
  <div class="container">
    <MediaPlayerRelated :videoItems="items" :limit="relatedCount"/>
  </div>
</template>
<script>
import MediaPlayerRelated from './MediaPlayerRelated'

export default {
  name: 'MediaPlayer',
  components: {
    MediaPlayerRelated
  },
  props: [
    'items',
    'related-count'
  ]
}
</script>
<style scoped>
</style>
