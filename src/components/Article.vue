<template>
<div id="article" v-if="context">
  <div class="container">
    <div class="b top">
      <img :src="bannerTop" width="1000" height="120">
    </div>
    <div class="main">
      <img class="img-responsive" :src="content.poster">
      <h3 class="title" v-html="content.title"></h3>
      <!-- There is no subheading in the API
      <h4 class="subheading" v-html="mock.subheading"></h4>
      -->
      <div class="text" v-html="content.content"></div>
    </div>
    <div class="sidebar">
      <ArticleSidebar
        :context="context"
        :items="sidebarItems"
        :title="sidebarTitle"
      />
    </div>
    <div class="b bottom">
      <img :src="bannerBottom" width="970" height="250">
    </div>
  </div>
</div>
</template>
<script>
import ArticleSidebar from '@/components/ArticleSidebar'
import { chunkArray } from '@/utils'

export default {
  name: 'ArticleView',
  components: {
    ArticleSidebar
  },
  props: [
    'context',
    'content',
    'title',
    'bannerPlacement',
    'banner',
    'sidebarItems',
    'sidebarTitle',
    'bannerTop',
    'bannerBottom'
  ],
  data () {
    return {
      // content: this.items[0],
      // sidebar_content: this.items[1]
    }
  },
  methods: {
    chunkArray
  }
}
</script>
<style scoped>
#article {
  background: white;
  color: black;
}
#article > .container {
  margin-bottom: 70px;
  width: 999px;
  padding: 0;
  overflow: hidden;
  padding-top: 50px;
  padding-bottom: 100px;
}

.main {
  width: 675px;
  float: left;
}

.sidebar {
  width: 300px;
  float: left;
  margin-left: 20px;
}

.sidebar .heading {
  text-transform: uppercase;
  font-weight: 300;
  font-size: 25px;
  margin-top: 0;
}

.container-wide {
  width: 1100px;
  margin: 0 auto;
  padding-bottom: 30px;
}
.title {
  font-size: 35px;
  font-weight: 500;
  margin-top: 10px;
}
.subheading {
  font-size: 25px;
  font-weight: 500;
  margin-top: 10px;
}

.text {
  font-size: 20px;
  font-weight: 300;
}

.text >>> a {
  color: red;
}

.text >>> img {
  max-width: 100%;
  height: auto;
}

img.article {
  margin: 30px 0;
}

.blocks {
  padding-bottom: 20px;
  overflow: auto;
  width: 960px;
  margin: 0 auto;
}

.block {
  width: 300px;
  float: left;
  background: #131313;
  margin: 10px;
  height: 280px;
}

.block .title {
  color: #e3e3e3;
  font-size: 18px;
  padding: 10px;
}

.no-bg {
  background: none;
}
</style>
