<template>
  <div id="channel">
    <div class="container">
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
  <Home/>
  </div>
</template>
<script>
import Home from './Home'

export default {
/* global axios */

  name: 'Channel',
  components: {
    Home
  },
  data () {
    return {
      content: {},
      video: {}
    }
  },
  mounted () {
    this.getData()
    console.log(this.$route)
  },
  methods: {
    getData () {
      const url = 'http://protv.vidnt.com/page/' + this.$route.params.name + '/'
      axios.get(url).then((response) => {
        console.log(JSON.parse(JSON.stringify(response.data)))
        this.content = response.data.content.areas[0]
        this.video = this.content.items[0]
        console.log(this.video)
      })
    }
  }
}
</script>
<style scoped>
#channel {
  padding-top: 20px;
}

#channel .container {
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
