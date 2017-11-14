<template>
<div id="article" v-if="context">
  <div class="container">
    <div class="b" :class="{ [bannerPlacement]: true}">
      <img :src="banner">
    </div>

    <div class="poster">
      <img :src="content.poster">
    </div>

    <div class="main">
      <h3 class="title" v-html="content.title"></h3>
      <div class="text" v-html="content.content"></div>
    </div>
  </div>

</div>
</template>
<script>
export default {
  name: 'Article',
  props: [
    'context',
    'items',
    'title',
    'bannerPlacement',
    'banner'
  ],
  data () {
    return {
      content: this.items[0]
    }
  },
  watch: {
    items (newValue) {
      console.log('items', newValue)
    }
  },
  mounted () {
    console.log(this.items)
  }
}
</script>
<style scoped>
#article > .container {
  margin-bottom: 10px;
  width: 999px;
  padding: 0;
}

.poster img {
  width: 100%;
}

.title {
  font-size: 35px;
  font-weight: 500;
  margin-top: 10px;
}

.text {
  font-size: 16px;
  font-weight: 300px;
}

.text >>> a {
  /*color: #487bec;*/
  color: white;
}

.text >>> img {
  max-width: 100%;
  height: auto;
}

.text >>> iframe {
  background: white;
}

.b {
  text-align: center;
  margin-bottom: 50px;
}

.b.top {
  width: 1000px;
  height: 120px;
}


</style>
