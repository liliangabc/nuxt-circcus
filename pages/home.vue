<template>
<com-level-one-nav-layout class="page-home" style="padding-top: 96px;" title="home" has-search>
  <com-tabbar slot="head-bottom">
    <com-tabbar-item
      v-for="item in tabs"
      :key="item.value"
      :label="item.label"
      :to="`/home/${item.value}`">
    </com-tabbar-item>
  </com-tabbar>
  <nuxt/>
  <com-home-filter-actions @openDialog="openFilterDialog"></com-home-filter-actions>
  <com-home-filter-dialog ref="filterDialog"></com-home-filter-dialog>
</com-level-one-nav-layout>
</template>
<script>
import ComHomeFilterActions from '~/components/home/filter-actions'
import ComHomeFilterDialog from '~/components/home/filter-dialog'
const tabs = [
  { label: 'updates', value: '5' },
  { label: 'marketplace', value: '2' },
  { label: 'events', value: '1' },
  { label: 'classes', value: '3' },
  { label: 'meetup', value: '4' }
]
export default {
  data() {
    return { tabs }
  },
  components: {
    ComHomeFilterActions, ComHomeFilterDialog
  },
  watch: {
    $route(newval) {
      window.scrollTo(0, 0)
    }
  },
  methods: {
    openFilterDialog(event) {
      this.$refs.filterDialog.open()
    },
    handleTabChange(value) {
      this.$router.replace(`/home/${value}`)
    }
  },
  beforeRouteEnter(to, from, next) {
    if (process.browser) window.scrollTo(0, 0)
    next()
  }
}
</script>
<style lang="scss">
.page-home {
  background-color: #f3f3f3;
}
</style>