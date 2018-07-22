/**
 * 用户状态管理模块
 */

const state = () => ({
  
})

const mutations = {

}

const actions = {
  register({ dispatch }, params) {
    return dispatch('post', {
      api: 'student_register',
      data: params
    })
  },
  login({ dispatch, commit }, params) {
    return dispatch('post', {
      api: 'login',
      data: params
    }).then(data => {
      commit('saveUserData', {
        userInfo:data.data,
        token: data.token
      })
      return data
    })
  },
  logout({ dispatch, commit }) {
    return dispatch('post', {
      api: 'logout'
    }).then(data => {
      commit('clearUserData')
    })
  },
  findpwd({ dispatch }, params) {
    return dispatch('post', {
      api: 'student_forget_password',
      data: params
    })
  }
}

export default { state, mutations, actions }