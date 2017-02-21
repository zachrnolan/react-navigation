import React from 'react'
import MyNavScreen from './MyNavScreen'

const MySettingsScreen = React.createClass({

  componentWillMount() {
    console.log('MySettingsScreen componentWillMount: ', this.props.navigation)
  },

  componentWillUnmount() {
    console.log('MySettingsScreen UNMOUNTED: ', this.props.navigation)
  },

  render() {
    return (
      <MyNavScreen
        banner="Settings"
        navigation={this.props.navigation}
      />
    )
  }
})

export default MySettingsScreen
