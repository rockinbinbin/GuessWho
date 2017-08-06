import { combineReducers, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import Reactotron from 'reactotron-react-native'
import RehydrationServices from '../services/RehydrationServices'
import app from './app'

const appReducer = combineReducers({
  app
})

// We're taking appReducer, and are basically creating one a one level higher reducer
const eazeReducers = (state, action) => {
  // this could allow us to have specific code for intercepting high level actions and reseting states.
  // otherwise, let's just proceed and pass everything to the reducers
  return appReducer(state, action)
}

let middleware = [ thunk ]

// a function which can create our store and auto-persist the data
export default () => {
  const enhancers = compose(
    applyMiddleware(...middleware),
    autoRehydrate()
  )

  // use Reactotron to createStore, that way we can watch / interact with redux in Reactotron.
  // see ./services/reactotron.jss
  const store = Reactotron.createStore(
    eazeReducers,
    enhancers
  )

  // configure persistStore and check reducer version number
  RehydrationServices.updateReducers(store)

  return store
}
