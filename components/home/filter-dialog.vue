<template>
<com-dialog title="filter" :visible.sync="visible">
  测试对话框组件
  <com-button slot="actions" plain>cancel</com-button>
  <com-button slot="actions" plain>confirm</com-button>
</com-dialog>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    open() {
      this.visible = true
    }
  }
}
</script>
<style lang="scss">

</style>