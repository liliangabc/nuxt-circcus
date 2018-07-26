<template>
<com-navbar class="com-main-navbar" :title="title">
  <com-icon-button slot="left" :src="icons.iconMenu" @click="handleSidebarVisible"></com-icon-button>
  <com-icon-button slot="right" v-if="hasSearch" :src="icons.iconSearch"></com-icon-button>
</com-navbar>
</template>
<script>
import iconSearch from '~/assets/img/base/search_icon_white.png'
import iconMenu from '~/assets/img/base/sanq@3x.png'
export default {
  data() {
    return {
      icons: { iconSearch, iconMenu }
    }
  },
  props: {
    title: String,
    hasSearch: Boolean
  },
  methods: {
    handleSidebarVisible() {
      this.$store.commit('toggleSidebar', true)
    }
  }
}
</script>
<style lang="scss">
.com-main-navbar.com-navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
}
</style>