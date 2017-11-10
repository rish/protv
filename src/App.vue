<template>
  <div id="app">
    <AppHeader :context="context"/>
    <div id="content">
      <router-view :context="context" />
    </div>
    <AppFooter :context="context" />
  </div>
</template>

<script>
/* globals axios */
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
      context: {}
    }
  },
  mounted () {
    this.getContext()
  },
  methods: {
    getContext () {
      const url = '/context/home/'
      axios.get(url).then((response) => {
        this.context = response.data.context
      })
    }
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background: black;
  overflow: auto;
}
#content {
  padding-top: 150px;
}
</style>
