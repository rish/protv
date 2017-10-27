<template>
  <div id="header" v-if="context.header">
    <div class="container">
      <div class="top">
        <i class="glyphicon glyphicon-menu-hamburger pull-left"></i>
        <img class="logo pull-left" src="../assets/logo.png">
        <div class="search pull-left">
          <input type="text" placeholder="Search">
        </div>
        <div class="drop-down-menus pull-left">
          <ul v-for="menus in context.header.selectors">
            <li>{{ menus.title }} <i class="glyphicon glyphicon-menu-down"></i></li>
          </ul>
        </div>
        <div class="social pull-right">
          <img src="../assets/icons/facebook.png">
          <img src="../assets/icons/twitter.png">
          <img src="../assets/icons/profile.png">
        </div>
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
.container {
  width: 925px;
  outline: 1px solid green;
}
#header {
  background: #1446cb url('../assets/menu-bg.png') no-repeat;
  background-size: cover;
  padding: 10px 0 0;
}

.logo {
  margin-right: 58px;
}

.glyphicon-menu-hamburger {
  font-size: 20px;
  position: relative;
  top: 3px;
  margin-right: 40px;
  margin-left: -5px;
}

.top {
  margin-top: 23px;
  padding-bottom: 23px;
  height: 60px;
}

.search input {
  width: 350px;
  height: 28px;
  padding-left: 40px;
  background-image: url('../assets/icons/search.png');
  background-repeat: no-repeat;
  background-position: 15px center;
  color: black;
}

.search input::placeholder {
  font-style: italic;
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

.drop-down-menus {
  outline: 1px solid red;
  position: relative;
  top: -29px;
}

.drop-down-menus ul {
  display: inline-block;
  margin: 0;
  padding: 0;
}

.drop-down-menus ul > li {
  list-style-type: none;
  margin: 0;
  padding: 35px 20px;
}

.drop-down-menus ul > li i {
  margin-left: 10px;
}

.drop-down-menus ul ul {
  display: none;
}

.drop-down-menus ul > li {
  font-size: 15px;
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
