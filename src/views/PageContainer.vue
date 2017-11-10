<template>
<div id="page">
  <div id="site-header" v-if="localContext.hasOwnProperty('site_header')">
    <SiteHeader
      :buttons="localContext.site_header.buttons"
      :icon="localContext.site_header.icon"
      :media="localContext.site_header.media"
      :menu="localContext.site_header.menu"
      :banner="areas[0].banner_placeholder"
    />
  </div>
  <div id="areas" v-if="areas.length">
    <Areas :areas="areas" :context="context" />
  </div>
</div>
</template>
<script>
/* global axios */

import SiteHeader from '@/components/SiteHeader'
import Areas from '@/components/Areas'

export default {
  name: 'PageContainer',
  components: {
    SiteHeader,
    Areas
  },
  props: [
    'context'
  ],
  data () {
    return {
      areas: [],
      localContext: {}
    }
  },
  mounted () {
    console.log('page')
    this.getData()
  },
  watch: {
    '$route' (to, from) {
      this.getData()
    }
  },
  methods: {
    getData () {
      const url = '/page/' + this.$route.params.name + '/'
      axios.get(url).then((response) => {
        console.log('Page response', response)
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
