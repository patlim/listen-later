import * as actions from '../actions/index'

const initialState = [{ id: 1, tag: "#house" }]

const categoryReducer = (state = initialState, action) => {
  switch (actions.type) {
    case actions.REC_CATEGORY:
      return state
    case actions.ADD_CATEGORY:
      return [...state, {id: state.length(), category: action.category}]
    default:
      return state
  }
}

export default categoryReducer