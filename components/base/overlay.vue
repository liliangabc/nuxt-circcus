<template>
<transition>
  <div class="com-overlay" :style="styles" @click="$emit('click', $event)"></div>
</transition>
</template>
<script>
export default {
  props: {
    zIndex: {
      type: [Number, String]
    },
    color: String
  },
  computed: {
    styles() {
      let { zIndex, color } = this
      let styles = {}
      if (zIndex) styles.zIndex = zIndex
      if (color) styles.background = color
      return styles
    }
  },
  mounted() {
    document.body.appendChild(this.$el)
  },
  beforeDestroy() {
    this.$el.remove()
  }
}
</script>
<style lang="scss">
.com-overlay {
  height: 100vh;
  background-color: #000;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  opacity: .4;
  &.v-enter-active, &.v-leave-active {
    transition: all .45s cubic-bezier(0.23, 1, 0.32, 1);
  }
  &.v-enter, &.v-leave-to {
    opacity: 0;
  }
}
</style>