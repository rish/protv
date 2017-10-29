<template>
  <div id="channel" v-if="home.length">
    <div class="container">
      <Banner type="horizontal" padding="10"/>
    </div>

    <ChannelHeader/>

    <div class="fluid-container promo-wide">
    </div>

    <div class="container">
      <Banner type="horizontal" padding="10"/>
    </div>

    <div class="container">
      <ProCarousel title="Newest Video" :items="home[3].items" id="top-viewed" :grid="home[3].grid" meta="true" synopsis="true"/>

      <ProCarousel title="Top Video" :items="home[3].items" id="related" :grid="home[3].grid" meta="true" synopsis="true"/>
    </div>

    <div class="fluid-container"
      :style="{'background-image': 'url(' + require('../assets/bg2.jpg') + ')'}"
      >
      <div class="container">
        <ProCarousel title="Recommended For You" :items="home[6].items" id="recommended" :grid="home[6].grid" meta="true" synopsis="true"/>
      </div>
    </div>

    <div class="container">
      <Banner type="large" padding="30"/>
    </div>

    <Articles :articles="home[8].items"/>
  </div>
</template>
<script>
import ChannelHeader from '@/components/ChannelHeader'
import Articles from '@/components/Articles'
import Banner from '@/components/Banner'
import ProCarousel from '@/components/ProCarousel'

export default {
/* global axios */

  name: 'Channel',
  components: {
    ChannelHeader,
    Articles,
    Banner,
    ProCarousel
  },
  data () {
    return {
      content: {},
      video: {},
      home: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      // const url = 'http://protv.vidnt.com/page/' + this.$route.params.name + '/'
      const home = 'http://protv.vidnt.com/page/home/'
      axios.get(home).then((response) => {
        // console.log(JSON.parse(JSON.stringify(response.data)))
        this.home = response.data.content.areas
      })
    }
  }
}
</script>
<style scoped>
.promo-wide {
  background: url('../assets/temp/channel/promo-wide.jpg');
  height: 193px;
  background-position: center center;
  margin: 30px 0;
}
</style>
