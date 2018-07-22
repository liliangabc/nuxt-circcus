<template>
<div class="com-input">
  <input :type="type" :value="value" :placeholder="hint" @input="onInput">
  <div class="line">
    <span></span>
  </div>
</div>
</template>
<script>
export default {
  props: {
    value: {},
    hint: String,
    type: String
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
<style lang="scss">
.com-input {
  height: 32px;
  position: relative;
  border-bottom: 1px solid $borderLevel1Color;
  input {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 15px;
    color: $normalTextColor;
    &:focus + .line span {
      transform: scaleX(1);
    }
    &::placeholder {
      color: $placeholderTextColor;
    }
  }
  .line {
    height: 2px;
    position: absolute;
    right: 0;
    bottom: -1px;
    left: 0;
    display: flex;
    justify-content: center;
    overflow: hidden;
    span {
      width: 100%;
      height: 100%;
      background-color: $primaryColor;
      transform: scaleX(0);
      transition: transform .3s ease;
    }
  }
}
</style>