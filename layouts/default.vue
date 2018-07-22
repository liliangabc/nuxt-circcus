<template>
<div class="com-main-layout">
  <div class="slot-container">
    <nuxt/>
  </div>
  <com-drawer :open="sidebarVisible" @close="onSidebarClose"></com-drawer>
</div>
</template>
<script>
export default {
  computed: {
    sidebarVisible() {
      return this.$store.state.sidebarVisible
    }
  },
  methods: {
    onSidebarClose() {
      this.$store.commit('toggleSidebar')
    }
  }
}
</script>
<style lang="scss">

</style>