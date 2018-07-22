<template>
<div class="com-entry-subwrapper com-entry-register">
  <div class="form-item">
    <div class="label">Email address</div>
    <com-input v-model.trim="formData.email"></com-input>
  </div>
  <div class="form-item">
    <div class="label">User name</div>
    <com-input v-model.trim="formData.userName"></com-input>
  </div>
  <div class="form-item">
    <div class="label">Password</div>
    <com-input type="password" v-model.trim="formData.password"></com-input>
  </div>
  <div class="form-item">
    <div class="label">Confirm password</div>
    <com-input type="password" v-model.trim="formData.confirmPassword"></com-input>
  </div>
  <div class="footer">
    By Clicking on Create Account,I Agree with Circcus
    <nuxt-link to="/">Terms of Use</nuxt-link> and
    <nuxt-link to="/">Privacy Policy</nuxt-link>
  </div>
  <com-button class="btn-submit" :disabled="disabled" fullWidth @click="onSubmit">CREATE ACCOUNT</com-button>
  <com-loading fullscreen v-if="loading"></com-loading>
</div>
</template>
<script>
export default {
  data() {
    return {
      formData: {},
      loading: false
    }
  },
  computed: {
    disabled() {
      let { email, userName, password, confirmPassword } = this.formData
      return !(email && userName && password && confirmPassword)
    }
  },
  methods: {
    onSubmit() {
      if (this.disabled) return
      let { email, userName, password } = this.formData
      this.loading = true
      this.$store.dispatch('register', {
        email, userName, password
      }).then(() => {
        this.loading = false
        this.$router.replace('/entry')
      }).catch(err => {
        this.loading = false
        alert(err.message)
      })
    },
    validate() {
      
    }
  }
}
</script>
<style lang="scss">
.com-entry-subwrapper.com-entry-register {
  .footer {
    font-size: 14px;
    line-height: 1.6;
    color: $secondaryTextColor;
    a {
      text-decoration: underline;
      color: $econdaryPrimaryColor;
    }
  }
}
</style>