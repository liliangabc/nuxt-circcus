<template>
<ul class="com-card-comment-list">
  <li class="com-card-comment-item" v-for="item in curDataList" :key="item.id">
    <com-card-item-header :item="item"></com-card-item-header>
    <section class="body">
      <div class="content">{{item.content | toText}}</div>
      <com-card-item-picbox v-if="item.picUrls" :item="item"></com-card-item-picbox>
    </section>
  </li>
</ul>
</template>
<script>
import ComCardItemHeader from './coms/header'
import ComCardItemPicbox from './coms/picbox'
export default {
  components: { ComCardItemHeader, ComCardItemPicbox },
  props: {
    dataList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.userData.userInfo
    },
    curDataList() {
      let { dataList } = this
      let { nickName, collegeName } = this.userInfo
      dataList.forEach(_ => {
        _.nickName = nickName
        _.collegeName = collegeName
      })
      return dataList
    }
  }
}
</script>
<style lang="scss">
.com-card-comment-list {
  padding: 6px 0;
  .com-card-comment-item {
    background-color: #fff;
    + .com-card-comment-item {
      margin-top: 6px;
    }
    .body {
      padding: 6px 12px;
      border-top: 1px solid $borderLevel4Color;
      .content {
        font-size: 14px;
        color: $normalTextColor;
      }
    }
  }
}
</style>