<template>
<div class="com-level-one-nav-layout">
  <div class="com-level-one-nav-header">
    <com-navbar :title="title">
      <com-icon-button slot="left" :src="icons.iconMenu" @click="handleSidebarVisible"></com-icon-button>
      <com-icon-button slot="right" v-if="hasSearch" :src="icons.iconSearch" @click="goSearch"></com-icon-button>
    </com-navbar>
    <slot name="head-bottom"></slot>
  </div>
  <slot></slot>
</div>
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
    },
    goSearch(event) {
      this.$emit('go-search', event)
    }
  }
}
</script>
<style lang="scss">
.com-level-one-nav-layout {
  padding-top: 48px;
  min-height: 100vh;
  .com-level-one-nav-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
  }
}
</style>