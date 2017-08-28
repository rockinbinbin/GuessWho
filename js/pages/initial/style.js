import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: colors.white
  },
  topContainer: {
    flexDirection: 'column',
    backgroundColor: colors.pink,
    paddingLeft: 14,
    paddingRight: 14
  },
  headerText: {
    fontFamily: fonts.type.base,
    fontWeight: '900',
    fontSize: 24,
    lineHeight: 27,
    color: colors.white,
    marginTop: 111
  },
  subheaderText: {
    fontFamily: fonts.type.base,
    fontSize: 17,
    lineHeight: 20,
    color: colors.white,
    marginTop: 6,
    marginBottom: 48
  },
  bottomContainer: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    paddingLeft: 14,
    paddingRight: 14
  },
  questionText: {
    fontSize: 17,
    color: colors.blue
  }
})
