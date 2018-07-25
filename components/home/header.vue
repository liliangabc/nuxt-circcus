<template>
<div class="com-home-header">
  <com-navbar title="Home">
    <com-icon-button slot="left" :src="icons.iconMenu" @click="handleSidebarVisible"></com-icon-button>
    <com-icon-button slot="right" :src="icons.iconSearch"></com-icon-button>
  </com-navbar>
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
import iconSearch from '~/assets/img/base/search_icon_white.png'
import iconMenu from '~/assets/img/base/sanq@3x.png'
const tabs = [
  { label: 'updates', value: '5' },
  { label: 'marketplace', value: '2' },
  { label: 'events', value: '1' },
  { label: 'classes', value: '3' },
  { label: 'meetup', value: '4' }
]
export default {
  data() {
    return {
      icons: { iconSearch, iconMenu }
    }
  },
  computed: {
    curTabs() {
      return tabs
    }
  },
  methods: {
    handleTabChange(value) {
      this.$router.replace(`/home/${value}`)
      this.activeTab = value
    },
    handleSidebarVisible() {
      this.$store.commit('toggleSidebar', true)
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
}
</style>