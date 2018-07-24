<template>
<transition @after-leave="onAfterLeave">
  <div class="com-loading" v-if="isOpen" :class="{isFull}">
    <div class="overlay" :style="styles"></div>
    <com-spinner :size="size"></com-spinner>
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
    size: String,
    bgcolor: String,
    target: {}
  },
  computed: {
    styles() {
      let { bgcolor } = this
      return bgcolor ? { backgroundColor: bgcolor } : {}
    },
    isFull() {
      return !this.target
    }
  },
  methods: {
    init() {
      this.isOpen = true
      this.zIndex = getMaxZIndex() + 1
      this.$nextTick(() => {
        let target = this.target || document.body
        target.appendChild(this.$el)
      })
    },
    onAfterLeave() {
      this.$emit('close')
    },
    close() {
      this.isOpen = false
    }
  },
  mounted() {
    this.init()
  }
}
</script>
<style lang="scss">
.com-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  &, .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .overlay {
    opacity: .7;
    background-color: #fff;
  }
  &.isFull {
    position: fixed;
  }
  &.v-enter-active, &.v-leave-active {
    transition: opacity .3s ease;
  }
  &.v-enter, &.v-leave-to {
    opacity: 0;
  }
}
</style>