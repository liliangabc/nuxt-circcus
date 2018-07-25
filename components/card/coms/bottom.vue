<template>
<div class="com-card-item-bottom">
  <ul v-if="isMarket" class="market">
    <li class="used">{{item.isNew === '0' ? 'Used' : 'New'}}</li>
    <li class="offer" v-if="item.offer === '1'">Offer</li>
    <li class="offer is-need" v-else>Need</li>
    <li class="price">${{+item.price}}</li>
  </ul>
  <ul v-else class="list">
    <li class="comments">{{item.comments}}</li>
    <li class="view">{{item.viewCount}}</li>
    <li class="like">{{item.likeCount}}</li>
    <li class="cai">{{item.caiCount}}</li>
    <li class="spring"></li>
    <li class="coins">{{item.coins}}</li>
  </ul>
</div>
</template>
<script>
import { posts } from '~/plugins'
import { propsMixin } from '../mixins'
export default {
  mixins: [propsMixin],
  computed: {
    isMarket() {
      return posts.isMarket(this.type)
    }
  }
}
</script>
<style lang="scss">
.com-card-item-bottom {
  .market, .list {
    height: 32px;
    display: flex;
    align-items: center;
  }
  .list {
    li {
      padding-left: 16px;
      font-size: 12px;
      color: $normalTextColor;
      background-repeat: no-repeat;
      background-position: 0 center;
      background-size: 14px;
      + li {
        margin-left: 18px;
      }
    }
    .comments {
      background-image: url(~/assets/img/posts/speech-bubble-copy-7.png);
    }
    .view {
      background-image: url(~/assets/img/posts/Shapeyj.png);
    }
    .like {
      background-image: url(~/assets/img/posts/ARROW---LEFT-copy-2.png);
    }
    .cai {
      background-image: url(~/assets/img/posts/ARROW---LEFT-copy-3.png);
    }
    .coins {
      background-image: url(~/assets/img/posts/Vector-Smart-Object-copy-6.png);
    }
    .spring {
      flex: 1;
    }
  }
  .market {
    justify-content: space-between;
    .used {
      color: $secondaryTextColor;
    }
    .offer {
      color: $primaryColor;
      &.is-need {
        color: $warningColor;
      }
    }
    .price {
      color: $successColor;
    }
  }
}
</style>