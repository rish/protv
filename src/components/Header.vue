<template>
  <div id="header" v-if="context.header" v-on:mouseleave="displayMenu = false">
    <div class="container">
      <div class="top">
        <i class="glyphicon glyphicon-menu-hamburger pull-left"></i>
        <router-link to="/">
          <img class="logo pull-left" src="../assets/logo.png">
        </router-link>
        <div class="search pull-left">
          <input type="text" placeholder="Search">
        </div>
        <div class="drop-down-menus pull-left">
          <ul v-for="(menus, index) in context.header.selectors">
            <li v-on:click="setActiveMenu(index)">{{ menus.title }} <i class="glyphicon glyphicon-menu-down"></i></li>
          </ul>
        </div>
        <div class="social pull-right">
          <img src="../assets/icons/facebook.png">
          <img src="../assets/icons/twitter.png">
          <img src="../assets/icons/profile.png">
        </div>
      </div>
    </div>
    <div class="bottom" :class="{active: displayMenu }">
      <div class="container" :class="{ 'container-wide': activeMenu === 0 }">
        <ul class="shows" v-if="activeMenu === 1">
          <li><router-link to="/show/voice_home">Romanii au Telent</router-link></li>
          <li><router-link to="/show/voice_home">Vocea Romaniei</router-link></li>
          <li><router-link to="/show/voice_home">Vocea Romaniei Junior</router-link></li>
          <li><router-link to="/show/voice_home">Gospodar fara pereche</router-link></li>
          <li><router-link to="/show/voice_home">Masterchef</router-link></li>
          <li><router-link to="/show/voice_home">Ferma Vedetelor</router-link></li>
          <li><router-link to="/show/voice_home">Pe bunu?</router-link></li>
          <li><router-link to="/show/voice_home">Fort Boyard</router-link></li>
          <li><router-link to="/show/voice_home">Ce spin romanii?</router-link></li>
          <li><router-link to="/show/voice_home">Visuri la cheie</router-link></li>
          <li><router-link to="/show/voice_home">Jocuri de celebritate</router-link></li>
        </ul>
        <ul v-else>
          <li class="channel-pro-tv">
            <router-link to="/channel">
              <img src="../assets/logos/pro-tv.png">
            </router-link>
          </li>
          <li class="channel-pro-2">
            <router-link to="/channel">
              <img src="../assets/logos/pro-2.png">
            </router-link>
          </li>
          <li class="channel-pro-x">
            <router-link to="/channel">
              <img src="../assets/logos/pro-x-yellow.png">
            </router-link>
          </li>
          <li class="channel-pro-gold">
            <router-link to="/channel">
              <img src="../assets/logos/pro-gold.png">
            </router-link>
          </li>
          <li class="channel-pro-cinema">
            <router-link to="/channel">
              <img src="../assets/logos/pro-cinema.png">
            </router-link>
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
      context: {},
      activeMenu: 0,
      displayMenu: false
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
    },
    setActiveMenu (id) {
      // console.log('setting', id, 'active')
      this.activeMenu = id
      this.displayMenu = true

      // Disable hiding menu delay for now
      let _this = this
      setTimeout(function () {
        _this.displayMenu = false
      }, 15000)
    }
  }
}
</script>
<style scoped>
.container {
  width: 925px;
  padding: 0;
}
#header {
  background: #1446cb url('../assets/bg2.jpg') no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  z-index: 999;
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
  margin-top: 25px;
  padding-bottom: 21px;
  height: 60px;
}

.bottom {
  clear: both;
  background: rgba(0,0,0,0.5);
  display: none;
}

.bottom.active {
  display: block;
}

.bottom .container-wide {
  width: 1024px;
  position: relative;
  left: -5px;
  height: 66px;
}

.bottom p {
  margin: 0;
  padding: 0;
}

.bottom ul {
  margin: 0;
  padding: 0;
}

.bottom li {
  list-style-type: none;
  display: inline-block;
  margin: 0;
  height: 66px;
}

.bottom li a {
  display: inline-block;
  padding: 20px 52px;
  margin: 0;
  font-size: 18px;
}

.bottom li:hover {
  background: #f22061;
}

li.channel-pro-tv:hover {
  background: #2556fd;
}

li.channel-pro-2:hover {
  background: #f12160;
}

li.channel-pro-x:hover {
  background: #000000;
}

li.channel-pro-gold:hover {
  background: #cba635;
}

li.channel-pro-cinema:hover {
  background: #7d287d;
}

.bottom .shows {
  margin-bottom: 10px;
  margin-left: -20px;
  padding-top: 10px;
}

.bottom .shows li {
  height: 40px;
  padding: 2px 0;
}
.bottom .shows li a {
  display: inline-block;
  width: 230px;
  padding: 5px 15px;
  font-weight: 300;
}

.bottom .shows li:hover {
  background: none;
}

.bottom li a:hover {
  text-decoration: underline;
  font-weight: bold;
  /* border-bottom: 2px solid white; */
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
  position: relative;
  top: -29px;
  left: 25px;
}

.drop-down-menus ul {
  display: inline-block;
  margin: 0;
  padding: 0;
  margin-bottom: -65px;
}

.drop-down-menus ul > li {
  list-style-type: none;
  margin: 0;
  padding: 35px 22px 33px;
}

.drop-down-menus ul > li i {
  font-size: 8px;
}

.drop-down-menus ul ul {
  display: none;
}

.drop-down-menus ul > li {
  font-size: 15px;
}

.drop-down-menus ul > li:hover {
  background: rgba(0,0,0,0.5);
  cursor: pointer;
}

.drop-down-menus ul:hover ul {
  display: inline-block;
}

a {
  color: white;
}

.social img {
  margin: 0px 7.5px;
}
</style>
