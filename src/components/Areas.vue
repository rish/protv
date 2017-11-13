<template>
<div v-if="context">
  <div v-for="area in areas">
    <div v-if="area.aclass === 'video_flow'">
      <MediaPlayer
      :items="area.items"
      related-count="6"
      />
    </div>
    <div v-if="area.aclass === 'section' && !area.box">
      <ProCarousel
      :context="context"
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
    <div v-if="area.box === 'articles'">
      <Articles
      :context="context"
      :articles="area.items"
      :load-more-text="area.more_bt_text"
      :load-more-link="area.link"
      />
    </div>
    <div v-if="area.aclass === 'about'">
      <About
      :context="context"
      :item="area.items[0]"
      :banner-placement="area.banner"
      :banner="area.banner_placeholder"
      />
    </div>
    <div v-if="area.aclass === 'news'">
      <News
      :context="context"
      :title="area.title"
      :item="area.items[0]"
      :banner-placement="area.banner"
      :banner="area.banner_placeholder"
      />
    </div>
    <div v-if="area.aclass == 'section_articles'">
      <NewsBlocks
      :context="context"
      :banner-placement="area.banner"
      :banner="area.banner_placeholder"
      :items="area.items"
      />
    </div>
    <div v-if="area.aclass === 'epg'">
      <LiveEPG
      :context="context"
      :items="area.items"
      :title="area.title"
      />
    </div>
    <div v-if="area.aclass === 'section_promo'">
      <Promo
      :context="context"
      :items="area.items"
      :title="area.title"
      />
    </div>
  </div>
</div>
</template>
<script>
import MediaPlayer from '@/components/MediaPlayer'
import ProCarousel from '@/components/ProCarousel'
import Articles from '@/components/Articles'
import About from '@/components/About'
import News from '@/components/News'
import NewsBlocks from '@/components/NewsBlocks'
import LiveEPG from '@/components/LiveEPG'
import Promo from '@/components/Promo'

export default {
  name: 'Areas',
  props: [
    'context',
    'areas'
  ],
  components: {
    MediaPlayer,
    ProCarousel,
    Articles,
    About,
    News,
    NewsBlocks,
    LiveEPG,
    Promo
  }
}
</script>
