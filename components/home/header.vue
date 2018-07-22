<template>
<div class="com-home-header">
  <com-navbar title="Home">
    <com-icon-button slot="left" :src="iconMenu" @click="handleSidebarVisible"></com-icon-button>
    <com-icon-button slot="right" :src="iconSearch"></com-icon-button>
  </com-navbar>
  <com-tabbar v-model="activeTab" @tab-change="handleTabChange">
    <com-tabbar-item label="updates" value="5"></com-tabbar-item>
    <com-tabbar-item label="marketplace" value="2"></com-tabbar-item>
    <com-tabbar-item label="events" value="1"></com-tabbar-item>
    <com-tabbar-item label="classes" value="3"></com-tabbar-item>
    <com-tabbar-item label="meetup" value="4"></com-tabbar-item>
  </com-tabbar>
</div>
</template>
<script>
import iconSearch from '~/assets/img/base/search_icon_white.png'
import iconMenu from '~/assets/img/base/sanq@3x.png'
export default {
  data() {
    return {
      iconSearch,
      iconMenu,
      activeTab: '1'
    }
  },
  methods: {
    handleTabChange(value) {
      
    },
    handleSidebarVisible() {
      this.$store.commit('toggleSidebar', true)
    }
  }
}
</script>
<style lang="scss">

</style>