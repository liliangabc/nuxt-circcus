<template>
<div class="com-avator" :style="styles">
  <nuxt-link class="link" v-if="to" :to="to">
    <img :src="src || iconAvator">
  </nuxt-link>
  <img v-else :src="src">
</div>
</template>
<script>
import iconAvator from '~/assets/img/base/touxiang-zw@3x.png'
export default {
  data() {
    return {
      iconAvator
    }
  },
  props: {
    src: String,
    size: {
      type: [Number, String],
      default: 40
    },
    to: String
  },
  computed: {
    styles() {
      let size
      if ((typeof this.size === 'string') && this.size.endsWith('%')) {
        size = this.size
      } else {
        size = `${parseInt(this.size)}px`
      }
      return {
        width: size, height: size, minWidth: size
      }
    }
  }
}
</script>
<style lang="scss">
.com-avator {
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  .link, img {
    width: 100%;
    height: 100%;
  }
}
</style>