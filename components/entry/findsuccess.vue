<template>
<div class="com-entry-subwrapper com-entry-findsuccess">
  <p class="hint">An email with password rest has been sent!</p>
  <img class="success-img" src="~/assets/img/entry/pwd_re_success.png">
  <com-button fullWidth @click="goLoginPage">BACK TO LOGIN</com-button>
</div>
</template>
<script>
export default {
  methods: {
    goLoginPage() {
      this.$router.replace('/entry')
    }
  }
}
</script>
<style lang="scss">
.com-entry-subwrapper.com-entry-findsuccess {
  text-align: center;
  .hint {
    font-size: 13px;
    color: $primaryColor;
  }
  .success-img {
    width: 74px;
    height: 74px;
    margin: 24px 0 60px;
  }
}
</style>