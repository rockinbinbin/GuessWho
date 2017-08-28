import React from 'react'
import { ScrollView, Animated, View } from 'react-native'
import FadeableNavbar, { INTERPOLATION_RANGE } from '../fadeable-navbar/'

/**
 * This class is intended to be subclassed, but not instantiated.
 * It provides a means of encapsulation so that a fade-on-scroll navbar can be easily added,
 * without having to duplicate code or embed multiple components.
 * The child class will only need to override getBody() to return the JSX that lives inside of the parent ScrollView.
 * getFooter() can optionally be overridden as well.
 * The child class should not implement render.
 */
class FadeableNavScrollview extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

  render () {
    let FadingNavbar = Animated.createAnimatedComponent(FadeableNavbar)
    const navColor = this.state.scrollY.interpolate(INTERPOLATION_RANGE)
    return (
      <View style={{flex: 1}}>
        <ScrollView style={this.props.containerStyle}
          contentContainerStyle={this.props.contentContainerStyle}
          alwaysBounceVertical={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )} scrollEventThrottle={16}>
          {this.props.children}
        </ScrollView>
        <FadingNavbar
          title={this.props.pageTitle}
          style={{backgroundColor: navColor}}
          backHandler={this.props.backHandler}
          leftButtonBehavior={this.props.leftButtonBehavior}
        />
        {this.props.getFooter ? this.props.getFooter() : null}
      </View>
    )
  }
}

FadeableNavScrollview.propTypes = {
  containerStyle: View.propTypes.style,
  contentContainerStyle: View.propTypes.style,
  pageTitle: React.PropTypes.string,
  getFooter: React.PropTypes.func,
  leftButtonBehavior: React.PropTypes.oneOf(['BACK', 'MENU', 'NONE', 'DEFAULT']),
  children: React.PropTypes.node,
  backHandler: React.PropTypes.func
}

FadeableNavScrollview.defaultProps = {
  leftButtonBehavior: 'DEFAULT'
}

export default FadeableNavScrollview
