<template>
<article>
<div class="section-wrapper" v-for="(item, index) in items">
  <router-link :to="'/article/' + item.id">
  <div class="section-container" :class="{
    'shadow-large': item.highlight,
    'shadow-small': !item.highlight && item.featured
    }">
    <section
    :class="{
    highlight: item.highlight,
    featured: item.featured
    }">
    <div class="thumb"
      :style="{'background-image': 'url(' + item.poster + ')' }"
      >
    </div>
    <h3 class="title" v-html="$options.filters.truncateOnWord(item.title, 80)"></h3>
    </section>
    <div v-if="item.featured" class="extra">
      <p v-html="$options.filters.truncateOnWord(item.synopsis, 60)"></p>
    </div>
  </div>
  </router-link>
  <section class="b" v-if="index === 3">
  <img src="../assets/temp/b-square.jpg">
  </section>
</div>
</article>
</template>
<script>
import { truncateOnWord } from '@/filters'
export default {
  name: 'ArticlesBlock',
  props: ['articles', 'chunkIndex'],
  data () {
    return {
      items: []
    }
  },
  methods: {
    processData (items) {
      let itemsOrder = items.slice(0, 6)
      itemsOrder = [items[1], items[0], items[3], items[2], items[5], items[4]]
      // console.log('Items unordered', items)
      // console.log('Items ordered', items)
      itemsOrder[1].featured = true
      itemsOrder[2].featured = true
      itemsOrder[2].highlight = this.chunkIndex === 1
      return itemsOrder
    }
  },
  mounted () {
    this.items = this.processData(this.articles)
  },
  filters: {
    truncateOnWord
  }
}
</script>
<style scoped>
article {
  column-width: 300px;
  column-gap: 20px;
}

.section-wrapper {
  padding-top: 15px;
  max-height: 530px;
}

.b {
  margin-top: 15px;
  margin-bottom: 0px;
}

.section-container {
  width: 300px;
  margin-bottom: 5px;
}

.section-wrapper:nth-child(2) {
  padding-bottom: 20px;
}

.shadow-large {
  box-shadow: 0px 2px 30px rgba(0,0,0,0.5);
}

.shadow-small {
  box-shadow: 0px 2px 3px rgba(0,0,0,0.5);
}

section {
  display: inline-block;
  background: black;
  width: 300px;
}

section .title {
  font-size: 15px;
  padding: 10px;
  margin: 0;
  height: 95px;
  line-height: 22px;
}

.highlight {
  background: #1f55ff;
}

.thumb {
  background-size: cover;
  background-repeat: no-repeat;
  width: 300px;
  height: 164px;
}

.featured .thumb {
  width: 300px;
  height: 233px;
}

.featured .title {
  font-size: 27px;
  line-height: 33px;
  padding: 20px;
  font-weight: 400;
  height: 205px;
}

.extra {
  font-size: 18px;
  font-weight: 300;
  padding: 10px;
  background: #131313;
  width: 300px;
  height: 68px;
}

a, a:hover {
  text-decoration: none;
  color: inherit;
}

</style>
