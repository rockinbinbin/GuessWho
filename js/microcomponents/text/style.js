import { StyleSheet } from 'react-native'

import { colors, fonts } from '../../themes'

export default StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: fonts.type.base,
    fontWeight: '900',
    lineHeight: 27,
    alignSelf: 'center',
    marginTop: 111,
    marginBottom: 6,
    textAlign: 'center',
    color: colors.white
  },

  subHeader: {
    fontSize: 17,
    fontFamily: fonts.type.base,
    lineHeight: 20,
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.white
  },

  centeredParagraph: {
    fontSize: 17,
    marginTop: 6,
    marginBottom: 28,
    textAlign: 'center',
    fontFamily: fonts.type.base,
    lineHeight: 20,
    color: colors.white
  },

  keyValueContainer: {
    flexDirection: 'column',
    marginTop: 18
  },
  keyValueKey: {
    fontSize: 11,
    color: colors.smoke
  },
  keyValueValue: {
    fontSize: 16
  },
  emojiText: {
    fontSize: 122,
    marginTop: 33,
    marginBottom: 32,
    alignSelf: 'center'
  }
})
