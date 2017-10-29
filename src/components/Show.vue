<template>
  <div id="show">
    <div class="container">
      <ShowHeader v-if="header.hasOwnProperty('head')" :poster="header.head.poster"/>
      <div class="media-player-container">
        <MediaPlayer
        :items="items"
        related-count="5"
        :tags="tags"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Home from './Home'
import ShowHeader from './ShowHeader'
import MediaPlayer from './MediaPlayer'

export default {
/* global axios */

  name: 'Show',
  components: {
    ShowHeader,
    MediaPlayer,
    Home
  },
  data () {
    return {
      content: {},
      items: [],
      head: {},
      header: {},
      video: {},
      tags: [
        'Genre',
        'Ap..Violence',
        'Country of Pro.',
        'Available in..',
        'Available for..'
      ]
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      const url = 'http://protv.vidnt.com/page/' + this.$route.params.name + '/'
      axios.get(url).then((response) => {
        // console.log('Show', JSON.parse(JSON.stringify(response.data)))
        this.content = response.data.content.areas[0]
        this.items = this.content.items
        // console.log('Show content', this.content)
        this.head = response.data.head
        this.video = this.content.items[0]

        this.getContext()
      })
    },
    getContext () {
      const url = 'http://protv.vidnt.com' + this.head.context
      axios.get(url).then((response) => {
        // console.log('Context response', response)
        this.header = response.data
        // console.log('HEADER', this)
      })
    }
  }
}
</script>
<style scoped>
#show {
  padding-top: 20px;
}

#show > .container {
  margin-bottom: 10px;
  width: 1238px;
}

#related {
  height: 500px;
  background: white;
  color: black;
  overflow-y: scroll;
  padding-bottom: 30px;
}

.media-player-container {
  margin: 0 auto;
}
</style>
