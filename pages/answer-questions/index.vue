<template>
<com-level-one-nav-layout class="page-answer-questions" title="answer questions">
  <div class="inner-box">
    <com-input hint="Please enter any key word in the class name." v-model.trim="kw"></com-input>
    <com-button size="mini" fullWidth :disabled="disabled" @click="goResult">submit</com-button>
  </div>
</com-level-one-nav-layout>
</template>
<script>
export default {
  data() {
    return { kw: '' }
  },
  computed: {
    disabled() {
      return !this.kw
    }
  },
  methods: {
    goResult() {
      if (this.disabled) return
      this.$router.push('/answer-questions/result')
    }
  }
}
</script>
<style lang="scss">
.page-answer-questions {
  display: flex;
  align-items: center;
  .inner-box {
    flex: 1;
    padding: 0 22px;
    .com-input {
      margin-bottom: 40px;
    }
  }
}
</style>