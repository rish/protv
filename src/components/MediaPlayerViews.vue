<template>
<div
  class="views"
  >
  <img class="icon" src="../assets/icons/views.png">
  {{ item.views }} views
</div>
</template>
<script>
export default {
  name: 'MediaPlayerViews',
  props: [
    'item'
  ]
}
</script>
<style scoped>
.views {
  font-size: 12px;
  font-weight: 500;
  padding: 5px 10px;
  position: relative;
}

.icon {
  position: relative;
  top: -1px;
}
</style>
