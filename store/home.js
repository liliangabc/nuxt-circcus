/**
 * 首页状态管理模块
 */

import { posts } from '../plugins'

const getHomeDataAPI = route => {
  let apiName, { type } = route.params
  let { isEvent, isMarket, isClass, isMeetup, isMoment } = posts
  if (isEvent(type)) {
    apiName = 'index_events_list'
  } else if (isMarket(type)) {
    apiName = 'index_markets_list'
  } else if (isClass(type)) {
    apiName = 'index_classes_list'
  } else if (isMeetup(type)) {
    apiName = 'index_meetingup_list'
  } else if (isMoment(type)) {
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
    let postData = { page, rows }, { query } = route
    for (let key in query) postData[key] = query[key]
    return dispatch('post', {
      api: getHomeDataAPI(route),
      data: postData
    })
  }
}

export default { state, mutations, actions }