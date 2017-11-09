<template>
<div class="articles-container">
  <div class="container">
    <div v-for="articles in chunks.slice(0,index)">
      <ArticlesBlock
        :articles="articles"
      />
    </div>
    <div class="text-center">
      <a href="#" class="articles-btn" v-on:click.prevent="loadMore(loadMoreUrl)">Mai multe stiri</a>
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
  props: ['articles', 'loadMoreLink'],
  components: {
    ArticlesBlock
  },
  data () {
    return {
      items: [],
      chunks: [],
      loadMoreUrl: this.loadMoreLink,
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
        this.loadMoreUrl = response.data.head.link
        let articles = this.items
        articles = articles.concat(response.data.items)
        this.items = articles
      })
    }
  },
  mounted () {
    this.chunks = chunkArray(this.articles, this.chunkSize)
  },
  watch: {
    items (items) {
      this.chunks = chunkArray(this.items, this.chunkSize)
    }
  }
}
</script>
<style scoped>

.articles-container {
  background: #131313;
  overflow: auto;
  padding: 60px 0;
}

.container {
  width: 976px;
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
