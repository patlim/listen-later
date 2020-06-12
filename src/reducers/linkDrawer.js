import * as actions from "../actions/linkDrawer"

const linkDrawerReducer = (state = false, action) => {
  switch (action.type) {
    case actions.TRIGGER_DRAWER:
      return action.trigger
    default:
      return state
  }
}

export default linkDrawerReducer
