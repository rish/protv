<template>
  <div class="container">
    <article>
      <div class="section-wrapper" v-for="(item, index) in items">
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
            <h3 class="title" v-html="item.title"></h3>
          </section>
          <div v-if="item.featured" class="extra">
            <p v-html="$options.filters.truncateOnWord(item.synopsis, 70)"></p>
          </div>
        </div>
        <section class="b" v-if="index === 3">
          <img src="../assets/temp/b-square.jpg">
        </section>
      </div>
    </article>
    <div class="text-center">
      <a href="#" class="articles-btn">Mai multe stiri</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Articles',
  props: ['articles'],
  data () {
    return {
      items: []
    }
  },
  methods: {
    processData (items) {
      items = items.slice(0, 6)
      items[1].featured = true
      items[2].featured = true
      items[2].highlight = true
      return items
    }
  },
  mounted () {
    this.items = this.processData(this.articles)
    console.log('Articles', JSON.parse(JSON.stringify(this.items)))
    console.log(this.$options)
  },
  filters: {
    truncateOnWord (str, limit) {
      var trimmable = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF'
      var reg = new RegExp('(?=[' + trimmable + '])')
      var words = str.split(reg)
      var count = 0
      var returnWords = words.filter(function (word) {
        count += word.length
        return count <= limit
      }).join('')
      if (str.length > limit) {
        returnWords = returnWords + ' ...'
      }
      return returnWords
    }
  }
}
</script>
<style scoped>
.container {
  width: 976px;
}

article {
  column-width: 300px;
  column-gap: 20px;
}

.section-wrapper {
  padding-top: 15px;
}

.b {
  margin-top: 15px;
  margin-bottom: 0px;
}

.section-container {
  width: 300px;
  margin-bottom: 5px;
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
}

.extra {
  font-size: 18px;
  font-weight: 300;
  padding: 10px;
  background: #131313;
  width: 300px;
  height: 78px;
}

.b {
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

</style>
