<template>
  <div id="footer">
    <div class="container" v-if="context.hasOwnProperty('footer')">
      <div v-for="category in context.footer.site_map">
        <ul class="links">
          <h3>{{ category.title }}</h3>
          <li v-for="item in category.links">
            <a href="item.link">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
/* global axios */
  name: 'Footer',
  data () {
    return {
      context: {}
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      const url = 'http://protv.vidnt.com/context/home/'
      axios.get(url).then((response) => {
        // console.log(JSON.parse(JSON.stringify(response.data)))
        this.context = response.data.context
      })
    }
  }
}
</script>
<style scoped>
#footer {
  background: #000a49;
}
.links {
  width: 25%;
  float: left;
  margin: 5%;
}

.links li {
  list-style-type: none;
}

.links a {
  color: #ababab;
}
</style>
