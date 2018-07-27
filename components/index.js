const _import = name => require(`./${name}.vue`).default

const coms = {
  ComMainNavbar: _import('common/main-navbar'),
  ComLevelOneNavLayout: _import('common/level-one-nav-layout')
}

export default {
  install(Vue, options) {
    for (let name in coms) Vue.component(name, coms[name])
  }
}