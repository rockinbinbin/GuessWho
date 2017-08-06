import { Linking, Platform, Alert } from 'react-native'
//import ImagePicker from 'react-native-image-picker'
// import emailRegex from 'email-regex'
// import zip from 'zippo'

// import { Crashlytics } from 'react-native-fabric'
// import fecha from 'fecha'
// import usDate from 'us-date'
// import { WWW_BASE_URL, COLLECTIVE_AGREEMENT_URL, TERMS_OF_SERVICE_URL, SUPPORT_EMAIL_ADDRESS } from '../const'
//import { clearErrorMessage } from '../actions/error/index'

export function isAndroid () {
  return Platform.OS === 'android'
}

export function getDeviceName () {
  if (isAndroid()) {
    return 'Android'
  } else {
    return 'iPhone'
  }
}

export function getNavScreen (page) {
  console.log('getNavScreen from ' + page)
  return {screen: page, title: page, backButtonTitle: ''}
}


export function showErrorDialog (errorMsg) {
  return (dispatch) => {
    console.log('showErrorDialog ' + errorMsg)
    Alert.alert(
      'ERROR',
      errorMsg,
      [
        {
          text: 'OK',
          onPress: () => {
            //dispatch(clearErrorMessage())
          }
        }
      ],
      'plain-text'
    )
  }
}

export function isEmptyVar (input) {
  return input === null || input === 'undefined' || input === undefined || input === ''
}



export function isDev () {
  return __DEV__
}
