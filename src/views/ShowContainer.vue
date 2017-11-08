<template>
<div id="show" v-if="areas.length && localContext.hasOwnProperty('site_header')">
  <ShowHeader
  :context="localContext.site_header"
  :banner="areas[0].banner === 'inline' ? areas[0].banner_placeholder : null"
  />
  <div v-for="(area, index) in areas">
    <div v-if="area.aclass  === 'video_flow'">
      <MediaPlayer
      :items="area.items"
      related-count="6"
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
    <div v-if="area.box === 'articles'">
      <Articles :articles="area.items" :loadMoreLink="area.link"/>
    </div>
    <div class="plugs" v-if="area.aclass === 'section_external'">
      <Plugs :plugs="area" />
    </div>
  </div>
</div>
</template>
<script>
/* global axios */
import ShowHeader from '@/components/ShowHeader'
import MediaPlayer from '@/components/MediaPlayer'
import ProCarousel from '@/components/ProCarousel'
import Articles from '@/components/Articles'

export default {
  name: 'ShowContainer',
  props: [
    'context'
  ],
  components: {
    ShowHeader,
    MediaPlayer,
    ProCarousel,
    Articles
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
  methods: {
    getData () {
      const url = '/page/' + this.$route.params.name + '/'
      axios.get(url).then((response) => {
        console.log(response)
        this.areas = response.data.content.areas
        this.getContext(response.data.head.context)
      })
    },
    getContext (contextPath) {
      const url = contextPath
      axios.get(url).then((response) => {
        this.localContext = response.data.context
      })
    }
  }
}
</script>
<style scoped>
</style>
