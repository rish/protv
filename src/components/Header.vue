<template>
  <div id="header" v-if="context.header" v-on:mouseleave="hideMenu" v-on:mouseenter="cancelHideMenu">
    <div class="container">
      <div class="top">
        <i class="glyphicon glyphicon-menu-hamburger pull-left"
          v-on:click="enableSidebar"
          ></i>
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
    <transition name="slide-fade" mode="out-in">
      <div class="bottom" :class="{active: displayMenu }" v-if="displayMenu">
        <div class="container" :class="{ 'container-wide': activeMenu === 0 }">
            <ul class="shows" v-if="activeMenu === 1">
              <li v-for="link in context.header.selectors[activeMenu].links">
                <router-link :to="link.page">{{ link.title }}</router-link>
              </li>
            </ul>
            <ul v-else>
              <li v-for="link in context.header.selectors[activeMenu].links" :style="link.title === channelHover.title ? channelHoverUpdate : null" v-on:mouseenter="handleChannelHover(link)">
                <router-link :to="link.page">
                  <img :src="link.icon" />
                </router-link>
              </li>
            </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: [
    'context'
  ],
  data () {
    return {
      activeMenu: 0,
      displayMenu: false,
      hideMenuPending: false,
      hideMenuTimeout: null,
      hideMenuDelayDuration: 3000,
      channelHover: {}
    }
  },
  methods: {
    setActiveMenu (id) {
      // console.log('setting', id, 'active')
      this.activeMenu = id
      this.displayMenu = true

      // Disable hiding menu delay for now
      // let _this = this
      // setTimeout(function () {
      //   _this.displayMenu = false
      // }, 15000)
    },
    hideMenu () {
      this.channelHover = {}
      let self = this
      this.hideMenuPending = true
      this.hideMenuTimeout = setTimeout(function () {
        self.displayMenu = false
        self.hideMenuPending = false
      }, self.hideMenuDelayDuration)
    },
    cancelHideMenu () {
      if (this.hideMenuPending) {
        clearTimeout(this.hideMenuTimeout)
      }
    },
    handleChannelHover (link) {
      this.channelHover = link
    },
    enableSidebar () {
      this.$emit('toggleSidebar')
    }
  },
  computed: {
    channelHoverUpdate () {
      return {
        backgroundColor: this.channelHover.hover_clr
      }
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
  display: table-row;
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

/*

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
*/

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
  border: 0;
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

.top i:hover { cursor: pointer; }

/* A N I M A T I O N S */
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(0.23, 1, 0.32, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}

</style>
