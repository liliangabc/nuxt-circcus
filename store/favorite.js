/**
 * 收藏状态管理模块
 * 功能包括: 收藏列表拉取和取消收藏
 */

const actions = {
  ['favorite/fetchList']({ dispatch }, { route, page = 1, rows = 10 }) {
    let { type } = route.params
    return dispatch('post', {
      api: 'student_post_favorites',
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