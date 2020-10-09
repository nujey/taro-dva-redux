function getData(v) {
  console.log(v, 'version')
  let obj = {
    v,
    data: v === '1.0.2' ? [1, 2, 3] : [4, 5, 6]
  }
  return obj
}
export default {
  namespace: 'index',
  state: {
    data: [],
    v: '1.0.0'
  },
  reducers: {
    'version'(state, action) {
      return {...state, ...action.payload }
    }
  },
  effects: {
    /**
     * 更新版本
     */
    *updateVersion ({ payload, callback }, { put, call, select }) {
      const common = yield select(state => state.common)
      const data = yield call(getData, payload.v)
      yield put({
        type: 'version',
        payload: {
          ...data,
          ...common
        }
      })
    }
  }
}
