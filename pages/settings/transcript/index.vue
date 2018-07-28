<template>
<com-level-sub-nav-layout title="submit grades" class="page-settings-transcript">
  <com-float-button class="btn-add" size="50">+</com-float-button>
</com-level-sub-nav-layout>
</template>
<script>
export default {
  // asyncData({ store }) {
  //   return store.dispatch('settings/getVerifiedCourseList', {}).catch(err => ({ errmsg: err.message }))
  // },
  data() {
    return {
      dataList: [],
      hasNext: false,
      page: 1,
      loading: false
    }
  }
}
</script>
<style lang="scss">
.page-settings-transcript {
  .btn-add {
    position: fixed;
    right: 15px;
    bottom: 15px;
    color: #fff;
    font-size: 32px;
  }
}
</style>