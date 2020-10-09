function getCurrentList (id) {
  console.log(id, 'id')
  return new Promise((resolve, reject) => {
    switch (id) {
      case 1:
        resolve([1, 2, 3])
      case 2:
        resolve(['a', 'b', 'c'])
      case 3:
        resolve(['一', '二', '三'])
      default:
        resolve([1, 2, 3])
    }
  })
}
export default {
  namespace: 'main',
  state: {
    defaultValue: 'main',
    list: []
  },
  effects: {
    *getList ({payload}, { put, call, select }) {
      const current = yield select(state => state.common.isModel ? state.common.isModel : 0)
      let res = []
      if (current) {
        try {
          res = yield call(getCurrentList, payload.type)
        } catch (e) {}
      }
      yield put({
        type: 'updateList',
        payload: res
      })
    }
  },
  reducers: {
    'save'(state, { payload }) {
      return { ...state, ...payload }
    },
    'updateList'(state, { payload }) {
      return { ...state, list: payload}
    }
  }
}