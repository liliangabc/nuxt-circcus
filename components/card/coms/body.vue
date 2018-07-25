<template>
<div class="com-card-item-body">
  <section>
    <h4 class="cate">{{categoryName}}</h4>
    <h3 class="title">{{item.title}}</h3>
    <p class="content">{{item.subContent}}</p>
  </section>
  <com-card-item-picbox v-if="item.picUrls" :item="item"></com-card-item-picbox>
  <com-card-item-bottom v-if="hasBottomBar" :type="type" :item="item"></com-card-item-bottom>
</div>
</template>
<script>
import { posts } from '~/plugins'
import { propsMixin } from '../mixins'
import ComCardItemPicbox from './picbox'
import ComCardItemBottom from './bottom'
export default {
  components: { ComCardItemPicbox, ComCardItemBottom },
  mixins: [propsMixin],
  computed: {
    categoryName() {
      let { type } = this
      let { categoryName } = this.item
      if (categoryName) {
        return categoryName
      } else {
        return posts.isMoment(type) ? 'Moment' : posts.isClass(type) ? 'Class' : ''
      }
    },
    hasBottomBar() {
      let { type } = this
      return posts.isEvent(type) || posts.isClass(type) || posts.isMarket(type)
    }
  }
}
</script>
<style lang="scss">
.com-card-item-body {
  padding: 12px 12px 0;
  border-top: 1px solid $borderLevel4Color;
  border-bottom: 1px solid $borderLevel4Color;
  section {
    line-height: 1.5;
    .cate {
      font-size: 12px;
      color: $econdaryPrimaryColor;
    }
    .title {
      font-size: 18px;
      color: #8596b0;
    }
    .content {
      font-size: 14px;
      color: $normalTextColor;
    }
  }
}
</style>