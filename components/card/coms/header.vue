<template>
<header class="com-card-item-header">
  <com-avator :src="avator"></com-avator>
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
import { setPicSize } from '~/plugins'
import { propsMixin } from '../mixins'
export default {
  mixins: [propsMixin],
  computed: {
    avator() {
      return setPicSize(this.item.userHeadImage, 40)
    }
  }
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