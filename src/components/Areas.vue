<template>
<div>
  <div v-for="area in areas">
    <div v-if="area.aclass === 'video_flow'">
      <MediaPlayer
      :items="area.items"
      related-count="6"
      />
    </div>
    <div v-if="area.aclass === 'section' && !area.box">
      <ProCarousel
      :title="area.title"
      :title-color="area.title_color"
      :title-icon="area.icon"
      :items="area.items"
      :grid="area.grid"
      :background="area.background"
      :banner="area.banner"
      :banner-placeholder="area.banner_placeholder"
      :button-color="area.play_bt_color"
      meta="true"
      synopsis="true"
      playIcon="true"
      />
    </div>
  </div>
</div>
</template>
<script>
import MediaPlayer from '@/components/MediaPlayer'
import ProCarousel from '@/components/ProCarousel'

export default {
  name: 'Areas',
  props: ['areas'],
  components: {
    MediaPlayer,
    ProCarousel
  }
}
</script>
