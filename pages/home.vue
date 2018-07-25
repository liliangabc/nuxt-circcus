<template>
<div class="page-home">
  <com-home-header></com-home-header>
  <nuxt/>
  <com-home-filter-actions></com-home-filter-actions>
</div>
</template>
<script>
import ComHomeHeader from '~/components/home/header'
import ComHomeFilterActions from '~/components/home/filter-actions'
export default {
  components: { ComHomeHeader, ComHomeFilterActions }
}
</script>
<style lang="scss">
.page-home {
  min-height: 100vh;
  padding-top: 96px;
  background-color: #f3f3f3;
}
</style>