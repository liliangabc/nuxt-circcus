<template>
<div class="com-home-header">
  <com-main-navbar title="home" has-search></com-main-navbar>
  <com-tabbar>
    <com-tabbar-item
      v-for="item in curTabs"
      :key="item.value"
      :label="item.label"
      :to="`/home/${item.value}`">
    </com-tabbar-item>
  </com-tabbar>
</div>
</template>
<script>
const tabs = [
  { label: 'updates', value: '5' },
  { label: 'marketplace', value: '2' },
  { label: 'events', value: '1' },
  { label: 'classes', value: '3' },
  { label: 'meetup', value: '4' }
]
export default {
  computed: {
    curTabs() {
      return tabs
    }
  },
  methods: {
    handleTabChange(value) {
      this.$router.replace(`/home/${value}`)
      this.activeTab = value
    }
  }
}
</script>
<style lang="scss">
.com-home-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  .com-main-navbar.com-navbar {
    position: relative;
  }
}
</style>