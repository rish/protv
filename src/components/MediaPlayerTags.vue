<template>
<div
  class="tags"
  >
  <span class="tag" v-for="tag in tags">
    {{ tag }}
  </span>
</div>
</template>
<script>
export default {
  name: 'MediaPlayerTags',
  props: [
    'tags'
  ]
}
</script>
<style scoped>
.tags {
  margin-top: 5px;
}
.tag {
  background: #efefef;
  color: black;
  padding: 2px 5px;
  font-size: 10px;
  font-weight: 500;
  margin-right: 5px;
}
</style>
