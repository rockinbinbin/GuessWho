import React, { PureComponent } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native'
import { Title, Subheader } from '../../microcomponents/text/title'
import { Navigation } from 'react-native-navigation'
import FadeableNavScrollview from '../../microcomponents/fadeable-nav-scrollview'
import style from './style.js'
import intro1 from '../../assets/intro1.png'
import intro2 from '../../assets/intro2.png'
import intro3 from '../../assets/intro3.png'

const FBSDK = require('react-native-fbsdk')
const {
  LoginButton,
  LoginManager
} = FBSDK

var Login = React.createClass({
  render: function () {
    return (
      <View>
        <LoginButton
          publishPermissions={['publish_actions']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert('Login failed with error: ' + result.error)
              } else if (result.isCancelled) {
                alert('Login was cancelled')
              } else {
                alert('Login was successful with permissions: ' + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert('User logged out')}/>
      </View>
    )
  }
})

// LoginManager.logInWithReadPermissions(['public_profile']).then(
//   function(result) {
//     if (result.isCancelled) {
//       alert('Login was cancelled');
//     } else {
//       alert('Login was successful with permissions: '
//         + result.grantedPermissions.toString());
//     }
//   },
//   function(error) {
//     alert('Login failed with error: ' + error);
//   }
// );

export class Initial extends PureComponent {

  render () {
    return (
      <View style={style.container}>
        <View style={style.topContainer}>
          <Title style={style.headerText}>Guess Who</Title>
          <Subheader style={style.subheaderText}>Judge your friends fiercely 😉</Subheader>
        </View>
        <View style={style.bottomContainer}>
          <Login />
          <Image source={intro1} style={style.image} />
          <Title style={style.questionText}>Could this person be a super villain?</Title>
        </View>
      </View>
    )
  }
}

export default Initial
