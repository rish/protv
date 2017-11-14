<template>
<div id="page">
  <div v-if="context.hasOwnProperty('conf')">
    <div class="b top" v-if="areas[0].banner === 'top'">
      <img :src="areas[0].banner_placeholder" width="1000" height="120">
    </div>
    <div id="site-header" v-if="localContext.hasOwnProperty('site_header')">
      <SiteHeader
        :buttons="localContext.site_header.buttons"
        :icon="localContext.site_header.icon"
        :media="localContext.site_header.media"
        :menu="localContext.site_header.menu"
        :banner-placement="areas[0].banner"
        :banner="areas[0].banner_placeholder"
        :type="headerPageType"
      />
    </div>
    <div id="areas" v-if="!loading">
      <Areas :areas="areas" :context="context" />
    </div>
  </div>
  <div v-if="loading" class="loading">
    <pulse-loader :loading="loading" :color="context.conf.colors.blue" size="15px"></pulse-loader>
  </div>
</div>
</template>
<script>
/* global axios */
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

import SiteHeader from '@/components/SiteHeader'
import Areas from '@/components/Areas'

export default {
  name: 'PageContainer',
  components: {
    SiteHeader,
    Areas,
    PulseLoader
  },
  props: [
    'context'
  ],
  data () {
    return {
      loading: true,
      areas: [],
      head: {},
      localContext: {}
    }
  },
  mounted () {
    this.getData()
  },
  watch: {
    '$route' (to, from) {
      this.loading = true
      this.getData()
    }
  },
  methods: {
    getData () {
      const url = '/page/' + this.$route.params.name + '/'
      axios.get(url).then((response) => {
        this.areas = response.data.content.areas
        this.head = response.data.head
        this.getContext(response.data.head.context)
      })
    },
    getContext (contextPath) {
      const url = contextPath
      axios.get(url).then((response) => {
        this.localContext = response.data.context
        this.loading = false
      })
    }
  },
  computed: {
    headerPageType () {
      if (this.head.template.includes('channel')) {
        return 'channel'
      } else {
        return 'show'
      }
    }
  }
}
</script>
<style scoped>
#page {
  height: 100%;
  position: relative;
}
.loading {
  text-align: center;
  padding: 100px 0;
  height: 1px;
  margin: auto;
  position: relative;
  top: 0; left: 0; bottom: 0; right: 0;
}

/* BANNERS */
.b {
  text-align: center;
}
</style>
