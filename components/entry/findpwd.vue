<template>
<div class="com-entry-subwrapper com-entry-findpwd">
  <com-icon-button class="btn-back" :src="iconBack" icon-size="18" @click="onBack"></com-icon-button>
  <p class="hint">Enter your email address and we'll send you a link to rest your</p>
  <div class="form-item">
    <div class="label" @click="showLoading">Email address</div>
    <com-input></com-input>
  </div>
  <com-button class="btn-submit" fullWidth>SEND</com-button>
  <com-loading fullscreen v-if="loading"></com-loading>
</div>
</template>
<script>
import iconBack from '~/assets/img/entry/arrow-left54x42.png'
export default {
  data() {
    return {
      iconBack,
      loading: false
    }
  },
  methods: {
    onBack() {
      this.$router.back()
    },
    showLoading() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>
<style lang="scss">
.com-entry-subwrapper.com-entry-findpwd {
  padding-top: 60px;
  .btn-back {
    position: absolute;
    top: 6px;
    left: 6px;
  }
  .hint {
    text-align: center;
    font-size: 14px;
    margin-bottom: 24px;
    color: $secondaryTextColor;
  }
}
</style>