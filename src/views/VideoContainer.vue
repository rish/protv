<template>
<div id="video" v-if="areas.length">
  <div v-for="(area, index) in areas">
    <div v-if="area.aclass  === 'video'">
      <MediaPlayer
      :items="area.items"
      :related-count=11
      showSponsored="false"
      :extended="true"
      />
    </div>
    <div v-if="area.aclass === 'section' && !area.box">
      <ProCarousel
        :title="area.title"
        :title-color="area.title_color"
        :title-icon="area.icon"
        :items="area.items"
        :grid="area.grid"
        :background="area.background"
        :banner="area.banner"
        :banner-placeholder="area.banner_placeholder"
        :button-color="area.play_bt_color"
        meta="true"
        synopsis="true"
        playIcon="true"
        />
    </div>
  </div>
</div>
</template>
<script>
/* global axios */
import MediaPlayer from '@/components/MediaPlayer'
import ProCarousel from '@/components/ProCarousel'

export default {
  name: 'VideoContainer',
  props: [
    'context'
  ],
  components: {
    MediaPlayer,
    ProCarousel
  },
  data () {
    return {
      areas: [],
      localContext: {}
    }
  },
  mounted () {
    this.getData()
  },
  watch: {
    '$route' (to, from) {
      this.getData()
    }
  },
  methods: {
    getData () {
      const url = '/itempage/video/' + this.$route.params.id + '/'
      axios.get(url).then((response) => {
        console.log(response)
        this.areas = response.data.content.areas
        this.getContext(response.data.head.context)
      })
    },
    getContext (contextPath) {
      const url = contextPath
      axios.get(url).then((response) => {
        console.log(response)
        this.localContext = response.data.context
      })
    }
  }
}
</script>
<style scoped>
.plugs {
  padding: 50px 0;
}
</style>
