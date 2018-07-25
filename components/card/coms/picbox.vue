<template>
<div class="com-card-item-picbox">
  <ul class="list" :class="`count${thumbs.length}`">
    <li class="image" v-for="url in thumbs" :key="url" :style="setStyle(url)"></li>
    <li v-if="picUrls.length > 3" class="overlay">+{{picUrls.length - 3}}</li>
  </ul>
</div>
</template>
<script>
import { posts, setPicSize } from '~/plugins'
import { propsMixin } from '../mixins'
export default {
  mixins: [propsMixin],
  computed: {
    picUrls() {
      let { picUrls } = this.item
      return picUrls ? picUrls.split(',') : []
    },
    thumbs() {
      let len = this.picUrls.length
      return this.picUrls.map(_ => setPicSize(_, 360 / len, 130)).slice(0, 3)
    }
  },
  methods: {
    setStyle(url) {
      return { backgroundImage: `url(${url})` }
    }
  }
}
</script>
<style lang="scss">
.com-card-item-picbox {
  padding: 6px 0;
  .list {
    position: relative;
    display: flex;
    justify-content: space-between;
    .image {
      height: 130px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      background-color: $borderLevel3Color;
    }
    &.count1 .image {
      width: 100%;
    }
    &.count2 .image {
      width: calc(50% - 1.5px);
    }
    &.count3 .image, .overlay {
      width: calc(33.33% - 2px);
    }
    .overlay {
      background-color: rgba(0, 0, 0, .27);
      color: #fff;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }
}
</style>