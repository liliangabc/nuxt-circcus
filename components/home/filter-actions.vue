<template>
<div class="com-home-filter-actions">
  <div class="overlay" v-show="listVisible" @touchstart="toggleList"></div>
  <div class="wrapper">
    <transition>
      <ul class="list" v-show="listVisible">
        <li>
          <com-float-button :src="icons.filter" size="32" icon-size="32" @click="openDialog"></com-float-button>
        </li>
        <li>
          <com-float-button :src="icons.add" size="32" icon-size="32"></com-float-button>
        </li>
      </ul>
    </transition>
    <com-float-button class="btn-more" :src="icons.more" size="50" icon-size="50" @click="toggleList"></com-float-button>
  </div>
</div>
</template>
<script>
const _require = name => require(`~/assets/img/common/${name}.png`)
const icons = {
  add: _require('btn-add'),
  edit: _require('btn-edit'),
  filter: _require('btn-filter'),
  more: _require('btn-more')
}
export default {
  data() {
    return {
      icons,
      listVisible: false
    }
  },
  methods: {
    toggleList() {
      this.listVisible = !this.listVisible
    },
    openDialog(event) {
      this.$emit('openDialog', event)
    }
  }
}
</script>
<style lang="scss">
.com-home-filter-actions {
  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 11;
  }
  .wrapper {
    position: fixed;
    right: 15px;
    bottom: 15px;
    z-index: 12;
    .list {
      text-align: center;
      &.v-enter-active, &.v-leave-active {
        transition: all .24s ease-in-out;
      }
      &.v-enter, &.v-leave-to {
        opacity: 0;
        transform: translateY(90%);
      }
      li {
        margin-bottom: 8px;
      }
    }
    .btn-more {
      position: relative;
      z-index: 1;
    }
  }
}
</style>