<template>
<transition>
  <div class="com-toast" v-if="open">
    <div class="message" :class="type">{{message}}</div>
  </div>
</transition>
</template>
<script>
export default {
  props: {
    message: String,
    type: String,
    timeout: {
      type: [Number, String],
      default: 2500
    },
    open: Boolean
  },
  watch: {
    open(newval) {
      if (newval) this.close()
    }
  },
  methods: {
    close() {
      clearTimeout(this.tid)
      this.tid = setTimeout(() => {
        this.$emit('update:open', false)
      }, +this.timeout)
    }
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
    min-height: 40px;
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
    &.danger {
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