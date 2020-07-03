import { ADD, MINUS } from '../constants/counter'
// eslint-disable-next-line import/first
import Taro from '@tarojs/taro'

import '../../mock/counter'

export const add = (num) => {
  console.log(num)
  return {
    type: ADD,
    postnum: num ? num : 1
  }
}

export const minus = () => {
  return {
    type: MINUS
  }
}

// 异步的action
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
    // Taro.request({
    //   url: '/getCounterList',
    //   method: 'post',
    //   success: (res) => {
    //     console.log(res)
    //     dispatch(add(res.length))
    //   }
    // })
  }
}

export const COUNTERLIST = 'COUNTERLIST'
export function requestPost (sub) {
  return {
    type: COUNTERLIST,
    sub
  }
}

function fetchList (sub) {
  return dispatch => {
    dispatch(requestPost(sub))
    return fetch('/').then(response => response.json())
      .then(json => dispatch(receivePosts(sub, json)))
  }
}

export const RECEIVEPOSTS = 'RECEIVEPOSTS'
export function receivePosts (sub, json) {
  return {
    type: RECEIVEPOSTS,
    sub,
    posts: json.data,
    receivedAt: Date.now()
  }
}
