/**
 * 首页状态管理模块
 */

import { posts } from '../plugins'

const getHomeDataAPI = route => {
  let apiName, { type } = route.params
  if (posts.isEvent(type)) {
    apiName = 'index_events_list'
  } else if (posts.isMarket(type)) {
    apiName = 'index_markets_list'
  } else if (posts.isClass(type)) {
    apiName = 'index_classes_list'
  } else if (posts.isMeetup(type)) {
    apiName = 'index_meetingup_list'
  } else if (posts.isMoment(type)) {
    apiName = 'index_homepage_list'
  }
  return apiName
}

const state = () => ({

})

const mutations = {

}

const actions = {
  ['home/fetchList']({ dispatch }, { route, page = 1, rows = 10 }) {
    let postData = Object.assign(route.query, { page, rows })
    return dispatch('post', {
      api: getHomeDataAPI(route),
      data: postData
    })
  }
}

export default { state, mutations, actions }