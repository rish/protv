<template>
  <div id="show">
    <div class="container">
      <ShowHeader v-if="header.hasOwnProperty('head')" :poster="header.head.poster"/>
      <div class="row">
        <MediaPlayer :items="items" related-count="5" />
      </div>
      <div class="row">
        <div id="video" class="col-md-9">
          <img :src="video.poster" class="img-responsive">
          <span class="pull-right"><i class="glyphicon glyphicon-eye-open"></i> {{ video.views }} views</span>
          <h3>{{ video.title }}</h3>
        </div>
        <div id="related" class="col-md-3">
          <div v-for="item in content.items">
            <div class="row">
              <div class="col-md-12">
                <div class="col-md-6 pull-left">
                  <img :src="item.thumbnail" class="img-responsive">
                </div>
                <div class="col-md-6 pull-right">
                  {{ item.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
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
      video: {}
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

#show .container {
  margin-bottom: 10px;
}

#related {
  height: 500px;
  background: white;
  color: black;
  overflow-y: scroll;
  padding-bottom: 30px;
}
</style>
