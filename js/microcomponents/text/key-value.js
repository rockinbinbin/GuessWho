import React, {PropTypes} from 'react'
import {
  Text,
  View
} from 'react-native'

import style from './style'

const KeyValue = (props) =>
  <View style={[style.keyValueContainer, props.style]}>
    <Text
      style={style.keyValueKey}>
      {props.title.toUpperCase()}
    </Text>
    <Text
      style={style.keyValueValue}>
      {props.value}
    </Text>
  </View>

KeyValue.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default KeyValue
