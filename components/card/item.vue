<template>
<li class="com-card-item">
  <com-card-item-header :item="item" :type="type"></com-card-item-header>
  <com-card-item-body :item="item" :type="type"></com-card-item-body>
  <com-card-item-footer :item="item" :type="type"></com-card-item-footer>
</li>
</template>
<script>
import ComCardItemHeader from './coms/header'
import ComCardItemBody from './coms/body'
import ComCardItemFooter from './coms/footer'
export default {
  components: {
    ComCardItemHeader,
    ComCardItemBody,
    ComCardItemFooter
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    type() {
      return this.item.type || this.$route.params.type
    }
  }
}
</script>
<style lang="scss">
.com-card-item {
  background-color: #fff;
  + .com-card-item {
    margin-top: 12px;
  }
}
</style>