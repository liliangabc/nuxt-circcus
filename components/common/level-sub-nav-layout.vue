<template>
<div class="com-level-sub-nav-layout">
  <div class="com-level-sub-nav-header">
    <com-navbar :title="title">
      <slot name="right"></slot>
    </com-navbar>
    <slot name="head-bottom"></slot>
  </div>
  <slot></slot>
</div>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>
<style lang="scss">
.com-level-sub-nav-layout {
  padding-top: 48px;
  min-height: 100vh;
  .com-level-sub-nav-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
  }
  &.com-iframe-view {
    height: 100vh;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>