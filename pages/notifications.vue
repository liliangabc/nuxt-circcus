<template>
<com-level-one-nav-layout class="page-notifications" title="notifications">
  <ul class="list">
    <li class="item" v-for="item in dataList" :key="item.id">
      <com-avator :src="item.userHeadImage | setPicSize(40)"></com-avator>
      <div class="middle">
        <h3 class="title">{{item.nickName}}<span>{{item.title}}</span></h3>
        <p class="content">{{item.repContent}}</p>
        <span class="date">{{item.push_time}}</span>
      </div>
      <span class="dot" v-if="item.isRead == '0'"></span>
    </li>
  </ul>
  <com-loadmore v-if="hasNext" :loading="loading" @loadmore="onLoadmore"></com-loadmore>
</com-level-one-nav-layout>
</template>
<script>
export default {
  asyncData({ store }) {
    return store.dispatch('notications/fetchList', {}).then(data => {
      return {
        dataList: data.data.result,
        hasNext: data.data.hasNext === '1'
      }
    }).catch(err => console.log(err.message))
  },
  data() {
    return {
      dataList: [],
      hasNext: false,
      page: 1,
      loading: false
    }
  },
  methods: {
    getData(action) {
      this.loading = true
      this.page = action === 'loadmore' ? this.page + 1 : 1
      return this.$store.dispatch('notications/fetchList', {
        page: this.page
      }).then(data => {
        this.loading = false
        if (action === 'loadmore') {
          this.dataList.push(...data.data.result)
        } else {
          this.dataList = data.data.result
        }
        this.hasNext = data.data.hasNext === '1'
      }).catch(err => {
        this.loading = false
        this.$toast({ message: err.message, type: 'error' })
      })
    },
    onLoadmore() {
      this.getData('loadmore')
    }
  }
}
</script>
<style lang="scss">
.page-notifications {
  .list {
    padding-left: 12px;
    .item {
      display: flex;
      position: relative;
      padding: 12px 30px 12px 0;
      border-bottom: 1px solid $borderLevel3Color;
      .middle {
        margin-left: 12px;
        .title {
          font-size: 15px;
          color: $primaryTextColor;
          span {
            font-size: 12px;
            color: $secondaryTextColor;
          }
        }
        .content {
          font-size: 14px;
          margin: 3px 0;
          color: $normalTextColor;
        }
        .date {
          font-size: 12px;
          color: $secondaryTextColor;
          padding-left: 15px;
          background: url(~/assets/img/common/search_history.png) no-repeat 0 center/auto 10px;
        }
      }
      .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        margin-top: -6px;
        background-color: $primaryColor;
        position: absolute;
        top: 50%;
        right: 12px;
      }
    }
  }
}
</style>