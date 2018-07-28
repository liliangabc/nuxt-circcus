<template>
<com-level-sub-nav-layout v-cloak class="com-iframe-view" title="q&a">
  <iframe frameborder="0" v-if="curUrl" :src="curUrl"></iframe>
  <ul v-else class="page-settings-help">
    <li v-for="item in dataList" :key="item.title" @click="goPage(item)">
      <span class="label">{{item.title}}</span>
      <i class="arrow"></i>
    </li>
  </ul>
</com-level-sub-nav-layout>
</template>
<script>
export default {
  asyncData({ store }) {
    return store.dispatch('settings/fetchQAList').catch(err => ({ errmsg: err.message }))
  },
  data() {
    return {
      dataList: [],
      curUrl: ''
    }
  },
  watch: {
    $route(newval) {
      if (!newval.query.url) this.curUrl = ''
    }
  },
  methods: {
    goPage(item) {
      this.curUrl = item.url
      this.$router.push({
        name: this.$route.name,
        query: { url: escape(item.url) }
      })
    }
  },
  mounted() {
    let { url } = this.$route.query
    this.curUrl = url ? unescape(url) : ''
  }
}
</script>
<style lang="scss">
.page-settings-help {
  li {
    height: 53px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid $borderLevel3Color;
    &:active {
      background-color: $borderLevel3Color;
    }
    .label {
      flex: 1;
      font-size: 14px;
      color: $normalTextColor;
    }
    .arrow {
      width: 24px;
      height: 24px;
      background: url(~/assets/img/settings/ARROW---LEFT-copy-18.png) no-repeat center center/auto 12px;
    }
  }
}
</style>