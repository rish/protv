<template>
<div id="page" v-if="context">
  <div id="site-header" v-if="localContext.hasOwnProperty('site_header')">
    <SiteHeader
      :buttons="localContext.site_header.buttons"
      :icon="localContext.site_header.icon"
      :media="localContext.site_header.media"
      :menu="localContext.site_header.menu"
      :banner="areas[0].banner_placeholder"
    />
  </div>
  <div id="areas" v-if="!loading">
    <Areas :areas="areas" :context="context" />
  </div>
  <div v-if="loading && context.hasOwnProperty('conf')" class="loading">
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
  }
}
</script>
<style scoped>
.loading .v-spinner {
  text-align: center;
  padding: 100px;
}
</style>
