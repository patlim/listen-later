import { combineReducers } from 'redux'

import entryReducer from './entry'
import categoryReducer from './category'

export default combineReducers({
  entryReducer,
  categoryReducer,
})
