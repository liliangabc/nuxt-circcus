<template>
<com-level-one-nav-layout class="page-settings" title="settings">
  <ul class="list">
    <li class="item" v-for="item in listItems" :key="item.label">
      <nuxt-link class="link" :to="item.to">
        <img class="icon" :src="item.icon">
        <span class="label">{{item.label}}</span>
        <i class="arrow"></i>
      </nuxt-link>
    </li>
  </ul>
</com-level-one-nav-layout>
</template>
<script>
const _require = name => require(`~/assets/img/settings/${name}.png`)
const listItems = [
  { label: 'my account', to: '/settings/account', icon: _require('account') },
  { label: 'transcript', to: '/settings/transcript', icon: _require('tean') },
  { label: 'q&a', to: '/settings/help', icon: _require('qa') },
  { label: 'privacy policy', to: '/settings/privacy', icon: _require('ppolicy') },
  { label: 'user terms', to: '/settings/userterms', icon: _require('term') },
  { label: 'contact us', to: '/settings/contactus', icon: _require('contact') },
  { label: 'about', to: '/settings/about', icon: _require('about') }
]
export default {
  data() {
    return { listItems }
  }
}
</script>
<style lang="scss">
.page-settings {
  .list {
    .item {
      height: 56px;
      border-bottom: 1px solid $borderLevel3Color;
      .link {
        display: block;
        height: 100%;
        padding: 0 16px;
        display: flex;
        align-items: center;
        &:active {
          background-color: $borderLevel3Color;
        }
      }
      .icon, .arrow {
        width: 24px;
        height: 24px;
      }
      .label {
        padding: 0 7px;
        text-transform: capitalize;
        font-size: 14px;
        flex: 1;
        color: $normalTextColor;
      }
      .arrow {
        background: url(~/assets/img/settings/ARROW---LEFT-copy-18.png) no-repeat center center/auto 12px;
      }
    }
  }
}
</style>