/**
 * 全局公共组件注册模块
 */

import Vue from 'vue'

import ComIconButton from '~/components/base/icon-button'
import ComNavbar from '~/components/base/navbar'
import ComTabbarItem from '~/components/base/tabbar/item'
import ComTabbar from '~/components/base/tabbar'
import ComDrawer from '~/components/base/drawer'
import ComOverlay from '~/components/base/overlay'
import ComInput from '~/components/base/input'
import ComButton from '~/components/base/button'
import ComSpinner from '~/components/base/spinner'
import ComLoading from '~/components/base/loading'

const coms = {
  ComIconButton, // 图标按钮
  ComNavbar, // 导航条
  ComTabbarItem, // 选项卡item
  ComTabbar, // 选项卡
  ComDrawer, // 抽屉
  ComOverlay, // 遮罩层
  ComInput, // 文本框
  ComButton, // 按钮
  ComSpinner, // 加载中
  ComLoading // 全屏加载中
}

for (let name in coms) Vue.component(name, coms[name])