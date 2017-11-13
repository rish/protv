<template>
<div id="sidebar-nav" v-if="context.hasOwnProperty('header')">
  <div id="sidebar" :class="{ active: active }">
    <ul>
      <li v-for="section in context.header.side_menu">
        <h3 class="title">{{ section.title }}</h3>
        <ul>
          <li v-for="link in section.links">
            <a v-if="isExternalLink(link.link)" :href="link.link">
              {{ link.title }}
            </a>
            <router-link :to="link.link" v-else>
              {{ link.title }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div id="pusher" :class="{ active: active }" v-on:click="disableSidebar">
    <slot id="push-content"></slot>
  </div>
</div>
</template>
<script>
export default {
  name: 'SidebarNav',
  props: [
    'active',
    'context'
  ],
  methods: {
    disableSidebar () {
      if (this.active) {
        this.$emit('toggleSidebar')
      }
    },
    isExternalLink (url) {
      if (!/^(f|ht)tps?:\/\//i.test(url)) {
        url = 'http://' + url
      }
      return url
    }
  }
}
</script>
<style scoped>
#sidebar-nav {
  height: 100%;
  min-height: 100%;
  overflow-x: hidden;
  position: relative;
  background: #131313;
  width: 100%;
}

#sidebar {
  width: 300px;
  background: #1c4de6;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  z-index: 999;
  transform: translate3d(-300px, 0, 0);
  transform-origin: 100% 50%;
  transition: transform 0.5s;
}

#sidebar.active {
  transform: translate3d(0, 0, 0);
}

#pusher {
  background: black;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  height: 100%;
  width: 100%;
  display: table;
  table-layout: fixed;
}

#pusher.active {
  transform: translate3d(300px, 0, 0);
  opacity: 0.5;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
}

#pusher.active #header,
#pusher.active #content,
#pusher.active #footer {
  pointer-events: none;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}
.title {
  font-size: 20px;
  text-transform: uppercase;
  padding-left: 50px;
}

ul li li a {
  padding: 10px 0 10px 100px;
}
a {
  color: white;
  display: block;
}

a:hover {
  text-decoration: none;
  background: #20a4f3;
}
</style>
