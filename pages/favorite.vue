<template>
<com-level-one-nav-layout class="page-favorite" style="padding-top: 96px;" title="favorite">
  <com-tabbar slot="head-bottom">
    <com-tabbar-item
      v-for="item in tabs"
      :key="item.value"
      :label="item.label"
      :to="`/favorite/${item.value}`">
    </com-tabbar-item>
  </com-tabbar>
  <nuxt/>
</com-level-one-nav-layout>
</template>
<script>
const tabs = [
  { label: 'marketplace', value: '2' },
  { label: 'events', value: '1' },
  { label: 'classes', value: '3' },
  { label: 'meetup', value: '4' }
]
export default {
  data() {
    return { tabs }
  },
  watch: {
    $route(newval) {
      window.scrollTo(0, 0)
    }
  },
  beforeRouteEnter(to, from, next) {
    if (process.browser) window.scrollTo(0, 0)
    next()
  }
}
</script>
<style lang="scss">
.page-favorite {
  background-color: #f3f3f3;
}
</style>