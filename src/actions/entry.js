export const ADD_ENTRY = "ADD_ENTRY"
export const REQ_ENTRIES = "REQ_ENTRIES"
export const REC_ENTRIES = "REC_ENTRIES"
export const ADD_ENTRY_CATEGORY = "ADD_ENTRY_CATEGORY"

export const requestEntries = () => {
  return {
    type: REQ_ENTRIES
  }
}

export const receiveEntries = (category) => {
  return {
    type: REC_ENTRIES,
    category
  }
}

export const addCategoryToEntry = (category, entryId) => {
  return {
    type: ADD_ENTRY_CATEGORY,
    entryId,
    category: '#' + category
  }
}

export function getEntries(category) {
  return dispatch => {
    dispatch(requestEntries())
    dispatch(receiveEntries(category))
  }
}
