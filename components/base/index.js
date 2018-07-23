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
  ComToast: _import('toast')
}

export default {
  install(Vue, options) {
    // 全局组件注册
    for (let name in coms) Vue.component(name, coms[name])
  }
}
