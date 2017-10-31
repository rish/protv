<template>
<div
  class="thumb"
  :style="{ 'background-image': 'url(' + image + ')'}"
  >
  <div v-if="!item.active" class="duration">
    <img class="clock-icon" src="../assets/icons/clock.png">
    {{ item.duration | duration }}
  </div>
  <div v-else>
    <div class="active">
      <span>Next Play</span>
    </div>
  </div>
</div>
</template>
<script>
import { duration } from '../filters'
export default {
  name: 'MediaPlayerRelatedThumb',
  props: [
    'image',
    'item'
  ],
  filters: {
    duration
  }
}
</script>
<style scoped>
.thumb {
  width: 99px;
  height: 57px;
  background-size: cover;
  background-position: center center;
  outline: 2px solid white;
  float: left;
  margin: 10px 8px;
  position: relative;
}
.duration, .active {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 3px;
  font-size: 8px;
  font-weight: 500;
  color: white;
}

.duration {
  background: #7f7f7f;
  color: white;
}

.active {
  background: #1f55ff;
}
.clock-icon {
  width: 9px;
  position: relative;
  top: -1px;
}

</style>
