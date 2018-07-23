<template>
<div class="com-entry-subwrapper com-entry-findpwd">
  <com-icon-button class="btn-back" :src="iconBack" icon-size="18" @click="onBack"></com-icon-button>
  <p class="hint">Enter your email address and we'll send you a link to rest your</p>
  <div class="form-item">
    <div class="label" @click="toast = true">Email address</div>
    <com-input v-model.trim="userName"></com-input>
  </div>
  <com-button class="btn-submit" fullWidth :disabled="disabled" @click="onSubmit">SEND</com-button>
  <com-loading fullscreen v-if="loading"></com-loading>
  <com-toast :open.sync="toast" message="hello world"></com-toast>
</div>
</template>
<script>
import iconBack from '~/assets/img/entry/arrow-left54x42.png'
export default {
  data() {
    return {
      iconBack,
      loading: false,
      userName: '',
      toast: false
    }
  },
  computed: {
    disabled() {
      return !this.userName
    }
  },
  methods: {
    onBack() {
      this.$router.back()
    },
    onSubmit() {
      if (this.disabled) return
      this.loading = true
      this.$store.dispatch('findpwd', {
        userName: this.userName
      }).then(() => {
        this.loading = false
        this.$router.replace('/entry')
      }).catch(err => {
        this.loading = false
      })
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