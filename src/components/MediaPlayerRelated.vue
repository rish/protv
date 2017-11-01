<template>
  <div id="related">
    <div v-for="item in items.slice(0,limitCount())">
      <MediaPlayerRelatedBlock :item="item" :barebones="barebones"/>
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
    'limit',
    'barebones'
  ],
  mounted () {
    console.log('related', this.videoItems)
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
        this.items = this.items.filter(item => item.poster)
        if (!this.barebones) {
          this.items.shift()
          this.items[0].active = true
          // this.items[3].sponsored = true
        }
      }
    },
    limitCount () {
      let limitCount = this.barebones ? this.limit : this.limit + 1
      return limitCount
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
