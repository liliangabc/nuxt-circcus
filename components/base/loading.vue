<template>
<transition>
  <div class="com-loading" :class="{fullscreen}">
    <div class="com-loading-overlay" :style="styles"></div>
    <com-spinner :size="size"></com-spinner>
  </div>
</transition>
</template>
<script>
import { getMaxZIndex } from './tools'
export default {
  props: {
    size: String,
    fullscreen: Boolean,
    bgcolor: String
  },
  computed: {
    styles() {
      let { bgcolor } = this
      return bgcolor ? { backgroundColor: bgcolor } : {}
    }
  },
  mounted() {
    if (this.fullscreen) {
      this.url = location.href
      document.body.appendChild(this.$el)
      this.$el.style.zIndex = getMaxZIndex() + 1
    }
  },
  beforeDestroy() {
    if (this.fullscreen && this.url !== location.href) {
      this.$el.remove()
    }
  }
}
</script>
<style lang="scss">
.com-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  &, .com-loading-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .com-loading-overlay {
    opacity: .7;
    background-color: #fff;
  }
  &.fullscreen {
    position: fixed;
  }
  &.v-enter-active, &.v-leave-active {
    transition: opacity .3s ease;
  }
  &.v-enter, &.v-leave-to {
    opacity: 0;
  }
}
</style>