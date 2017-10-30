<template>
<div>
  <img src="../assets/share/facebook.png">
  <img src="../assets/share/twitter.png">
  <img class="last" src="../assets/share/google-plus.png">
</div>
</template>
<script>
export default {
  name: 'Share'
}
</script>
<style scoped>
div {
  padding: 30px 0;
}
img {
  display: inline-block;
  margin-right: 10px;
}
.last {
  margin: 0;
}
</style>
