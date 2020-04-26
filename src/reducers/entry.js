import * as actions from '../actions/index'

const initialState = []

const entryReducer = (state = initialState, action) => {
  switch (action.type){
    case actions.REC_ENTRY:
      return state.filter(entry => entry.categories.includes(action.category))
    case actions.ADD_ENTRY:
      return [...state, action.entry]
    default:
      return state
  }
}

export default entryReducer
