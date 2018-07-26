<template>
<ul class="com-card-list">
  <com-card-item v-for="item in dataList" :key="item.id" :item="item"></com-card-item>
</ul>
</template>
<script>
import ComCardItem from './item'
export default {
  components: { ComCardItem },
  props: {
    dataList: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss">
.com-card-list {
  padding: 6px 0;
}
</style>