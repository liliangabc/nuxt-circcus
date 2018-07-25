<template>
<div class="com-card-item-footer">
  <div v-if="isMoment" class="moment-footer">
    <span class="like">{{item.likeCount}} Like</span>
    <span class="comments">{{item.comments}} Comment</span>
  </div>
  <p v-else class="view-details">View Details</p>
</div>
</template>
<script>
import { posts } from '~/plugins'
import { propsMixin } from '../mixins'
export default {
  mixins: [propsMixin],
  computed: {
    isMoment() {
      return posts.isMoment(this.type)
    }
  }
}
</script>
<style lang="scss">
.com-card-item-footer {
  padding: 0 12px;
  color: $normalTextColor;
  .moment-footer {
    height: 48px;
    display: flex;
    align-items: center;
    span {
      padding-left: 24px;
      margin-right: 48px;
      line-height: 1.5;
      background-repeat: no-repeat;
      background-position: 0 center;
      background-size: auto 100%;
    }
    .like {
      background-image: url(~/assets/img/posts/HEART-copy-4@3x.png);
    }
    .comments {
      background-image: url(~/assets/img/posts/speech-bubble-copy-4@3x.png);
    }
  }
  .view-details {
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
}
</style>