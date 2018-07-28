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
  },
  // 获取认证过的课程列表
  ['settings/getVerifiedCourseList']({ dispatch }, { page = 1, rows = 10 }) {
    return dispatch('post', {
      api: 'student_verified_course',
      data: { page, rows }
    }).then(data => {
      return {
        dataList: data.data.result,
        hasNext: data.data.hasNext === '1'
      }
    })
  },
  // 获取未认证过的课程列表
  ['settings/getUnVerifiedCourseList']({ dispatch }, { page = 1, rows = 10 }) {
    return dispatch('post', {
      api: 'student_unverified_course',
      data: { page, rows }
    }).then(data => {
      return {
        dataList: data.data.result,
        hasNext: data.data.hasNext === '1'
      }
    })
  }
}

export default { actions }