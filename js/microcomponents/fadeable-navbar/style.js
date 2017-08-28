import { StyleSheet, Dimensions } from 'react-native'
import { colors, fonts } from '../../themes'

const width = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 23,
    paddingBottom: 23,
    width: width,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 15,
    fontFamily: fonts.type.base
  },
  hamburgerContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center'
  },
  borderWhite: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D7D7D7'
  }
})
