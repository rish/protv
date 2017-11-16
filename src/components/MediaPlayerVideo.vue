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
      <video autoplay>
        <source :src="videoUrl">
      </video>
    </div>
  </div>
</div>
</template>
<script>
/* global axios */
import { duration } from '../filters'
export default {
  name: 'MediaPlayerVideo',
  props: [
    'item'
  ],
  data () {
    return {
      playClicked: false,
      videoUrl: null
    }
  },
  filters: {
    duration
  },
  mounted () {
    this.getVideoUrl()
  },
  methods: {
    getVideoUrl () {
      if (this.item) {
        const url = this.item.media + '?sid=test_udid'
        axios.get(url).then(response => {
          if (response.data.error) {
            alert(response.data.error)
          } else {
            this.videoUrl = response.data.media[0].link
          }
        })
      }
    }
  },
  watch: {
    item (val) {
      this.playClicked = false
      this.videoUrl = null
      this.getVideoUrl()
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
