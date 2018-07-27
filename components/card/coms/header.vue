<template>
<header class="com-card-item-header">
  <com-avator :src="item.userHeadImage | setPicSize(40)"></com-avator>
  <div class="middle">
    <h3 class="username">{{item.nickName}}</h3>
    <h4 class="school">{{item.collegeName}}</h4>
  </div>
  <div class="right">
    <slot name="head-right"></slot>
    <span class="date">{{item.lastModifyTime}}</span>
  </div>
</header>
</template>
<script>
import { propsMixin } from '../mixins'
export default {
  mixins: [propsMixin]
}
</script>
<style lang="scss">
.com-card-item-header {
  padding: 12px;
  display: flex;
  align-items: center;
  .middle {
    flex: 1;
    margin: 0 12px;
    .username {
      font-size: 14px;
      margin-bottom: 2px;
      color: $normalTextColor;
    }
  }
  .right {
    text-align: right;
    align-self: flex-end;
    .date {
      white-space: nowrap;
    }
  }
  .school, .date {
    font-size: 12px;
    color: $secondaryTextColor;
  }
}
</style>