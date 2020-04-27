import request from 'superagent'

export const ADD_ENTRY = "ADD_ENTRY"
export const REQ_ENTRIES = "REQ_ENTRIES"
export const REC_ENTRIES = "REC_ENTRIES"

export const ADD_CATEGORY = "ADD_CATEGORY"
export const REQ_CATEGORIES = "REQ_CATEGORIES"
export const REC_CATEGORIES = "REC_CATEGORIES"

export const ADD_TAG = "ADD_TAG"

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

export const receiveCategories = () => {
  return {
    type: REC_CATEGORIES
  }
}

export const addCategory = (Category) => {
  return {
    type: ADD_ENTRY,
    category: Category
  }
}

export const addTagToEntry = (newCategory, entryId) => {
  return {
    type: ADD_TAG,
    entryId,
    category: newCategory
  }
}

export function addTagToEntryHandler(newCategory, entryId) {
  return (dispatch) => {
    dispatch(addCategory())
    dispatch(addTagToEntry(newCategory, entryId))
  }
}

export const getTagsToState = () => {
  return {

  }
}

export const getEntriesToState = (tagId) => {
  return {
    
  }
}