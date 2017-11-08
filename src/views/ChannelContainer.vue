<template>
<div id="channel" v-if="areas.length">
  <div v-for="(area, index) in areas">
    <div v-if="area.aclass  === 'video'">
      <VOD :content="area" />
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
import VOD from '@/components/VOD'
import ProCarousel from '@/components/ProCarousel'
import Articles from '@/components/Articles'
import Plugs from '@/components/Plugs'

export default {
  name: 'ChannelContainer',
  components: {
    VOD,
    ProCarousel,
    Articles,
    Plugs
  },
  data () {
    return {
      areas: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      const url = 'http://protv.vidnt.com/page/protv_channel_home/'
      const _this = this
      axios.get(url).then((response) => {
        console.log('Channel', JSON.parse(JSON.stringify(response.data)))
        _this.areas = response.data.content.areas
        _this.getContext(response.data.head.context)
      })
    },
    getContext (contextPath) {
      const url = 'http://protv.vidnt.com' + contextPath
      axios.get(url).then((response) => {
        console.log('Context', JSON.parse(JSON.stringify(response.data)))
      })
    }
  }
}
</script>
<style scoped>
</style>
