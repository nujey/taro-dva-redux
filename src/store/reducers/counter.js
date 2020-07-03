import { ADD, MINUS } from '../constants/counter'
import { combineReducers } from 'redux'
const INITIAL_STATE = {
  num: 0,
  list: []
}

function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      console.log(action, 111)
      return { ...state, num: action.postnum ? action.postnum : state.num + 1 }
    case MINUS:
      return { ...state, num: state.num - 1 }
    default:
      return state
  }
}

export default counter
