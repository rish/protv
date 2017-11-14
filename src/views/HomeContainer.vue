<template>
<div id="home">
  <div v-if="!loading">
    <div v-for="(area, index) in areas">
      <div v-if="area.aclass  === 'video'">
        <VOD :content="area" :context="context" />
      </div>
      <div v-if="area.aclass === 'section' && !area.box">
        <ProCarousel
          :title="area.title"
          :main-color="area.main_color"
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
  <div v-if="loading && context.hasOwnProperty('conf')" class="loading">
    <pulse-loader :loading="loading" :color="context.conf.colors.blue" size="15px"></pulse-loader>
  </div>
</div>
</template>
<script>
/* global axios */
import VOD from '@/components/VOD'
import ProCarousel from '@/components/ProCarousel'
import Articles from '@/components/Articles'
import Plugs from '@/components/Plugs'

import PulseLoader from 'vue-spinner/src/PulseLoader'

export default {
  name: 'Home',
  props: [
    'context'
  ],
  components: {
    VOD,
    ProCarousel,
    Articles,
    Plugs,
    PulseLoader
  },
  data () {
    return {
      areas: [],
      loading: true
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
        this.loading = false
      })
    }
  }
}
</script>
<style scoped>
.loading {
  text-align: center;
  padding: 100px;
}
.plugs {
  padding: 50px 0;
}
</style>
