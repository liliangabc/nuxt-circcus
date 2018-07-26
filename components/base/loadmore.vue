<template>
<div class="com-loadmore">
  <template v-if="loading">
    <com-spinner size="mini"></com-spinner>
    <span class="text">{{loadingText}}</span>
  </template>
</div>
</template>
<script>
export default {
  props: {
    scroller: null,
    loading: Boolean,
    loadingText: {
      type: String,
      default: 'loading...'
    }
  },
  methods: {
    onScroll() {
      if (this.loading) return
      let viewH, scrH, scrTop
      if (this.realScroller == window) {
        viewH = window.innerHeight
        scrH = document.body.scrollHeight
        scrTop = document.body.scrollTop || document.documentElement.scrollTop
      } else {
        viewH = this.realScroller.offsetHeight
        scrH = this.realScroller.scrollHeight
        scrTop = this.realScroller.scrollTop
      }
      if (scrH - viewH - scrTop < 100) this.$emit('loadmore')
    }
  },
  mounted() {
    this.realScroller = this.scroller || window
    this.realScroller.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    this.realScroller.removeEventListener('scroll', this.onScroll)
  }
}
</script>
<style lang="scss">
.com-loadmore {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: #fff;
  .text {
    margin-left: 3px;
    color: $secondaryTextColor;
  }
}
</style>