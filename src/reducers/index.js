import { combineReducers } from 'redux'

import entries from './entry'
import categories from './category'
import linkDrawer from './linkDrawer'

export default combineReducers({
  entries,
  categories,
  linkDrawer,
})
