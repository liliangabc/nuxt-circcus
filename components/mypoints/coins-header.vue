<template>
<div class="com-mypoints-coins-header">
  <h2 class="coins">{{coins}}</h2>
  <h3 class="title">Total Circcus Points</h3>
</div>
</template>
<script>
export default {
  props: {
    coins: {
      type: [Number, String],
      default: 0
    }
  }
}
</script>
<style lang="scss">
.com-mypoints-coins-header {
  padding: 20px 12px;
  text-align: center;
  color: #fff;
  background: $primaryGradientColor;
  .coins {
    font-size: 48px;
  }
  .title {
    font-size: 12px;
    opacity: .5;
  }
}
</style>