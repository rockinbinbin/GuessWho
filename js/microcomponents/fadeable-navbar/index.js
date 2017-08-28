import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import BackArrowCharcoal from '../../assets/back-arrow-charcoal.png'
import BackArrowWhite from '../../assets/back-arrow-white.png'

import style from './style.js'
import navigatorStore from '../../utils/navigator-store'
import { colors } from '../../themes'
import { contactCustomerSupport } from '../../utils'

export const INTERPOLATION_RANGE = {
  inputRange: [0, 300],
  outputRange: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']
}
const WHITE_OPAQUE = 'rgba(255, 255, 255, 1.0)'

class FadeableNavbar extends React.Component {
  constructor (props) {
    super(props)
  }

  handleLeftButtonPressed = () => {
    if (this.props.backHandler) {
      // Allow a component to override default back button behavior
      this.props.backHandler()
    } else if ((this.props.leftButtonBehavior === 'BACK') || (this.props.leftButtonBehavior === 'DEFAULT')) {
      navigatorStore.pop()
    } else {
      // Can only use toggleDrawer for Android
      // https://github.com/wix/react-native-navigation/issues/297#issuecomment-252535110
      navigatorStore.toggleDrawer()
    }
  }

  render () {
    const useBlackIcons = this.props.style.backgroundColor >= WHITE_OPAQUE
    const backIcon = useBlackIcons ? BackArrowCharcoal : BackArrowWhite
    let leftButton = null
    if (this.props.leftButtonBehavior === 'BACK') {
      leftButton = backIcon
    }

    const titleColor = useBlackIcons ? colors.black : colors.white
    let containerStyle = [style.container, this.props.style]
    if (useBlackIcons) {
      containerStyle.push(style.borderWhite)
    }
    const showLeftButton = (this.props.leftButtonBehavior !== 'NONE')

    return (
      <View style={containerStyle}>
        {showLeftButton
          ? <TouchableOpacity style={style.hamburgerContainer} onPress={this.handleLeftButtonPressed}><Image
            source={leftButton} /> </TouchableOpacity>
            : <View style={style.hamburgerContainer} />
          }
        <Text style={[style.title, {color: titleColor}]}>{this.props.title}</Text>
      </View>
    )
  }
}

FadeableNavbar.propTypes = {
  title: React.PropTypes.string,
  backHandler: React.PropTypes.func,
  leftButtonBehavior: React.PropTypes.oneOf(['BACK', 'NONE', 'DEFAULT'])
}

FadeableNavbar.defaultProps = {
  title: '',
  backHandler: null,
  leftButtonBehavior: 'DEFAULT'
}

export default FadeableNavbar
