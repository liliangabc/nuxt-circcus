<template>
<button class="com-tabbar-item">{{label}}</button>
</template>
<script>
export default {
  props: {
    label: String,
    value: {}
  }
}
</script>
<style lang="scss">
.com-tabbar-item {
  height: 100%;
  color: #fff;
  padding: 0 12px;
  font-size: 12px;
  background: transparent;
  text-transform: uppercase;
  color: rgba(255, 255, 255, .7);
  &.active {
    color: #fff;
    border-bottom: 3px solid $warningColor;
  }
}
</style>