<template>
<div class="com-main-layout">
  <div class="slot-container">
    <nuxt/>
  </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
@import '~/assets/scss/sizes.scss';
.com-main-layout {
  min-width: $pageMinWidth;
  min-height: 100vh;
  background-color: #f6f6f6;
  padding-top: $pageHeaderHeight;
  > .slot-container {
    width: $pageMinWidth;
    margin: auto;
    padding: 0 16px;
  }
}
</style>