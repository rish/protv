<template>
  <div id="header" v-if="context.header">
    <div class="container">
      <div class="top">
        <i class="glyphicon glyphicon-menu-hamburger pull-left"></i>
        <img class="logo pull-left" src="../assets/logo.png">
        <div class="search pull-left">
          <input type="text">
        </div>
        <div class="drop-down-menus pull-left">
          <ul v-for="menus in context.header.selectors">
            <li>{{ menus.title }} <i class="glyphicon glyphicon-menu-down"></i></li>
            <ul>
              <li v-for="item in menus.links">
                <a :href="item.link">{{ item.title }}</a>
              </li>
            </ul>
          </ul>
        </div>
        <div class="social pull-right">
          <img src="../assets/icons/facebook.png">
          <img src="../assets/icons/twitter.png">
          <img src="../assets/icons/profile.png">
        </div>
      </div>
    </div>
    <div class="main-menu">
      <div class="container">
        <ul>
          <li v-for="item in context.main_menu">
            <a :href="item.link">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
/* global axios */
  name: 'Header',
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
        console.log(JSON.parse(JSON.stringify(response.data)))
        this.context = response.data.context
      })
    }
  }
}
</script>
<style scoped>
#header {
  background: #1446cb;
  padding: 10px 0 0;
}

.logo {
  margin-left: 10px;
}

.top {
  padding-bottom: 10px;
}

.search {
  width: 150px;
}

.main-menu {
  background: #092061;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 20px;
}
.main-menu li {
  display: inline-block;
}

.drop-down-menus ul {
  display: inline-block;
}

.drop-down-menus li {
  list-style-type: none;
}

.drop-down-menus ul ul {
  display: none;
}

.drop-down-menus ul > li {
  font-size: 15px;
  padding: 20px;
}

.drop-down-menus ul > li:hover {
  background: red;
  cursor: pointer;
}

.drop-down-menus ul:hover ul {
  display: inline-block;
}

a {
  color: white;
}

.social img {
  margin: 5px;
}
</style>
