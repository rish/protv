<template>
<div
  class="video"
  :style="{'background-image': 'url(' + item.poster + ')'}"
  >
  <div v-if="!playClicked" class="play-icon" v-on:click="playClicked = true">
    <img src="../assets/icons/video-play.png">
  </div>
  <div v-if="playClicked">
    <div class="video-player-container">
      <iframe class="video-player" src="http://st-rr-d.vidnt.com/player/?account=ipbc&width=100%&font_size=10&fullScreen=false&showEmbedded&qualityChange=true&&autoplay=true&playerType=videojs&videojsVersion=0.4.1.4&playback_url=http%3A%2F%2Fprotvstgmms.vidnt.com%2Fcontent%2Fprotvstg-SJ25C1-LO.1264-854x480.mp4">
      </iframe>
    </div>
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
  data () {
    return {
      playClicked: false
    }
  },
  filters: {
    duration
  },
  watch: {
    item () {
      this.playClicked = false
    }
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

.play-icon:hover {
  cursor: pointer;
}

.video-player {
  width: 630px;
  height: 720px;
  border: 0;
}

.video-player-container {
  height: 360px;
  overflow: hidden;
}

</style>
