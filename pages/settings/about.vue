<template>
<com-level-sub-nav-layout title="about">
  <div class="page-settings-about">
    <ul class="list">
      <li class="item">
        <img class="qrcode" src="~/assets/img/settings/Android-200x200.png"><br>
        <span class="icon android"></span>
      </li>
      <li class="item">
        <img class="qrcode" src="~/assets/img/settings/IOS-200x200.png"><br>
        <span class="icon iphone"></span>
      </li>
    </ul>
    <footer>
      Search CIRCCUS on Google Play store and Apple app store. <br>
      Copyright Circcus,Inc. <br> or its affiliates {{year}} All Rights Reserved.
    </footer>
  </div>
</com-level-sub-nav-layout>
</template>
<script>
export default {
  data() {
    return {
      year: (new Date()).getFullYear()
    }
  }
}
</script>
<style lang="scss">
.page-settings-about {
  padding-top: 48px;
  .list {
    text-align: center;
    margin-bottom: 24px;
    .item {
      display: inline-block;
      + .item {
        margin-left: 12px;
      }
      .qrcode {
        width: 120px;
        height: 120px;
        margin-bottom: 8px;
      }
      .icon {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #000 no-repeat center center/70%;
        &.android {
          background-image: url(~/assets/img/settings/android.png);
        }
        &.iphone {
          background-image: url(~/assets/img/settings/iphone.png);
        }
      }
    }
  }
  footer {
    font-size: 12px;
    text-align: center;
    line-height: 1.6;
    color: $normalTextColor;
  }
}
</style>