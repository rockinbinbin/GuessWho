import { Navigation } from 'react-native-navigation'
import React from 'react'
import Initial from './pages/initial'
import {
  pages
} from './const'

export function registerScreens (store, Provider) {
  Navigation.registerComponent(pages.INITIAL, () => Initial, store, Provider)
}
