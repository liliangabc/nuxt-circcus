<template>
<div class="page-home">
  <com-home-header></com-home-header>
  <nuxt/>
  <com-home-filter-actions></com-home-filter-actions>
  <!-- <com-dialog title="filter" :visible.sync="dialogVisible">
    不好意思请登陆后重试。no zuo no die
    <com-button slot="actions" @click="dialogVisible = false">cancel</com-button>
    <com-button slot="actions" @click="dialogVisible = false">confirm</com-button>
  </com-dialog> -->
</div>
</template>
<script>
import ComHomeHeader from '~/components/home/header'
import ComHomeFilterActions from '~/components/home/filter-actions'
export default {
  components: { ComHomeHeader, ComHomeFilterActions },
  data() {
    return {
      dialogVisible: true
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