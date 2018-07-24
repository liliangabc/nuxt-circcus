/**
 * 状态管理入口模块
 */

import Vue from 'vue'
import Vuex from 'vuex'
import jstz from 'jstimezonedetect'

import { $http } from '~/plugins/axios'

import user from './user'

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
      if (!userData) return
      return dispatch('login', userData).then(data => {
        commit('saveUserData', {
          userInfo: data.data, token: data.token
        })
      }).catch(err => console.log(err))
    },
    post({ state }, { api, data = {} }) {
      let { token } = state.userData
      let params = {
        dstTimeZoneId: jstz.determine().name(),
        fromWeb: 1
      }
      if (token) params.token = token
      params = Object.assign(params, data)
      return $http({ api: `/${api}.json`, params })
    }
  },
  modules: { user }
})

export default store