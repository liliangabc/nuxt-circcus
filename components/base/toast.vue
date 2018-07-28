<template>
<transition @after-leave="onAfterLeave">
  <div class="com-toast" v-if="isOpen" :style="{zIndex}">
    <div class="message" :class="type">{{message}}</div>
  </div>
</transition>
</template>
<script>
import { getMaxZIndex } from './tools'
export default {
  data() {
    return {
      zIndex: 0,
      isOpen: false
    }
  },
  props: {
    message: String,
    type: String,
    delay: {
      type: [Number, String],
      default: 3000
    }
  },
  methods: {
    init() {
      this.isOpen = true
      this.zIndex = getMaxZIndex() + 1
      this.$nextTick(() => {
        document.body.appendChild(this.$el)
      })
      setTimeout(() => { this.isOpen = false }, +this.delay)
    },
    onAfterLeave() {
      this.$emit('close')
    }
  },
  mounted() {
    this.init()
  }
}
</script>
<style lang="scss">
.com-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  .message {
    width: 100%;
    min-height: 40px;
    line-height: 1.45;
    padding: 8px 12px;
    color: #fff;
    font-size: 14px;
    display: flex;
    align-items: center;
    background-color: $primaryColor;
    &.success {
      background-color: $successColor;
    }
    &.warning {
      background-color: $warningColor;
    }
    &.error {
      background-color: $dangerColor;
    }
    &.info {
      background-color: $infoColor;
    }
  }
  &.v-enter-active, &.v-leave-active {
    transition: all .24s ease;
  }
  &.v-enter, &.v-leave-to {
    opacity: 0;
    transform: translateY(12px);
  }
}
</style>