<template>
<com-level-one-nav-layout class="page-mypoints" title="my points">
  <com-coins-header :coins="coins"></com-coins-header>
  <ul class="list">
    <li class="item" v-for="item in dataList" :key="item.id">
      <div class="group">
        <h3 class="title">{{item.title}}</h3>
        <span class="date">{{item.orderTime}}</span>
      </div>
      <span class="dealcoins isadd" v-if="+item.dealCoins > 0">+{{item.dealCoins}}</span>
      <span class="dealcoins" v-else>{{item.dealCoins}}</span>
    </li>
  </ul>
  <com-loadmore v-if="hasNext" :loading="loading" @loadmore="getData('loadmore')"></com-loadmore>
  <com-bottom-actions></com-bottom-actions>
</com-level-one-nav-layout>
</template>
<script>
import ComCoinsHeader from '~/components/mypoints/coins-header'
import ComBottomActions from '~/components/mypoints/bottom-actions'
export default {
  components: { ComCoinsHeader, ComBottomActions },
  asyncData({ store }) {
    return store.dispatch('mypoints/fetchLogList', {}).catch(err => ({ errmsg: err.message }))
  },
  data() {
    return {
      coins: 0,
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
      return this.$store.dispatch('mypoints/fetchLogList', {
        page: this.page
      }).then(({ dataList, hasNext, coins }) => {
        this.loading = false
        if (action === 'loadmore') {
          this.dataList.push(...dataList)
        } else {
          this.dataList = dataList
        }
        this.hasNext = hasNext
        this.coins = coins
      }).catch(err => {
        this.loading = false
        this.$toastErr(err)
      })
    }
  }
}
</script>
<style lang="scss">
.page-mypoints {
  .list {
    padding-left: 12px;
    .item {
      padding: 12px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid $borderLevel3Color;
      .group {
        flex: 1;
        margin-right: 12px;
        .title {
          font-size: 15px;
          margin-bottom: 3px;
          color: $primaryTextColor;
        }
        .date {
          font-size: 12px;
          color: $secondaryTextColor;
        }
      }
      .dealcoins {
        font-size: 17px;
        white-space: nowrap;
        color: $dangerColor;
        &.isadd {
          color: $econdaryPrimaryColor;
        }
      }
    }
  }
}
</style>