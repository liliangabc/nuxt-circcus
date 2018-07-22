<template>
<div class="com-default-layout">
  <div class="slot-container">
    <nuxt/>
  </div>
  <com-sidebar></com-sidebar>
</div>
</template>
<script>
import ComSidebar from '~/components/common/sidebar'
export default {
  components: { ComSidebar }
}
</script>
<style lang="scss">
.com-default-layout {
  min-height: 100vh;
}
</style>