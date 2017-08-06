import React, { PureComponent } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { Navigation } from 'react-native-navigation'

const styles = StyleSheet.create({
  login: {
    margin: 20,
    marginBottom: 60,
    justifyContent: 'flex-end',
    flex: 1
  }
})

export class Initial extends PureComponent {

  render () {
    return (
      // <View style={styles.login}>
      //   <Button
      //     onPress={this.visitProfile}
      //     title='Profile'
      //     style={{fontSize: 18, marginTop: 10}}
      //   />
      // </View>
    )
  }
}

export default Initial
