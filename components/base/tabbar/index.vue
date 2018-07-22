<template>
<div class="com-tabbar">
  <slot></slot>
</div>
</template>
<script>
import { getMaxZIndex } from '../tools'
export default {
  props: {
    value: {}
  },
  mounted() {
    console.log(getMaxZIndex())
  }
}
</script>
<style lang="scss">
.com-tabbar {
  height: 48px;
  display: flex;
  align-items: center;
  overflow: auto;
  background: $primaryGradientColor;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>