const _import = name => require(`./${name}.vue`).default

const coms = {
  ComLevelOneNavLayout: _import('common/level-one-nav-layout'),
  ComLevelSubNavLayout: _import('common/level-sub-nav-layout')
}

export default {
  install(Vue, options) {
    for (let name in coms) Vue.component(name, coms[name])
    // 错误消息提示方法
    Vue.prototype.$toastErr = function (err) {
      let { msg } = JSON.parse(err.message)
      this.$toast({ message: msg, type: 'error' })
    }
    // 异步数据错误消息提示混合
    Vue.mixin({
      mounted() {
        let { errmsg } = this
        if (errmsg) this.$toast({
          message: JSON.parse(errmsg).msg,
          type: 'error'
        })
      }
    })
  }
}