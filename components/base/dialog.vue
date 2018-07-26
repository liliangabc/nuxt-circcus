<template>
<div class="com-dialog-wrapper" v-show="visible" :style="{zIndex}">
  <div class="com-dialog" :style="dialogStyle" :class="dialogClass">
    <div class="com-dialog-title">
      <slot name="title">{{title}}</slot>
      <button class="btn-close" @click="onClose">&times;</button>
    </div>
    <div class="com-dialog-body">
      <slot></slot>
    </div>
    <div class="com-dialog-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</div>
</template>
<script>
import { getMaxZIndex } from './tools'
export default {
  data() {
    return { zIndex: 0 }
  },
  props: {
    visible: Boolean,
    title: String,
    dialogClass: String,
    width: String
  },
  computed: {
    dialogStyle() {
      let { width } = this
      return width ? { width } : {}
    }
  },
  watch: {
    visible(newval) {
      if (newval) this.updateZIndex()
    }
  },
  methods: {
    onClose() {
      this.$emit('update:visible', false)
    },
    updateZIndex() {
      this.zIndex = getMaxZIndex() + 2
    }
  },
  mounted() {
    this.updateZIndex()
    document.body.appendChild(this.$el)
  },
  beforeDestroy() {
    this.$el.remove()
  }
}
</script>
<style lang="scss">
$dialogPadding: 20px;
.com-dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .7);
  display: flex;
  align-items: center;
  justify-content: center;
}
.com-dialog {
  width: 80%;
  border-radius: 4px;
  background-color: #fff;
}
.com-dialog-title {
  padding: $dialogPadding;
  padding-bottom: $dialogPadding/2;
  font-size: 18px;
  min-height: 48px;
  color: $primaryTextColor;
  text-transform: capitalize;
  position: relative;
  border-bottom: 1px solid $borderLevel3Color;
  .btn-close {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    font-size: 24px;
    background: transparent;
    color: $secondaryTextColor;
    &:active {
      background-color: $borderLevel3Color;
    }
  }
}
.com-dialog-body {
  padding: $dialogPadding;
  font-size: 14px;
  color: $normalTextColor;
}
.com-dialog-actions {
  padding: $dialogPadding/2 $dialogPadding;
  text-align: center;
  border-top: 1px solid $borderLevel3Color;
  .com-button {
    height: 28px;
    font-size: 12px;
    text-transform: uppercase;
    & + .com-button {
      margin-left: 12px;
    }
  }
}
</style>