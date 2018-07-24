<template>
<com-drawer class="com-sidebar" :open="sidebarVisible" @close="onSidebarClose">
  <header class="com-sidebar-header">
    <com-avator size="60" :src="userInfo.userHeadImage"></com-avator>
    <h3 class="username">{{userInfo.nickName}}</h3>
    <h4 class="school">{{userInfo.collegeName}}</h4>
  </header>
  <ul class="menu-list">
    <li class="menu-item" v-for="item in menuItems" :key="item.label">
      <img class="icon" :src="item.src">
      <span class="label">{{item.label}}</span>
    </li>
  </ul>
</com-drawer>
</template>
<script>
const _require = name => require(`~/assets/img/sidebar/${name}.png`)

const menuItems = [
  { label: 'home', to: '/', src: _require('home') },
  { label: 'my classes', to: '/', src: _require('categories') },
  { label: 'my points', to: '/', src: _require('points') },
  { label: 'messages', to: '/', src: _require('messages') },
  { label: 'notifications', to: '/', src: _require('lingdang') },
  { label: 'my gifts', to: '/', src: _require('mygifts') },
  { label: 'favorite', to: '/', src: _require('favorites') },
  { label: 'activity log', to: '/', src: _require('activitielog') },
  { label: 'answer questions', to: '/', src: _require('question') },
  { label: 'settings', to: '/', src: _require('setting') },
  { label: 'logout', to: '/', src: _require('logout') }
]

export default {
  data() {
    return {
      menuItems
    }
  },
  computed: {
    sidebarVisible() {
      return this.$store.state.sidebarVisible
    },
    userInfo() {
      return this.$store.state.userData.userInfo
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
.com-sidebar {
  display: flex;
  flex-direction: column;
  .com-sidebar-header {
    text-align: center;
    padding: 24px 12px;
    min-height: 168px;
    color: $primaryTextColor;
    border-bottom: 1px solid $borderLevel3Color;
    .username {
      font-size: 24px;
      line-height: 1.7;
    }
  }
  .menu-list {
    padding: 8px 0 68px;
    overflow: auto;
    .menu-item {
      height: 48px;
      display: flex;
      align-items: center;
      padding: 0 16px;
      user-select: none;
      &:active {
        background-color: $borderLevel3Color;
      }
      &.active .label {
        color: $primaryColor;
      }
      .icon {
        width: 20px;
        height: 20px;
        margin-right: 20px;
      }
      .label {
        font-size: 16px;
        text-transform: capitalize;
        color: $normalTextColor;
      }
    }
  }
}
</style>