import Vue from 'vue'
import baseui from '~/components/base'
import commonui from '~/components'
import { setPicSize } from './index'

// 注册全局UI组件
Vue.use(baseui)
Vue.use(commonui)

// 注册全局过滤器
Vue.filter('setPicSize', setPicSize)

Vue.filter('toText', function (html) {
  if (process.browser) {
    let div = document.createElement('div')
    div.innerHTML = html
    return div.innerText || div.textContent
  }
  return html
})