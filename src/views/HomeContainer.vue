<template>
<div id="home" v-if="areas.length">
  <div v-for="(area, index) in areas">
    <div v-if="area.itype === 'item_mov_vod'">
      <VOD :content="area" />
    </div>
    <div v-if="area.itype === 'section'">
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
  </div>
</div>
</template>
<script>
/* global axios */
import VOD from '@/components/VOD'
import ProCarousel from '@/components/ProCarousel'
import Articles from '@/components/Articles'

export default {
  name: 'Home',
  components: {
    VOD,
    ProCarousel,
    Articles
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
      const url = 'http://protv.vidnt.com/page/home/'
      axios.get(url).then((response) => {
        console.log(response)
        this.areas = response.data.content.areas
      })
    }
  }
}
</script>
