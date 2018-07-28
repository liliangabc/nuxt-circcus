import { IFRAMEURL } from '../server/config'
const _import = name => require(`./${name}.vue`).default

const coms = {
  ComLevelOneNavLayout: _import('common/level-one-nav-layout'),
  ComLevelSubNavLayout: _import('common/level-sub-nav-layout')
}

export default {
  install(Vue, options) {
    for (let name in coms) Vue.component(name, coms[name])
    Vue.prototype.IFRAMEURL = IFRAMEURL
  }
}