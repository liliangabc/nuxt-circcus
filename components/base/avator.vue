<template>
<div class="com-avator" :style="styles">
  <nuxt-link class="link" v-if="to" :to="to">
    <img :src="src">
  </nuxt-link>
  <img v-else :src="src">
</div>
</template>
<script>
export default {
  props: {
    src: String,
    size: {
      type: [Number, String],
      default: 48
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