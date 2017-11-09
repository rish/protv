<template>
<div id="home" v-if="areas.length">
  <div v-for="(area, index) in areas">
    <div v-if="area.aclass  === 'video'">
      <VOD :content="area" :context="context" />
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
        :play-button-color="area.play_bt_color"
        :buttons="area.buttons"
        meta="true"
        synopsis="true"
        playIcon="true"
        :context="context"
        />
    </div>
    <div v-if="area.box === 'articles'">
      <Articles
        :context="context"
        :articles="area.items"
        :load-more-text="area.more_bt_text"
        :load-more-color="area.more_bt_color"
        :load-more-link="area.link"
      />
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
  name: 'Home',
  props: [
    'context'
  ],
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
      const url = '/page/home/'
      axios.get(url).then((response) => {
        console.log(response)
        this.areas = response.data.content.areas
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
