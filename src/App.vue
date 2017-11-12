<template>
  <div id="app">
    <SidebarNav :active="sidebarNavActive"
      :context="context"
      v-on:toggleSidebar="toggleActive"
    >
      <AppHeader :context="context"
        v-on:toggleSidebar="toggleActive"
      />
      <div id="content">
        <router-view :context="context" />
      </div>
      <AppFooter :context="context" />
    </SidebarNav>
  </div>
</template>

<script>
/* globals axios */
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'
import SidebarNav from '@/components/SidebarNav'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
    SidebarNav
  },
  data () {
    return {
      context: {},
      sidebarNavActive: false
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
    },
    toggleActive () {
      this.sidebarNavActive = !this.sidebarNavActive
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
  height: 100%;
}
#content {
  padding-top: 150px;
  height: 100%;
}
</style>
