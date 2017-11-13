<template>
<div id="live-epg">
  <div class="container-fluid"
    :style="{'background-image': active ? renderBackgroundImage(active.poster) : null }"
    >
    <div class="container">
      <div class="content" v-if="active">
        <div class="heading">
          Acum La
        </div>
        <div class="channel" :style="{'background-color': context.conf.colors.blue}">
          {{ title }}
        </div>
        <div class="title">
          {{ active.title }}
        </div>
        <div class="time">
          <p>{{ getHoursAndMinutes(active.start) }} - {{ getHoursAndMinutes(active.end) }}</p>
        </div>
      </div>
      <div v-else class="no-active">
        <h1>No active show found</h1>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import moment from 'moment'
import { renderBackgroundImage } from '@/utils'

export default {
  name: 'LiveEPG',
  props: [
    'context',
    'title',
    'items'
  ],
  data () {
    return {
      active: null
    }
  },
  mounted () {
    this.getActiveItem()
  },
  methods: {
    getActiveItem () {
      const now = new Date()
      this.items.map(item => {
        const startTime = new Date(item.start)
        const endTime = new Date(item.end)
        if (startTime < now && endTime > now) {
          this.active = item
        }
      })

      // Use this if there is no active show from the API
      // if (!this.active) {
      //   this.active = this.items[this.items.length - 1]
      // }
    },
    renderBackgroundImage,
    getHoursAndMinutes (time) {
      return moment(time).format('HH:mm')
    }
  }
}
</script>
<style lang="scss" scoped>
#live-epg {
  > .container-fluid {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
  }
  .container {
    width: 1000px;
    padding: 20px 0;
  }
  .content {
    font-weight: 500;
    text-align: right;
    width: 250px;
  }
  .heading {
    text-align: left;
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 300;
  }
  .channel {
    text-align: center;
    font-size: 25px;
    font-weight: 800;
    text-transform: uppercase;
    padding: 20px 0;
    margin: 5px 0;
  }
  .title {
    font-size: 16px;
  }
  .time {
    font-size: 12px;
  }
  .no-active {
    font-size: 50px;
    text-align: center;
    color: red;
  }
}
</style>
