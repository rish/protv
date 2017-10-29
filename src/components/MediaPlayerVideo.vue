<template>
<div
  class="video"
  :style="{'background-image': 'url(' + item.poster + ')'}"
  >
  <div class="play-icon">
    <img src="../assets/icons/video-play.png">
  </div>
</div>
</template>
<script>
import { duration } from '../filters'
export default {
  name: 'MediaPlayerVideo',
  props: [
    'item'
  ],
  filters: {
    duration
  }
}
</script>
<style scoped>
.video {
  width: 630px;
  height: 355px;
  background-size: cover;
  background-position: center center;
  position: relative;
}

.play-icon {
  position: absolute;
  top: 40%;
  width: 73px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}

</style>
