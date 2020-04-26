import * as actions from '../actions/index'

const initialState = true

const waitingReducer = (state = initialState, action) => {
  switch (actions.type){
    case actions.REQ_CATEGORY:
      return false
    case actions.REC_CATEGORY:
      return true
    default:
      return state
  }
}

export default waitingReducer