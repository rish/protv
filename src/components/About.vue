<template>
<div id="about" v-if="context.hasOwnProperty('conf')">
  <div class="b top" v-if="bannerPlacement === 'top'">
    <img :src="banner">
  </div>
  <div class="container">
    <div v-html="item.content"></div>
  </div>
</div>
</template>
<script>
export default {
  name: 'About',
  props: [
    'context',
    'item',
    'bannerPlacement',
    'banner'
  ]
}
</script>
<style>
#about .container {
  width: 1000px;
  margin-top: 50px;
}
.b {
  text-align: center;
}

.b.top img {
  width: 1000px;
  height: 120px;
}
</style>
