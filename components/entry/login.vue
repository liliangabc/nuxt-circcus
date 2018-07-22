<template>
<div class="com-entry-subwrapper com-entry-login">
  <div class="form-item">
    <div class="label">User name / Email address</div>
    <com-input v-model="userName"></com-input>
  </div>
  <div class="form-item">
    <div class="label">Password</div>
    <com-input type="password"></com-input>
  </div>
  <div class="align-right">
    <nuxt-link to="/entry/findpwd">Forget Password?</nuxt-link>
  </div>
  <com-button class="btn-submit" disabled fullWidth>GO!</com-button>
  <div class="align-right">
    <nuxt-link to="/">Skip</nuxt-link>
  </div>
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