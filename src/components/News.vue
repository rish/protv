<template>
<div id="news">
  <div class="container">
    <div class="b top" v-if="bannerPlacement === 'top'">
      <img :src="banner" width="1000" height="120">
    </div>

    <img :src="item.poster">

    <div class="main">
      <h3 class="title" v-html="item.title"></h3>
      <div class="text" v-html="item.content"></div>
    </div>

  </div>

</div>
</template>
<script>
export default {
  name: 'News',
  props: [
    'context',
    'title',
    'item',
    'bannerPlacement',
    'banner'
  ]
}
</script>
<style scoped>
#news > .container {
  margin-bottom: 10px;
  width: 999px;
  padding: 0;
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

</style>
