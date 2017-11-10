<template>
<div class="articles-container">
  <div class="container">
    <div v-for="chunk in chunks.slice(0,index)">
      <ArticlesBlock
        :articles="chunk"
        :chunkIndex="index"
      />
    </div>
    <div class="text-center">
      <a href="#"
        class="articles-btn"
        v-on:click.prevent="loadMore(loadMoreUrl)"
        :style="{ 'background-color': context.conf.colors[loadMoreColor] }"
        >{{ loadMoreText }}</a>
    </div>
  </div>
</div>
</template>
<script>
/* global axios */
import { chunkArray } from '@/utils'
import ArticlesBlock from '@/components/ArticlesBlock'

export default {
  name: 'Articles',
  props: [
    'context',
    'articles',
    'loadMoreText',
    'loadMoreColor',
    'loadMoreLink'
  ],
  components: {
    ArticlesBlock
  },
  data () {
    return {
      items: [],
      chunks: [],
      loadMoreUrl: this.loadMoreLink,
      loadMoreCount: 0,
      loadMoreIncrement: 20,
      index: 1,
      chunkSize: 6
    }
  },
  methods: {
    loadMore (url) {
      this.index += 1
      const apiUrl = 'http://protv.vidnt.com' + url
      axios.get(apiUrl).then((response) => {
        // console.log(JSON.parse(JSON.stringify(response.data)))

        let articles = this.items
        articles = articles.concat(response.data.items)
        this.items = articles
        this.chunks = chunkArray(this.items, this.chunkSize)

        this.updateLoadMoreUrl()
      })
    },
    updateLoadMoreUrl () {
      // Manually update the load more url
      const incrementCount = this.loadMoreCount + this.loadMoreIncrement
      this.loadMoreUrl = this.loadMoreUrl.replace('start=' + this.loadMoreCount, 'start=' + incrementCount)
      this.loadMoreCount += this.loadMoreIncrement
    }
  },
  mounted () {
    this.items = this.articles
    this.chunks = chunkArray(this.articles, this.chunkSize)

    this.updateLoadMoreUrl()
  },
  watch: {
    // items (items) {
    //   this.chunks = chunkArray(items, this.chunkSize)
    // }
  }
}
</script>
<style lang="scss" scoped>

.articles-container {
  background: #131313;
  overflow: auto;
  padding: 60px 0;
}

.container {
  width: 976px;
  @include media('<=tablet') {
    width: 100%;
  }
}
.articles-btn {
  padding:13px;
  background: #1e55d5;
  max-width:120px;
  font-size:12px;
  font-weight:400;
  color:white;
  text-align:center;
  display: inline-block;
  margin-top: 50px;
}

a, a:hover {
  text-decoration: none;
  color: inherit;
}

</style>
