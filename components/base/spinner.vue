<template>
<div class="com-spinner">
  <div class="inner" :class="size"></div>
</div>
</template>
<script>
export default {
  props: {
    size: String,
    color: {
      type: String,
      default: '#4183d7'
    }
  },
  methods: {
    getSize() {
      let { size } = this, width = 8, radius = 12
      if (size === 'small') {
        width = 6
        radius = 10
      } else if (size === 'mini') {
        width = 4
        radius = 6
      }
      return { width, radius }
    },
    init() {
      let { color } = this
      let { width, radius } = this.getSize()
      const Spinner = require('spin')
      const target = this.$el.querySelector('.inner')
      this.spinner = new Spinner({
        lines: 8, length: 0, width, radius, color
      }).spin(target)
    }
  },
  mounted() {
    this.$nextTick(() => this.init())
  },
  beforeDestroy() {
    this.spinner && this.spinner.stop()
  }
}
</script>
<style lang="scss">
.com-spinner {
  .inner {
    width: 48px;
    height: 48px;
    margin: auto;
    position: relative;
    &.mini {
      width: 32px;
      height: 32px;
    }
  }
}
</style>