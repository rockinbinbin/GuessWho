import React, { PureComponent } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native'
import { Title, Subheader } from '../../microcomponents/text/title'
import { Navigation } from 'react-native-navigation'
import FadeableNavScrollview from '../../microcomponents/fadeable-nav-scrollview'
import style from './style.js'
import { intro1 } from '../../assets/intro1.png'
import { intro2 } from '../../assets/intro2.png'
import { intro3 } from '../../assets/intro3.png'

export class Initial extends PureComponent {

  render () {
    return (
      <View style={style.container}>
        <View style={style.topContainer}>
          <Title style={style.headerText}>Guess Who</Title>
          <Subheader style={style.subheaderText}>Judge your friends fiercely 😉</Subheader>
        </View>
        <View style={style.bottomContainer}>
          <Title style={style.questionText}>Could this person be a super villain?</Title>
        </View>
      </View>
    )
  }
}

export default Initial
