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
</div>
</template>
<script>
import { isSchoolEmail } from '~/plugins'
export default {
  data() {
    return {
      formData: {}
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
      let errText = this.validate()
      if (errText) return this.$toast({ message: errText, type: 'error' })
      let { email, userName, password } = this.formData
      const comLoading = this.$loading()
      this.$store.dispatch('register', {
        email, userName, password
      }).then(data => {
        comLoading.close()
        this.$toast({ message: data.info, type: 'success' })
        this.$router.replace('/entry')
      }).catch(err => {
        comLoading.close()
        this.$toast({ message: err.message, type: 'error' })
      })
    },
    validate() {
      let errText = '',
        { email, userName, password, confirmPassword } = this.formData
      if (!isSchoolEmail(email)) {
        errText = 'Please enter your school e-mail address.'
      } else if (/\s+/.test(userName)) {
        errText = 'Invalid username.Please don\'t enter space.'
      } else if (password.length < 6) {
        errText = 'Password can not be less than 6 characters.'
      } else if (password !== confirmPassword) {
        errText = 'Passwords do not match.'
      }
      return errText
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