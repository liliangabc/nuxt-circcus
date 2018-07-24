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
      console.log(this.type)
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
  .message {
    width: 100%;
    min-height: 34px;
    line-height: 1.45;
    padding: 8px;
    color: #fff;
    font-size: 13px;
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
  &.v-enter-active {
    transition: all .3s ease-out;
  }
  &.v-leave-active {
    transition: all .3s ease-in;
  }
  &.v-enter, &.v-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
}
</style>