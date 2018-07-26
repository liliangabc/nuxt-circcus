<template>
<div class="page-home">
  <com-home-header></com-home-header>
  <nuxt/>
  <com-home-filter-actions @openDialog="openFilterDialog"></com-home-filter-actions>
  <com-home-filter-dialog ref="filterDialog"></com-home-filter-dialog>
</div>
</template>
<script>
import ComHomeHeader from '~/components/home/header'
import ComHomeFilterActions from '~/components/home/filter-actions'
import ComHomeFilterDialog from '~/components/home/filter-dialog'
export default {
  components: {
    ComHomeHeader,
    ComHomeFilterActions,
    ComHomeFilterDialog
  },
  watch: {
    $route(newval) {
      window.scrollTo(0, 0)
    }
  },
  methods: {
    openFilterDialog(event) {
      this.$refs.filterDialog.open()
    }
  }
}
</script>
<style lang="scss">
.page-home {
  min-height: 100vh;
  padding-top: 96px;
  background-color: #f3f3f3;
}
</style>