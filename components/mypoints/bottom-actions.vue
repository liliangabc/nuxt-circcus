<template>
<div class="com-mypoints-bottom-actions">
  <div class="overlay" v-if="listVisible" @touchstart="hideList" @mousedown="hideList"></div>
  <div class="actions">
    <transition>
      <div class="list" v-if="listVisible">
        <nuxt-link class="link-item" to="/mypoints/refund-list">
          <span class="label">Refund Request List</span>
          <span class="icon icon-refund"></span>
        </nuxt-link>
        <nuxt-link class="link-item" to="/mypoints/redeem">
          <span class="label">Redeem Points</span>
          <span class="icon icon-redeem"></span>
        </nuxt-link>
        <nuxt-link class="link-item" to="/mypoints/purchase">
          <span class="label">Purchase Points</span>
          <span class="icon icon-purchase"></span>
        </nuxt-link>
      </div>
    </transition>
    <com-float-button class="btn-add" size="50" @click="toggleListVisible">+</com-float-button>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      listVisible: false
    }
  },
  methods: {
    toggleListVisible() {
      this.listVisible = !this.listVisible
    },
    hideList() {
      this.listVisible = false
    }
  }
}
</script>
<style lang="scss">
.com-mypoints-bottom-actions {
  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 11;
  }
  .actions {
    position: fixed;
    right: 15px;
    bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 12;
    .list {
      padding-right: 8px;
      &.v-enter-active, &.v-leave-active {
        transition: all .24s ease;
      }
      &.v-enter, &.v-leave-to {
        opacity: 0;
        transform: translateX(12px);
      }
      .link-item {
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: $econdaryPrimaryColor;
        margin-bottom: 10px;
        border-radius: 15px;
        box-shadow: 0 0 6px $econdaryPrimaryColor;
        font-size: 12px;
        color: #fff;
        text-transform: capitalize;
        padding-left: 15px;
        .icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          margin-left: 3px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 100%;
          &.icon-refund {
            background-image: url(~/assets/img/mypoints/Shapew.png);
          }
          &.icon-redeem {
            background-image: url(~/assets/img/mypoints/reddeem-w.png);
          }
          &.icon-purchase {
            background-image: url(~/assets/img/mypoints/purchase-w.png);
          }
        }
      }
    }
    .btn-add {
      font-size: 32px;
      color: #fff;
    }
  }
}
</style>