import * as actions from "../actions/category"

const initialState = [
  { id: 1, tag: "#house" },
  { id: 2, tag: "#jazz" },
  { id: 3, tag: "#rnb" },
  { id: 4, tag: "#hiphop" },
  { id: 5, tag: "#soul" },
]

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REC_CATEGORIES:
      return [...state]
    case actions.ADD_CATEGORY: // this should only be if the category isn't in the list
      return [...state, { id: state.length(), category: action.category }]
    default:
      return state
  }
}

export default categoryReducer
