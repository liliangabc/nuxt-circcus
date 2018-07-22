<template>
<div class="com-navbar">
  <div class="com-navbar-left">
    <slot name="left">
      <com-icon-button :src="iconBack"></com-icon-button>
    </slot>
  </div>
  <div class="com-navbar-title">
    <slot name="title">{{title}}</slot>
  </div>
  <div class="com-navbar-right">
    <slot name="right"></slot>
  </div>
</div>
</template>
<script>
import iconBack from '~/assets/img/base/nav-back.png'
export default {
  data() {
    return {
      iconBack
    }
  },
  props: {
    title: String
  }
}
</script>
<style lang="scss">
$navbarHeight: 48px;
.com-navbar {
  height: $navbarHeight;
  padding: 0 6px;
  background: $primaryGradientColor;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.com-navbar-title {
  height: 100%;
  line-height: $navbarHeight;
  font-size: 18px;
  color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
}
.com-navbar-left, .com-navbar-right {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  .com-icon-button + .com-icon-button {
    margin-left: 6px;
  }
}
</style>