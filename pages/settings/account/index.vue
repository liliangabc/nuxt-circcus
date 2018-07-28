<template>
<com-level-sub-nav-layout title="my account" class="page-settings-account">
  <ul class="form-container">
    <li class="form-control">
      <div class="label">nick name</div>
      <com-input v-model="dataForm.nickName"></com-input>
    </li>
    <li class="form-control">
      <div class="label">first name</div>
      <com-input v-model="dataForm.firstName"></com-input>
    </li>
    <li class="form-control">
      <div class="label">last name</div>
      <com-input v-model="dataForm.name"></com-input>
    </li>
    <li class="form-control">
      <div class="label">school email</div>
      <com-input v-model="dataForm.userRegisterEmail"></com-input>
    </li>
    <li class="form-control">
      <div class="label">second email</div>
      <com-input v-model="dataForm.email"></com-input>
    </li>
  </ul>
  <ul class="link-list">
    <li class="item">
      <nuxt-link class="link" to="/settings/account/updatepwd">
        <span class="label">Password Reset</span>
        <i class="icon"></i>
      </nuxt-link>
    </li>
    <li class="item">
      <nuxt-link class="link" to="/settings/account/blacklist/m">
        <span class="label">Message Block List</span>
        <i class="icon"></i>
      </nuxt-link>
    </li>
    <li class="item">
      <nuxt-link class="link" to="/settings/account/blacklist/p">
        <span class="label">Profile Block List</span>
        <i class="icon"></i>
      </nuxt-link>
    </li>
  </ul>
  <div class="btn-group">
    <com-button size="mini" fullWidth>save</com-button>
  </div>
</com-level-sub-nav-layout>
</template>
<script>
export default {
  data() {
    return {
      dataForm: {}
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.userData.userInfo
    }
  },
  methods: {
    initDataForm() {
      let keys = [
        'nickName',
        'firstName',
        'name',
        'userRegisterEmail',
        'email'
      ]
      keys.forEach(key => {
        this.$set(this.dataForm, key, this.userInfo[key])
      })
    }
  },
  mounted() {
    this.initDataForm()
  }
}
</script>
<style lang="scss">
.page-settings-account {
  .form-container {
    padding: 0 12px;
    .form-control {
      padding-top: 24px;
      .label {
        text-transform: capitalize;
        color: $econdaryPrimaryColor;
      }
      .com-input input {
        text-align: left;
      }
    }
  }
  .link-list {
    .item {
      .link {
        display: flex;
        align-items: center;
        height: 53px;
        padding: 0 12px;
        border-bottom: 1px solid $borderLevel3Color;
        &:active {
          background-color: $borderLevel3Color;
        }
        .label {
          font-size: 14px;
          flex: 1;
          color: $normalTextColor;
        }
        .icon {
          width: 24px;
          height: 24px;
          background: url(~/assets/img/settings/ARROW---LEFT-copy-18.png) no-repeat center center/auto 12px;
        }
      }
    }
  }
  .btn-group {
    padding: 32px 22px;
  }
}
</style>