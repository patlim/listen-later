import request from 'superagent'

export const ADD_ENTRY = "ADD_ENTRY"
export const REQ_ENTRIES = "REQ_ENTRIES"
export const REC_ENTRIES = "REC_ENTRIES"

export const REQ_CATEGORY = "REQ_CATEGORY"
export const REC_CATEGORY = "REC_CATEGORY"

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