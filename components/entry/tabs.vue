<template>
<div class="com-entry-tabs">
  <div class="inner-box">
    <nuxt-link to="/entry/login">log in</nuxt-link>
    <nuxt-link to="/entry/register">sign up</nuxt-link>
  </div>
</div>
</template>
<style lang="scss">
$tabHeight: 40px;
.com-entry-tabs {
  height: $tabHeight;
  padding: 0 18px;
  margin-top: -$tabHeight/2;
  .inner-box {
    height: 100%;
    box-shadow: $boxShadowDepth2;
    border-radius: $tabHeight/2;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    a {
      width: 48.5%;
      height: 100%;
      line-height: $tabHeight;
      text-align: center;
      font-size: 15px;
      color: $normalTextColor;
      text-transform: capitalize;
      border-radius: $tabHeight/2;
      &.nuxt-link-active {
        color: #fff;
        background-color: $econdaryPrimaryColor;
      }
    }
  }
}
</style>