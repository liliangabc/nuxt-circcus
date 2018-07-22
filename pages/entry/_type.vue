<template>
<div class="page-entry">
  <com-entry-header></com-entry-header>
  <com-entry-tabs></com-entry-tabs>
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
    curView() {
      let { type } = this.$route.params
      return ({
        login: ComEntryLogin,
        register: ComEntryRegister,
        findpwd: ComEntryFindpwd
      })[type]
    }
  }
}
</script>
<style lang="scss">
.com-entry-subwrapper {
  padding: 40px 30px;
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