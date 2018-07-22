<template>
<div class="com-input">
  <input type="text">
  <div class="line">
    <span></span>
  </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.com-input {
  height: 32px;
  border-bottom: 1px solid $borderLevel1Color;
  input {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 15px;
    color: $normalTextColor;
  }
}
</style>