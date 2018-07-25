<template>
<div class="page-home-type">
  <com-home-header></com-home-header>
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

</style>