<template>
  <div v-if="items.length" class="container">
    <div class="main">
      <MediaPlayerVideo :item="items.slice(0,1)[0]"/>
      <div class="pull-left">
        <MediaPlayerTags :tags="tags"/>
      </div>
      <div class="pull-right">
        <MediaPlayerViews :item="item" />
      </div>
      <div class="todo">
        <!-- TODO: Make this as components -->
        <div class="video-title">{{ item.title }}</div>
        <div class="pull-left">
          <img src="../assets/temp/share.png">
        </div>
        <div class="pull-right">
          <div class="rating">
            <img src="../assets/icons/star-on.png">
            <img src="../assets/icons/star-on.png">
            <img src="../assets/icons/star-on.png">
            <img src="../assets/icons/star-on.png">
            <img src="../assets/icons/star-off.png">
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar">
      <MediaPlayerRelated :videoItems="items" :limit="relatedCount"/>
    </div>
  </div>
</template>
<script>
import MediaPlayerVideo from './MediaPlayerVideo'
import MediaPlayerTags from './MediaPlayerTags'
import MediaPlayerViews from './MediaPlayerViews'
import MediaPlayerRelated from './MediaPlayerRelated'

export default {
  name: 'MediaPlayer',
  components: {
    MediaPlayerVideo,
    MediaPlayerTags,
    MediaPlayerViews,
    MediaPlayerRelated
  },
  props: [
    'items',
    'related-count',
    'tags'
  ],
  data () {
    return {
      item: {}
    }
  },
  mounted () {
    this.item = this.items.slice(0, 1)[0]
  },
  watch: {
    items: function (items) {
      this.item = items.slice(0, 1)[0]
    }
  }

}
</script>
<style scoped>
.container {
  width: 933px;
  padding: 0;
}
.main, .sidebar {
  float: left;
}

/* TODO */
.todo {
  clear: both;
}

.video-title {
  font-size: 30px;
  padding: 10px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid white;
  width: 99%;
}

.rating {
  padding-right: 10px;
}
</style>
