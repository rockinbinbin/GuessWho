/**
 * App reducer
 * It should contain app related data and it should not persist
 */

import { REHYDRATE } from 'redux-persist/constants'

// import t from '../actions/app/actionTypes'

const defaultState = {
  hasRehydrationFinished: false
}

const app = (state = defaultState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return Object.assign({}, action.payload.app, {
        hasRehydrationFinished: true
      })

    default:
      return state
  }
}

export default app
