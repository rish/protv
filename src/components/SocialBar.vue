<template>
<div id="social-bar">
  <div class="container-fluid">
    <div class="container">
      <p>
        <span class="title">{{ title }}: </span>
        <span class="link" v-for="(item, key) in items">
          <a :href="item">{{ key }}</a>
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
  ]
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
    padding: 5px 10px;
    border: 1px solid white;
    border-radius: 5px;
    margin: 0 5px;
  }
}
</style>
