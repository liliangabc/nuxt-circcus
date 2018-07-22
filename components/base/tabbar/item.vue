<template>
<button class="com-tabbar-item" :class="{active: isActive}" @click="onTabChange">{{label}}</button>
</template>
<script>
export default {
  props: {
    label: String,
    value: {}
  },
  computed: {
    isActive() {
      return this.value === this.$parent.value
    }
  },
  methods: {
    onTabChange() {
      this.$parent.$emit('input', this.value)
      this.$parent.$emit('tab-change', this.value)
    }
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
  border-bottom: 3px solid transparent;
  &.active {
    color: #fff;
    border-bottom-color: $warningColor;
  }
}
</style>