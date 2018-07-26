<template>
<com-drawer class="com-sidebar" :open="sidebarVisible" @close="onSidebarClose">
  <template v-if="token">
    <header class="com-sidebar-header">
      <com-avator size="60" :src="userInfo.userHeadImage"></com-avator>
      <h3 class="username">{{userInfo.nickName}}</h3>
      <h4 class="school">{{userInfo.collegeName}}</h4>
    </header>
    <ul class="menu-list">
      <li class="menu-item"
        v-for="item in menuItems"
        :key="item.label"
        :class="{active: isActive(item)}"
        @click="onItemClick(item)">
        <img class="icon" :src="item.src">
        <span class="label">{{item.label}}</span>
      </li>
    </ul>
  </template>
  <div v-else class="entry-btns">
    <com-button fullWidth square @click="goPage('/entry')">log in</com-button>
    <com-button fullWidth square @click="goPage('/entry/register')">sign up</com-button>
  </div>
</com-drawer>
</template>
<script>
const _require = name => require(`~/assets/img/sidebar/${name}.png`)
const menuItems = [
  { label: 'home', name: 'home', src: _require('home') },
  { label: 'my classes', name: 'myclasses', src: _require('categories') },
  { label: 'my points', name: 'mypoints', src: _require('points') },
  { label: 'messages', name: 'messages', src: _require('messages') },
  { label: 'notifications', name: 'notifications', src: _require('lingdang') },
  { label: 'my gifts', name: 'mygifts', src: _require('mygifts') },
  { label: 'favorite', name: 'favorite', src: _require('favorites') },
  { label: 'activity log', name: 'activity-log', src: _require('activitielog') },
  { label: 'answer questions', name: 'answer-questions', src: _require('question') },
  { label: 'settings', name: 'settings', src: _require('setting') },
  { label: 'logout', name: 'logout', src: _require('logout') }
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
    },
    token() {
      return this.$store.state.userData.token
    }
  },
  methods: {
    onSidebarClose() {
      this.$store.commit('toggleSidebar')
    },
    onItemClick(item) {
      this.onSidebarClose()
      let { name } = item
      if (name === 'logout') {
        this.$store.dispatch('logout').then(data => {
          this.$router.push('/entry')
        }).catch(err => 
          this.$toast({ message: err.message, type: 'error' })
        )
      } else {
        this.$router.replace({ name: item.name })
      }
    },
    isActive(item) {
      return this.$route.name.indexOf(item.name) !== -1
    },
    goPage(url) {
      this.onSidebarClose()
      this.$router.push(url)
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
  .entry-btns {
    padding: 12px;
    .com-button + .com-button {
      margin-top: 12px;
    }
  }
}
</style>