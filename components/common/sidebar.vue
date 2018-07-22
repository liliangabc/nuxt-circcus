<template>
<com-drawer class="com-sidebar" :open="sidebarVisible" @close="onSidebarClose">

</com-drawer>
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