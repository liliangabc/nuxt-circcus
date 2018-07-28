/**
 * 设置状态管理模块
 */

const actions = {
  // 获取在线客服
  ['settings/fetchKefu']({ dispatch }) {
    return dispatch('post', {
      api: 'can_chat_customer'
    }).then(data => {
      return {
        kefu: data.data.easemobUserName,
        canChat: data.data.canChat === '1'
      }
    })
  },
  // 提交联系我们
  ['settings/contactus']({ dispatch }, data) {
    return dispatch('post', {
      api: 'student_contact_us', data
    })
  },
  // 获取帮助列表
  ['settings/fetchQAList']({ dispatch }) {
    return dispatch('post', {
      api: 'help_to_list'
    }).then(data => {
      return { dataList: data.data.result }
    })
  }
}

export default { actions }