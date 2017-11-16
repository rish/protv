<template>
<div
  class="video"
  :class="{'vod': itype === 'item_mov_vod'}"
  :style="{'background-image': !player ? renderBackgroundImage(item.poster, 'image') : null }"
  >
  <div v-if="!playClicked" class="play-icon" v-on:click="playVideo">
    <img src="../assets/icons/video-play.png">
  </div>
  <div v-if="playClicked">
    <div class="video-player-container">
      <video id="video-player" ref="videoPlayer" :width="options.width" :height="options.height" controls autoplay class="video-js vjs-default-skin"
      :poster="item.poster"
      >
        <source :src="videoUrl" :type="type">
      </video>
    </div>
  </div>
</div>
</template>
<script>
/* global axios videojs */
import { duration } from '../filters'
import { renderBackgroundImage } from '@/utils'

export default {
  name: 'MediaPlayerVideo',
  props: [
    'item',
    'itype',
    'autoplay',
    'context'
  ],
  data () {
    return {
      playClicked: false,
      videoUrl: null,
      type: null,
      player: null,
      options: {
        width: 630,
        height: 355
      }
    }
  },
  filters: {
    duration
  },
  mounted () {
    this.getVideoUrl()
    if (this.itype === 'item_mov_vod') {
      this.options = {
        width: 988,
        height: 580
      }
    }
    if (this.autoplay) {
      this.getVideoUrl()
    }
  },
  methods: {
    renderBackgroundImage,
    getVideoUrl () {
      if (this.item) {
        const url = this.item.media + '?sid=test_udid'
        axios.get(url).then(response => {
          if (response.data.error) {
            // alert(response.data.error)
          } else {
            const url = response.data.media[0].link
            this.videoUrl = url
            this.defineType(url)
            if (this.autoplay) {
              this.playClicked = true
            }
          }
        })
      }
    },
    defineType (url) {
      if (!url) {
        return
      }
      switch (true) {
        case url.includes('.mp4'):
          this.type = 'video/mp4'
          break
        case url.includes('.m3u8'):
          this.type = 'application/x-mpegURL'
          break
        default:
          this.type = 'video/mp4x'
      }
    },
    playVideo () {
      this.playClicked = true
      if (!this.player &&
        this.$refs.hasOwnProperty('videoPlayer') &&
        this.$refs.videoPlayer) {
        this.player = videojs('video-player', this.options)
        this.player.play()
      }
    }
  },
  watch: {
    item (val) {
      if (this.player) {
        this.player.dispose()
      }
      this.playClicked = false
      this.videoUrl = null
      this.type = null
      this.player = null
      if (!this.autoplay) {
        this.getVideoUrl()
      }
    }
  },
  destroyed () {
    this.player.dispose()
    this.player = null
  },
  updated () {
    this.$nextTick(() => {
      if (this.playClicked) {
        this.playVideo()
      }
    })
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

.video.vod {
  width: 988px;
  height: auto;
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

.vod .video-player-container {
  height: auto;
}

</style>
<style>
.video-js.vjs-default-skin.vjs-paused .vjs-poster {
  display:block !important;
}
.video-js.vjs-default-skin.vjs-paused.vjs-scrubbing .vjs-poster {
  display:none !important;
}
.video-js.vjs-default-skin.vjs-paused.vjs-seeking .vjs-poster {
  display:none !important;
}
.video-js.vjs-default-skin.vjs-ended .vjs-poster {
  display:none !important;
}
</style>
