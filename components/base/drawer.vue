<template>
<transition>
  <div class="com-drawer" v-show="open" :style="styles">
    <slot></slot>
    <com-overlay v-show="open" :zIndex="zIndex - 1" @click="close"></com-overlay>
  </div>
</transition>
</template>
<script>
import { getMaxZIndex } from './tools'
export default {
  data() {
    return { zIndex: 0 }
  },
  props: {
    width: [Number, String],
    open: Boolean
  },
  watch: {
    open(newval) {
      this.visibleChange()
    }
  },
  computed: {
    styles() {
      let { width, zIndex } = this
      let styles = { zIndex }
      if (width) styles.width = `${width}px`
      return styles
    }
  },
  methods: {
    close(event) {
      this.$emit('close')
    },
    visibleChange() {
      if (this.open) this.zIndex = getMaxZIndex() + 2
    }
  },
  mounted() {
    this.visibleChange()
    document.body.appendChild(this.$el)
  },
  beforeDestroy() {
    this.$el.remove()
  }
}
</script>
<style lang="scss">
.com-drawer {
  width: 256px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 3px 10px rgba(0,0,0,.16), 0 3px 10px rgba(0,0,0,.23);
  &.v-enter-active, &.v-leave-active {
    transition: all .45s cubic-bezier(0.23, 1, 0.32, 1);
  }
  &.v-enter, &.v-leave-to {
    transform: translateX(-100%);
  }
}
</style>