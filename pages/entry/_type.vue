<template>
<div class="page-entry">
  <com-entry-header></com-entry-header>
  <com-entry-tabs v-if="hasTabs"></com-entry-tabs>
  <component :is="curView"></component>
</div>
</template>
<script>
import ComEntryHeader from '~/components/entry/header'
import ComEntryTabs from '~/components/entry/tabs'
import ComEntryLogin from '~/components/entry/login'
import ComEntryRegister from '~/components/entry/register'
import ComEntryFindpwd from '~/components/entry/findpwd'
export default {
  components: { ComEntryHeader, ComEntryTabs },
  computed: {
    type() {
      return this.$route.params.type
    },
    curView() {
      return ({
        login: ComEntryLogin,
        register: ComEntryRegister,
        findpwd: ComEntryFindpwd
      })[this.type]
    },
    hasTabs() {
      return ['login', 'register'].indexOf(this.type) !== -1
    }
  }
}
</script>
<style lang="scss">
.com-entry-subwrapper {
  padding: 40px 30px;
  position: relative;
  .form-item {
    margin-bottom: 12px;
    .label {
      text-align: center;
      font-size: 13px;
      margin-bottom: 3px;
      color: $primaryColor;
    }
  }
  .align-right {
    text-align: right;
    a {
      font-size: 13px;
      color: $primaryColor;
    }
  }
  .btn-submit {
    margin-top: 40px;
    margin-bottom: 30px;
  }
}
</style>