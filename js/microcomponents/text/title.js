import React from 'react'
import {
  Text
} from 'react-native'

import style from './style'

export const Title = (props) =>
  <Text
    {...props}
    style={[style.title, props.style]}
  />

export const Subheader = (props) =>
  <Text
    {...props}
    style={[style.subHeader, props.style]}
  />

export const CenteredParagraph = (props) =>
  <Text
    {...props}
    style={style.centeredParagraph}
  />

export const Emoji = (props) =>
  <Text
    {...props}
    style={style.emojiText}
  />
