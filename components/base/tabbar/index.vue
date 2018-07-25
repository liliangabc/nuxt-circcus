<template>
<div class="com-tabbar">
  <slot></slot>
</div>
</template>
<style lang="scss">
.com-tabbar {
  height: 48px;
  line-height: 46px;
  display: flex;
  align-items: center;
  overflow: auto;
  background: $primaryGradientColor;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>