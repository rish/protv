<template>
<div id="social-bar" v-if="items">
  <div class="container-fluid">
    <div class="container">
      <p>
        <span class="title">{{ title }}: </span>
        <span class="link" v-for="(item, key) in items">
          <a :href="item"><img :src="require('../assets/icons/small/' + formatKey(key) + '.png')"></a>
        </span>
      </p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'SocialBar',
  props: [
    'context',
    'title',
    'items'
  ],
  methods: {
    formatKey (key) {
      key = key.toLowerCase()
      return key
    }
  }
}
</script>
<style lang="scss" scoped>
#social-bar {
  > .container-fluid {
    background: #131313;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    margin-bottom: 40px;
    padding: 20px;
    text-align: center;
  }
  .title {
    text-transform: uppercase;
  }
  .link a {
    display: inline-block;
    padding: 5px;
    border-radius: 5px;
    margin: 0 3px;
  }
}
</style>
