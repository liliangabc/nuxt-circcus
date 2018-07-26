<template>
<transition>
  <div class="com-dialog-wrapper" v-show="visible" :style="{zIndex}">
    <div class="overlay" @click="onOverlayClick"></div>
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
    <com-overlay v-show="visible" :zIndex="zIndex - 1"></com-overlay>
  </div>
</transition>
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
    width: String,
    isModal: false
  },
  computed: {
    dialogStyle() {
      let { width } = this
      return width ? { width } : {}
    }
  },
  watch: {
    visible(newval) {
      this.visibleChange()
    }
  },
  methods: {
    onClose() {
      this.$emit('update:visible', false)
    },
    visibleChange() {
      if (this.visible) this.zIndex = getMaxZIndex() + 2
    },
    onOverlayClick() {
      if (!this.isModal) this.onClose()
    }
  },
  mounted() {
    this.visibleChange()
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
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &, > .overlay {
    top: 0;
    left: 0;
  }
  > .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  &.v-enter-active, &.v-leave-active {
    transition: all .45s cubic-bezier(0.23, 1, 0.32, 1);
  }
  &.v-enter, &.v-leave-to {
    opacity: 0;
    transform: translateY(12px);
  }
}
.com-dialog {
  width: 80%;
  border-radius: 4px;
  background-color: #fff;
  position: relative;
  z-index: 1;
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
    width: 32px;
    height: 32px;
    line-height: 1;
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
  padding: 12px $dialogPadding;
  text-align: center;
  border-top: 1px solid $borderLevel3Color;
  .com-button {
    height: 28px;
    font-size: 12px;
    text-transform: uppercase;
    & + .com-button {
      margin-left: 15px;
    }
  }
}
</style>