import * as actions from '../actions/index'

const initialState = '#latest'

const categoryReducer = (state = initialState, action) => {
  switch (actions.type) {
    case actions.REC_CATEGORY:
      return action.category
    default:
      return state
  }
}

export default categoryReducer