<template>
<div class="com-entry-subwrapper com-entry-login">
  <div class="form-item">
    <div class="label">User name / Email address</div>
    <com-input v-model.trim="formData.userName"></com-input>
  </div>
  <div class="form-item">
    <div class="label">Password</div>
    <com-input type="password" v-model.trim="formData.password"></com-input>
  </div>
  <div class="align-right">
    <nuxt-link to="/entry/findpwd">Forget Password?</nuxt-link>
  </div>
  <com-button class="btn-submit" :disabled="disabled" fullWidth @click="onSubmit">GO!</com-button>
  <div class="align-right">
    <nuxt-link to="/">Skip</nuxt-link>
  </div>
  <com-loading fullscreen v-if="loading"></com-loading>
</div>
</template>
<script>
import base64 from '~/plugins/base64'
export default {
  data() {
    return {
      formData: {},
      loading: false
    }
  },
  computed: {
    disabled() {
      let { userName, password } = this.formData
      return !(userName && password)
    }
  },
  methods: {
    onSubmit() {
      if (this.disabled) return
      let { userName, password } = this.formData
      this.loading = true
      this.$store.dispatch('login', {
        userName: base64(`${userName}opSAd^12dsa`),
        password: base64(`${password}opSAd^12dsa`)
      }).then(() => {
        this.loading = false
        this.$router.push('/')
      }).catch(err => {
        this.loading = false
        alert(err.message)
      })
    }
  }
}
</script>