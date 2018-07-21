<template>
<div class="com-home-header">
  <com-navbar title="Home">
    <com-icon-button slot="left" :src="iconMenu"></com-icon-button>
    <com-icon-button slot="right" :src="iconSearch"></com-icon-button>
  </com-navbar>
  <com-tabbar>
    <com-tabbar-item class="active" label="updates"></com-tabbar-item>
    <com-tabbar-item label="marketplace"></com-tabbar-item>
    <com-tabbar-item label="events"></com-tabbar-item>
    <com-tabbar-item label="classes"></com-tabbar-item>
    <com-tabbar-item label="meetup"></com-tabbar-item>
  </com-tabbar>
</div>
</template>
<script>
import iconSearch from '~/assets/img/base/search_icon_white.png'
import iconMenu from '~/assets/img/base/sanq@3x.png'
export default {
  data() {
    return {
      iconSearch,
      iconMenu
    }
  }
}
</script>
<style lang="scss">

</style>