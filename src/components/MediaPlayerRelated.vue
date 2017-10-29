<template>
  <div id="related">
    <div v-for="item in items.slice(0,limit+1)">
      <MediaPlayerRelatedBlock :item="item"/>
    </div>
  </div>
</template>
<script>
import MediaPlayerRelatedBlock from './MediaPlayerRelatedBlock'

export default {
  name: 'MediaPlayerRelated',
  components: {
    MediaPlayerRelatedBlock
  },
  data () {
    return {
      items: []
    }
  },
  props: [
    'videoItems',
    'limit'
  ],
  mounted () {
    this.processData()
  },
  watch: {
    videoItems: function (items) {
      this.processData()
    }
  },
  methods: {
    processData () {
      this.items = this.videoItems
      // Populate some vm data here for now
      if (this.videoItems.length) {
        this.items = this.items.filter(item => item.thumbnail)
        this.items[0].active = true
        this.items[3].sponsored = true
      }
    }
  }
}
</script>
<style scoped>
#related {
  background: white;
  width: 300px;
}
</style>
