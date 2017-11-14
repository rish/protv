<template>
<div id="people" v-if="context">
  <div class="container blocks">

    <h2>{{ title }}</h2>

    <div class="row block" v-for="item in items">
      <div class="pull-left left">
        <div class="thumb"
          :style="{ 'background-image': renderBackgroundImage(item.poster) }"
          ></div>
      </div>
      <div class="right">
        <h3 class="title">#{{item.first_name.toLowerCase()}}<span class="lastname">{{item.last_name}}</span>
        </h3>
        <div class="text" v-html="item.content"></div>
      </div>
    </div>

  </div>


</div>
</template>
<script>
import { renderBackgroundImage } from '@/utils'
export default {
  name: 'People',
  props: [
    'context',
    'items',
    'title',
    'bannerPlacement',
    'banner'
  ],
  methods: {
    renderBackgroundImage
  }
}
</script>
<style scoped>
#people {
  padding-top: 60px;
}

#people > .container {
  margin-bottom: 10px;
  padding: 0;
  width: 1000px;
}

.blocks {
  margin-top: -30px;
}

.blocks h2 {
  width: 975px;
  margin: 20px auto;
}

.block {
  width: 975px;
  margin: 0 auto 80px;
}

.block img {
  border: 3px solid #2b2b2b;
}

.block .thumb {
  width: 300px;
  height: 200px;
  border: 3px solid #2b2b2b;
}

.block .right {
  width: 640px;
  margin-left: 20px;
  float: left;
}

.block .title {
  font-size: 30px;
  margin-top: 0;
}

.block .title .lastname {
  font-weight: 800;
}

.text {
  font-size: 16px;
  font-weight: 300px;
}
</style>
