// Reactotron is a react-native developer tool for monitoring redux actions and state
// this file is where we set it up, and add addons.
// https://github.com/infinitered/reactotron

import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

Reactotron
  .configure()
  .use(reactotronRedux())
  .connect()
