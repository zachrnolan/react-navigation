import React from 'react'
import MyNavScreen from './MyNavScreen'

const MyProfileScreen = React.createClass({

  componentWillMount() {
    console.log('MyProfileScreen componentWillMount: ', this.props.navigation)
  },

  componentWillUnmount() {
    console.log('MyProfileScreen UNMOUNTED: ', this.props.navigation)
  },

  render() {
    return (
      <MyNavScreen
        banner={`${this.props.navigation.state.params.name}s Profile`}
        navigation={this.props.navigation}
      />
    )
  }
})

MyProfileScreen.navigationOptions = {
  title: ({ state }) => `${state.params.name}'s Profile!`,
};

export default MyProfileScreen
