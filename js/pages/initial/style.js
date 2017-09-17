import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: colors.white
  },
  topContainer: {
    flexDirection: 'column',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pink
  },
  headerText: {
    fontFamily: fonts.type.base,
    fontSize: 24,
    lineHeight: 27,
    color: colors.white,
    marginTop: 0
  },
  subheaderText: {
    fontFamily: fonts.type.base,
    fontSize: 17,
    lineHeight: 20,
    color: colors.white,
    marginTop: 10
  },
  bottomContainer: {
    flexDirection: 'column',
    height: '60%',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: colors.pink
  },
  questionText: {
    fontSize: 17,
    lineHeight: 20,
    color: colors.blue,
    marginTop: 20,
    width: 220
  }
})
