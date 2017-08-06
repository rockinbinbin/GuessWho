import { Component } from 'react'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { AppState, Linking } from 'react-native'

import './services/reactotron'
import getStore from './reducers'

import { navigatorStyle, pages } from './const'
import { registerScreens } from './screens'

const store = getStore()
registerScreens(store, Provider)

class Root extends Component {
  constructor (props) {
    super(props)
    this.startApp(pages.INITIAL)
    AppState.addEventListener('change', this.handleAppStateChange)
    // Deep linking for newly launched or already running
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.processOpenUrl(url)
      }
    })
    Linking.addEventListener('url', this.handleOpenURL)
  }

  updateFromStore = () => {
    console.log('updateFromStore')
  }

  handleOpenURL = (event) => {
    this.processOpenUrl(event.url)
  }

  processOpenUrl = (url) => {
    console.log('processOpenUrl')
  }

  handleAppStateChange = (appState) => {
    if (appState === 'active') {
    }
  }

  startApp = (page) => {
    Navigation.startSingleScreenApp({
      screen: {
        screen: page,
        navigatorStyle: navigatorStyle
      }
    })
  }
}

export default Root
