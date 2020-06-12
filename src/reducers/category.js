import * as actions from "../actions/category"

const initialState = {
  selectedCategory: 'All',
  taglist: [
  { id: 0, tag: "All" },
  { id: 1, tag: "Electronic" },
  { id: 2, tag: "Downtempo" },
  { id: 3, tag: "Rock" },
  { id: 4, tag: "House" },
  { id: 5, tag: "Disco" },
  { id: 6, tag: "Hiphop" },
  { id: 7, tag: "Jazz" },
  { id: 8, tag: "Alternative" },
  { id: 9, tag: "Indie" },
  { id: 10, tag: "Soul" }
]}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REC_CATEGORIES:
      return {...state}
    case actions.ADD_CATEGORY:
      if (state.taglist.filter(item => item.tag === action.category).length === 0) {
        return {...state, taglist: [...state.taglist, { id: state.length(), category: action.category }]}
      }
      else return {...state}
    case actions.SELECT_CATEGORY:
      return {...state, selectedCategory: action.selectedCategory}
    default:
      return state
  }
}

export default categoryReducer
