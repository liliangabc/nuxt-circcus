<template>
<com-icon-button class="com-float-button" :class="{flexbox: !src}"
  :src="src" 
  :size="size" 
  :icon-size="iconSize"
  @click="$emit('click', $event)">
    <slot></slot>
  </com-icon-button>
</template>
<script>
export default {
  props: {
    src: String,
    size: [Number, String],
    iconSize: [Number, String]
  }
}
</script>
<style lang="scss">
.com-float-button {
  background-color: $econdaryPrimaryColor;
  transition: all .2s ease;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
  &.flexbox {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:active {
    box-shadow: 0 7px 8px -4px rgba(0,0,0,.2), 0 12px 17px 2px rgba(0,0,0,.14), 0 5px 22px 4px rgba(0,0,0,.12);
  }
}
</style>