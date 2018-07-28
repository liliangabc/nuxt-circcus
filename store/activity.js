/**
 * 活动日志状态管理模块
 */

const actions = {
  ['activity/fetchList']({ dispatch }, { route, page = 1, rows = 10 }) {
    let { type } = route.params
    return dispatch('post', {
      api: 'student_post_activities',
      data: { page, rows, type }
    }).then(data => {
      return {
        dataList: data.data.result,
        hasNext: data.data.hasNext === '1'
      }
    })
  }
}

export default { actions }