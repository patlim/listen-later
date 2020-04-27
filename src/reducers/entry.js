import * as actions from '../actions/index'

const initialState = []

const entryReducer = (state = initialState, action) => {
  switch (action.type){
    case actions.REC_ENTRIES:
      return state.filter(entry => entry.categories.includes(action.category))
    case actions.ADD_ENTRY:
      return [...state, action.entry]
    case action.ADD_TAG:
      const currentEntry = state.find(entry => entry.id === action.entryId)
      
      return state.map(entry => entry.id === action.entryId ? entry.category.push(action.category) : entry)
    default:
      return state
  }
}

export default entryReducer
