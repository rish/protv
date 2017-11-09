<template>
<div id="button">
  <router-link
    class="link"
    :to="target"
    :style="{
      color: textColor,
      backgroundColor: backgroundColor,
      border: '1px solid ' + textColor
    }"
    >
    {{ text }}
  </router-link>
</div>
</template>
<script>
import { hexToRgb, rgbToString } from '@/utils' // eslint-disable-line no-unused-vars

export default {
  name: 'ProButton',
  props: [
    'context',
    'target',
    'background',
    'color',
    'text'
  ],
  data () {
    let colors

    if (this.context.hasOwnProperty('conf') && this.context.conf.hasOwnProperty('colors')) {
      colors = this.context.conf.colors
    }

    return {
      textColor: colors.hasOwnProperty(this.color) ? colors[this.color] : this.color,
      backgroundColor: colors.hasOwnProperty(this.background) ? colors[this.background] : this.background
    }
  },
  watch: {
    context (val) {
      console.log('got context', val)
    }
  },
  computed: {
    // TODO: make stuff rgbified
    rgbStringify (val) {
      console.log('stringify', val)
    }
  }
}
</script>
<style scoped>
.link {
  display: inline-block;
  padding: 10px;
}
.link:hover {
  text-decoration: none;
}
</style>
