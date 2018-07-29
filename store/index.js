/**
 * 状态管理入口模块
 */

import Vue from 'vue'
import Vuex from 'vuex'
import jstz from 'jstimezonedetect'

import { $http } from '~/plugins/axios'

// 引入状态模块
import user from './user'
import home from './home'
import favorite from './favorite'
import activity from './activity'
import notifications from './notifications'
import mypoints from './mypoints'
import myclasses from './myclasses'
import settings from './settings'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    userData: { userInfo: {}, token: '' },
    sidebarVisible: false
  },
  mutations: {
    // 侧边栏打开与关闭
    toggleSidebar: (state, visible = false) => state.sidebarVisible = visible,
    // 保存用户数据
    saveUserData: (state, data) => state.userData = data,
    // 清除用户数据
    clearUserData: state => state.userData = { userInfo: {}, token: '' }
  },
  actions: {
    // 框架服务端初始化 | 用户自动登陆控制 | 该方法在服务端页面渲染之前被调用
    nuxtServerInit({ commit, dispatch }, { req }) {
      let { userData } = req.session
      if (userData) return dispatch('login', userData).catch(err =>
        console.log(err.message)
      )
    },
    post({ state, dispatch }, { api, data = {} }) {
      let { token } = state.userData
      let params = {
        dstTimeZoneId: jstz.determine().name(),
        fromWeb: 1,
        _t: Date.now()
      }
      if (token) params.token = token
      for (let key in data) {
        let value = data[key]
        if (value !== undefined) params[key] = value
      }
      return $http({ api: `/${api}.json`, params }).catch(err => {
        let { code } = JSON.parse(err.message)
        if (code === 1) dispatch('logout')
        throw err
      })
    }
  },
  modules: {
    user,
    home,
    favorite,
    activity,
    notifications,
    mypoints,
    myclasses,
    settings
  }
})

export default store