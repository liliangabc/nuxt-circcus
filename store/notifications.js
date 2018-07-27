/**
 * 通知状态管理模块
 */

const actions = {
  ['notications/fetchList']({ dispatch }, { page = 1, rows = 10 }) {
    return dispatch('post', {
      api: 'student_notification_list',
      data: { page, rows }
    })
  }
}

export default { actions }