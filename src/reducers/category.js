import * as actions from "../actions/category"

const initialState = {
  selectedCategory: '#latest',
  taglist: [
  { id: 1, tag: "#latest" },
  { id: 2, tag: "#jazz" },
  { id: 3, tag: "#rnb" },
  { id: 4, tag: "#hiphop" },
  { id: 5, tag: "#soul" },
  { id: 6, tag: "#house" },
]}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REC_CATEGORIES:
      return {...state}
    case actions.ADD_CATEGORY: // this should only be if the category isn't in the list
      return {...state, taglist: [...state.taglist, { id: state.length(), category: action.category }]}
    case actions.SELECT_CATEGORY:
      return {...state, selectedCategory: action.selectedCategory}
    default:
      return state
  }
}

export default categoryReducer
