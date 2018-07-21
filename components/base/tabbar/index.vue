<template>
<div class="com-tabbar">
  <slot></slot>
</div>
</template>
<script>
export default {
  
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