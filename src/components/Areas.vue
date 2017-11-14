<template>
<div v-if="context">
  <div v-for="area in areas">
    <div v-if="area.aclass === 'video_flow'">
      <MediaPlayer
      :items="area.items"
      related-count="6"
      :context="context"
      />
    </div>
    <div v-if="area.aclass === 'section' && !area.box && type != 'article'">
      <ProCarousel
      :context="context"
      :title="area.title"
      :main-color="area.main_color"
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
    <div v-if="area.box === 'articles' || area.aclass === 'section_articles'">
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
    <div v-if="area.aclass === 'section_social'">
      <SocialBar
      :context="context"
      :items="area.items"
      :title="area.title"
      />
    </div>
    <div v-if="area.aclass === 'article'">
      <ArticleView
      :context="context"
      :items="area.items"
      :title="area.title"
      :banner-placement="area.banner"
      :banner="area.banner_placeholder"
      />
    </div>
    <div v-if="area.aclass === 'section_pepole'">
      <!-- Typo from backend change when fixed -->
      <People
      :context="context"
      :items="area.items"
      :title="area.title"
      :banner-placement="area.banner"
      :banner="area.banner_placeholder"
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
import SocialBar from '@/components/SocialBar'
import ArticleView from '@/components/Article'
import People from '@/components/People'

export default {
  name: 'Areas',
  props: [
    'context',
    'areas',
    'type'
  ],
  components: {
    MediaPlayer,
    ProCarousel,
    Articles,
    About,
    News,
    NewsBlocks,
    LiveEPG,
    Promo,
    SocialBar,
    ArticleView,
    People
  }
}
</script>
