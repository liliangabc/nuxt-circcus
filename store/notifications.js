/**
 * 通知状态管理模块
 */

const actions = {
  ['notications/fetchList']({ dispatch }, { page = 1, rows = 10 }) {
    return dispatch('post', {
      api: 'student_notification_list',
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