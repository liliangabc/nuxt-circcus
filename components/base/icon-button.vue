<template>
<button class="com-icon-button" :style="styles" @click="$emit('click', $event)">
  <slot></slot>
</button>
</template>
<script>
export default {
  props: {
    src: String,
    size: {
      type: [Number, String],
      default: 40
    },
    iconSize: {
      type: [Number, String]
    }
  },
  computed: {
    styles() {
      let { src, size, iconSize } = this
      let pxSize = `${+size}px`
      let pxIconSize = `${+iconSize}px`
      const styles = {
        backgroundImage: `url(${src})`,
        width: pxSize,
        height: pxSize
      }
      styles.backgroundSize = iconSize ? pxIconSize : `${parseInt(size * 2 / 3)}px`
      return styles
    }
  }
}
</script>
<style lang="scss">
.com-icon-button {
  background-repeat: no-repeat;
  background-position: center center;
  background-color: transparent;
  border-radius: 50%;
  user-select: none;
}
</style>