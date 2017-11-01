<template>
<h3 class="title" :class="{active: active}">
  {{ title | truncateOnWord(40) }}
</h3>
</template>
<script>
import { truncateOnWord } from '../filters'
export default {
  name: 'MediaPlayerRelatedTitle',
  props: [
    'title',
    'active'
  ],
  filters: {
    truncateOnWord
  }
}
</script>
<style scoped>
.title {
  font-size: 14px;
  color: #3a3a3a;
  font-weight: 300;
  padding-right: 10px;
  text-decoration: none;
}

.title:hover, .title:active {
  color: black;
  text-decoration: none;
}
.active {
  color: white;
  font-weight: 500;
}
</style>
