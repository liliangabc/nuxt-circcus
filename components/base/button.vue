<template>
<button class="com-button" tabindex="-1"
  :disabled="disabled"
  :class="[{fullWidth, plain, square}, size, type]"
  @click="$emit('click', $event)">
  <slot></slot>
</button>
</template>
<script>
export default {
  props: {
    size: String,
    fullWidth: Boolean,
    type: String,
    plain: Boolean,
    disabled: Boolean,
    square: Boolean
  }
}
</script>
<style lang="scss">
.com-button {
  padding: 0 15px;
  height: 36px;
  border-radius: 18px;
  min-width: 66px;
  font-size: 15px;
  color: #fff;
  user-select: none;
  text-transform: uppercase;
  background-color: $econdaryPrimaryColor;
  transition: all .12s ease;
  &:active {
    background-color: mix(#fff, $econdaryPrimaryColor, 20%);
  }
  &.fullWidth {
    width: 100%;
  }
  &.square {
    border-radius: 4px;
  }
  &.small {
    height: 32px;
    border-radius: 16px;
  }
  &.mini {
    height: 28px;
    border-radius: 14px;
    font-size: 13px;
  }
  &.plain {
    color: $econdaryPrimaryColor;
    border: 1px solid $econdaryPrimaryColor;
    background-color: #fff;
    &:active, &.active {
      color: #fff;
      background-color: $econdaryPrimaryColor;
    }
  }
  &.success {
    background-color: $successColor;
    &:active {
      background-color: mix(#fff, $successColor, 20%);
    }
    &.plain {
      color: $successColor;
      border: 1px solid $successColor;
      &:active, &.active {
        color: #fff;
        background-color: $successColor;
      }
    }
  }
  &.warning {
    background-color: $warningColor;
    &:active {
      background-color: mix(#fff, $warningColor, 20%);
    }
    &.plain {
      color: $warningColor;
      border: 1px solid $warningColor;
      &:active, &.active {
        color: #fff;
        background-color: $warningColor;
      }
    }
  }
  &.danger {
    background-color: $dangerColor;
    &:active {
      background-color: mix(#fff, $dangerColor, 20%);
    }
    &.plain {
      color: $dangerColor;
      border: 1px solid $dangerColor;
      &:active, &.active {
        color: #fff;
        background-color: $dangerColor;
      }
    }
  }
  &.info {
    background-color: $infoColor;
    &:active {
      background-color: mix(#fff, $infoColor, 20%);
    }
    &.plain {
      color: $infoColor;
      border: 1px solid $infoColor;
      &:active, &.active {
        color: #fff;
        background-color: $infoColor;
      }
    }
  }
  &:disabled {
    opacity: .38;
    cursor: not-allowed;
  }
}
</style>