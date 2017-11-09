<template>
<div id="page">
</div>
</template>
<script>
/* global axios */

export default {
  name: 'PageContainer',
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
        console.log(response)
        // this.areas = response.data.content.areas
        // this.getContext(response.data.head.context)
      })
    },
    getContext (contextPath) {
      const url = contextPath
      axios.get(url).then((response) => {
        console.log(response)
        this.localContext = response.data.context
      })
    }
  }
}
</script>
<style scoped>
</style>
