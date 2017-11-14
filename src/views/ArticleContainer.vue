<template>
<div id="article-page" v-if="localContext.hasOwnProperty('conf')">
  <div id="article" v-if="!loading">
    <ArticleView
      :context="context"
      :content="areas[0].items[0]"
      :sidebar-items="areas[1].items"
    />
  </div>
  <div v-if="loading && context.hasOwnProperty('conf')" class="loading">
    <pulse-loader :loading="loading" :color="context.conf.colors.blue" size="15px"></pulse-loader>
  </div>
</div>
</template>
<script>
/* global axios */
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import ArticleView from '@/components/Article'

export default {
  name: 'ArticleContainer',
  components: {
    PulseLoader,
    ArticleView
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
      const url = '/itempage/article/' + this.$route.params.id + '/'
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
  }
}
</script>
<style scoped>
#article-page {
  height: 100%;
  position: relative;
  background: white;
  margin-top: -70px;
  margin-bottom: -70px;
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
