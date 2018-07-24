<template>
<div class="com-entry-subwrapper com-entry-findpwd">
  <com-icon-button class="btn-back" :src="iconBack" icon-size="18" @click="onBack"></com-icon-button>
  <p class="hint">Enter your email address and we'll send you a link to rest your</p>
  <div class="form-item">
    <div class="label">Email address</div>
    <com-input v-model.trim="userName"></com-input>
  </div>
  <com-button class="btn-submit" fullWidth :disabled="disabled" @click="onSubmit">SEND</com-button>
</div>
</template>
<script>
import iconBack from '~/assets/img/entry/arrow-left54x42.png'
export default {
  data() {
    return {
      iconBack,
      userName: ''
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
      const comLoading = this.$loading()
      this.$store.dispatch('findpwd', {
        userName: this.userName
      }).then(() => {
        comLoading.close()
        this.$router.replace('/entry/findsuccess')
      }).catch(err => {
        comLoading.close()
        this.$toast({ message: err.message, type: 'error' })
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