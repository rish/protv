<template>
<div :style="{padding: padding + 'px 0'}">
  <img :src="bannerSrc">
</div>
</template>
<script>
export default {
  name: 'Banner',
  props: ['type', 'padding'],
  computed: {
    bannerSrc () {
      // Require with part of path for webpack loader to computer
      let src = require('../assets/temp/b-' + this.type + '.jpg')
      return src
    }
  }
}
</script>
<style scoped>
img {
  display: block;
  margin: 0 auto;
}
</style>
