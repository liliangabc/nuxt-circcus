<template>
<com-level-sub-nav-layout title="contact us">
  <div class="page-settings-contactus">
    <div class="form-container">
      <div class="form-control">
        <p class="label">message</p>
        <textarea rows="8"
          placeholder="Your comments and suggestions are what helps us provide a better service to you."
          v-model.trim="question">
        </textarea>
      </div>
      <div class="btn-wrapper">
        <com-button size="mini" fullWidth :disabled="disabled" @click="onSubmit">send</com-button>
      </div>
    </div>
    <div class="chat-contact-box">
      <span class="or">Or</span><br>
      <img class="icon" src="~/assets/img/settings/Bubbles-copy.png">
      <div class="btn-wrapper">
        <com-button size="mini" fullWidth :disabled="!canChat" @click="goChat">chat with us</com-button>
      </div>
    </div>
  </div>
</com-level-sub-nav-layout>
</template>
<script>
export default {
  data() {
    return {
      kefu: '',
      canChat: false,
      question: ''
    }
  },
  computed: {
    disabled() {
      return !this.question
    }
  },
  methods: {
    getKefu() {
      return this.$store.dispatch('settings/fetchKefu').then(({ kefu, canChat }) => {
        this.kefu = kefu
        this.canChat = canChat
      }).catch(err => this.$toastErr(err))
    },
    onSubmit() {
      if (this.disabled) return
      const comLoading = this.$loading()
      return this.$store.dispatch('settings/contactus', {
        question: this.question
      }).then(data => {
        this.question = ''
        comLoading.close()
        this.$toast({ message: data.info, type: 'success' })
      }).catch(err => {
        comLoading.close()
        this.$toastErr(err)
      })
    },
    goChat() {
      this.$router.push(`/messages/chat/${this.kefu}`)
    }
  },
  mounted() {
    this.getKefu()
  }
}
</script>
<style lang="scss">
.page-settings-contactus {
  padding: 24px 12px;
  .form-container {
    .form-control {
      .label {
        font-size: 13px;
        margin-bottom: 8px;
        color: $econdaryPrimaryColor;
      }
      textarea {
        width: 100%;
        padding: 8px 12px;
        font-size: 14px;
        color: $normalTextColor;
        border: 1px solid $borderLevel1Color;
        &::placeholder {
          color: $placeholderTextColor;
        }
      }
    }
  }
  .chat-contact-box {
    text-align: center;
    border-top: 1px solid $borderLevel3Color;
    .or {
      height: 1.6em;
      position: relative;
      top: -0.8em;
      display: inline-block;
      padding: 0 3px;
      background-color: #fff;
      margin-bottom: 12px;
      color: $normalTextColor;
    }
    .icon {
      width: 100px;
      height: 100px;
    }
  }
  .btn-wrapper {
    padding: 32px 12px;
  }
}
</style>