/**
 * 用户积分状态管理模块
 */

const actions = {
  ['mypoints/fetchUserCoins']({ dispatch }) {
    return dispatch('post', {
      api: 'student_balance_publish'
    })
  },
  ['mypoints/fetchLogList']({ dispatch }, { page = 1, rows = 10 }) {
    return dispatch('post', {
      api: 'student_profile_points',
      data: { page, rows }
    }).then(data => {
      return {
        dataList: data.data.page.result,
        hasNext: data.data.page.hasNext === '1',
        coins: data.data.totalCoins
      }
    })
  }
}

export default { actions }