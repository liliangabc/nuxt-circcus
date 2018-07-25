/**
 * 全局组件导出
 */

const _import = name => require(`./${name}.vue`).default

// 所有组件
const coms = {
  ComIconButton: _import('icon-button'),
  ComNavbar: _import('navbar'),
  ComTabbarItem: _import('tabbar/item'),
  ComTabbar: _import('tabbar/index'),
  ComDrawer: _import('drawer'),
  ComOverlay: _import('overlay'),
  ComInput: _import('input'),
  ComButton: _import('button'),
  ComSpinner: _import('spinner'),
  ComLoading: _import('loading'),
  ComToast: _import('toast'),
  ComDialog: _import('dialog'),
  ComAvator: _import('avator'),
  ComFloatButton: _import('float-button')
}

export default {
  install(Vue, options) {
    // 全局组件注册
    for (let name in coms) Vue.component(name, coms[name])
    // 消息提示方法
    Vue.prototype.$toast = function(props = {}) {
      return new Vue({
        render(h) {
          return h(coms.ComToast, {
            props, on: {
              close: () => {
                this.$destroy()
              }
            }
          })
        },
        beforeDestroy() {
          this.$children[0].$el.remove()
        }
      }).$mount()
    }
    // 加载中方法
    Vue.prototype.$loading = function(props = {}) {
      return new Vue({
        render(h) {
          return h(coms.ComLoading, {
            props, on: {
              close: () => {
                this.$destroy()
              }
            }
          })
        },
        methods: {
          close() {
            this.$children[0].close()
          }
        },
        beforeDestroy() {
          this.$children[0].$el.remove()
        }
      }).$mount()
    }
  }
}
