<template>
<div class="com-entry-subwrapper com-entry-register">
  <div class="form-item">
    <div class="label">Email address</div>
    <com-input v-model="userName"></com-input>
  </div>
  <div class="form-item">
    <div class="label">User name</div>
    <com-input v-model="userName"></com-input>
  </div>
  <div class="form-item">
    <div class="label">Password</div>
    <com-input type="password"></com-input>
  </div>
  <div class="form-item">
    <div class="label">Confirm password</div>
    <com-input type="password"></com-input>
  </div>
  <div class="footer">
    By Clicking on Create Account,I Agree with Circcus
    <nuxt-link to="/">Terms of Use</nuxt-link> and
    <nuxt-link to="/">Privacy Policy</nuxt-link>
  </div>
  <com-button class="btn-submit" disabled fullWidth>CREATE ACCOUNT</com-button>
</div>
</template>
<script>
export default {
  data() {
    return {
      userName: ''
    }
  }
}
</script>
<style lang="scss">

</style>