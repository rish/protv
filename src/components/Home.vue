<template>
  <div>
    <div v-for="content in contents">
      <div
        v-if="content.aclass === 'video'"
        >
        <div class="container"
          v-bind:style="{ 'background-image': 'url(' + content.items[0].backdrop + ')' }"
        >
          <div class="video-container" :style="{ 'background-image': 'url(' + content.items[0].poster + ')' }">
            <div class="row">
              <div class="col-md-offset-8 col-md-4">
                <h2 class="title">{{ content.items[0].title }}</h2>
                <p>{{ content.items[0].description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /video content -->
      <div
        v-if="content.itype === 'section' && !content.hasOwnProperty('box')"
        :style="[content.hasOwnProperty('background') ? { 'background-image': 'url(' + content.background + ')' } : null]"
        :class="{ 'background-wide': content.hasOwnProperty('background') }"
      >
        <div class="container">
          <h3
            class="section title"
            :style="[content.hasOwnProperty('title_color') ? { 'color': content.title_color } : null]"
          >
            <img class="title-icon" v-if="content.icon" :src="content.icon">
            {{ content.title }}
          </h3>
          <div class="row">
            <div class="carousel slide" :id="'carousel-' + content.id" data-interval="false">
              <div class="carousel-inner">
                <div class="item" v-for="i in Math.ceil(content.items.length / 3)" :class="{ active: (i === 1) }">
                  <div v-for="item in content.items.slice((i - 1) * 3, i * 3)">
                    <div class="col-md-4">
                    <div
                      class="thumb"
                      :style="{ 'background-image': 'url(' + item.poster + ')' }"
                    >
                    </div>

                    <div class="pull-right">
                      <span>{{ item.views }} views</span>
                    </div>
                    <h5>{{ item.title }}</h5>
                    <h5>{{ item.synopsis }}</h5>
                    </div>
                  </div>

                </div>
              </div>
              <nav class="carousel-controls">
                <ul class="control-box pager">
                  <li class="pull-left"><a data-slide="prev" :href="'#carousel-' + content.id" v-on:click.prevent><i class="glyphicon glyphicon-chevron-left"></i></a></li>
                  <li class="pull-right"><a data-slide="next" :href="'#carousel-' + content.id" v-on:click.prevent><i class="glyphicon glyphicon-chevron-right"></i></a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <!-- /section -->
      <div
        v-if="content.box && content.box === 'articles'"
        class="articles-container"
      >
        <div class="container">
          <div v-for="i in Math.ceil(content.items.length / 3)" class="row">
            <div class="article-block" v-for="item in content.items.slice((i - 1) * 3, i *3)">
              <img :src="item.poster" width="300">
              <h3 v-html="item.title"></h3>
            </div>
          </div>
        </div>
      </div>
      <!-- /articles -->
    </div>
    <!-- /contents -->
  </div>
</template>

<script>
/* global axios */
export default {
  name: 'Home',
  data () {
    return {
      contents: []
    }
  },
  mounted () {
    this.getData()
  },
  updated () {
    // console.log('updated ...')
    // console.log($('.carousel').carousel())
  },
  methods: {
    getData () {
      const url = 'http://protv.vidnt.com/page/home/'
      axios.get(url).then((response) => {
        console.log(JSON.parse(JSON.stringify(response.data)))
        this.contents = response.data.content.areas
      })
    },
    generateSlug (text) {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
    },
    generateId (slug) {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.container {
}
.video-container {
  min-height: 500px;
  background-repeat: no-repeat;
  outline: 5px solid black;
  margin: 50px;
}

.video-container .title {
  font-size: 20px;
  border-bottom: 1px solid white;
  padding: 0 10px 10px 0;
  margin-right: 20px;
}

.video-container p {
  font-size: 15px;
}

.thumb {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
.control-box.pager {
}

.carousel-inner .item {
  padding: 0 10%;
}
.carousel-controls {
  position: absolute;
  top: 30%;
  width: 100%;
}
.pager li>a, .pager li>span {
  background: none;
  border: none;
  color: white;
  font-size: 50px;
}
.section.title {
  font-size: 45px;
  font-weight: 300;
  text-transform: uppercase;
  padding: 0 10%;
}
.title-icon {
  height: 35px;
}
.background-wide {
  background-repeat: no-repeat;
  background-size: 100%;
}
.articles-container {
  background: #131313;
  overflow: auto;
}

.articles-container {
  text-align: center;
}
.article-block {
  background: black;
  width: 23.3%;
  margin: 2%;
  display: inline-block;
}

.article-block img {
  width: 100%;
}
.article-block h3 {
  display: inline-block;
  padding: 10px;
  font-size: 15px;
  text-align: left;
}
</style>
