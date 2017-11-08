<template>
<div id="home">
  <div v-for="(area, index) in areas">
    <div v-if="area.itype === 'item_mov_vod'">
      show vod component here
    </div>
    <div v-if="area.itype === 'section'">
      <ProCarousel
        :title="area.title"
        :items="area.items"
        :grid="area.grid"
        :background="area.background"
        :banner="area.banner"
        :banner-placeholder="area.banner_placeholder"
        meta="true"
        synopsis="true"
        playIcon="true"
        />
        <!--
      <pre>
        {{ area }}
      </pre>
        -->
    </div>
    <div v-if="area.box === 'articles'">
      <Articles :articles="area.items" :loadMoreLink="area.link"/>
    </div>
  </div>
</div>
</template>
<script>
/* global axios */
import ProCarousel from '@/components/ProCarousel'
import Articles from '@/components/Articles'

export default {
  name: 'Home',
  components: {
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
