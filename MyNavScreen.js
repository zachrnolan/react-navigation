import React from 'react'
import { ScrollView, Button, Text } from 'react-native'

export default MyNavScreen = React.createClass({

  render() {
    return (
      <ScrollView>
        <Text>{this.props.banner}</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Profile', { name: 'Jordan' })}
          title="Go to a profile screen"
        />
        <Button
          onPress={() => this.props.navigation.navigate('NotifSettings')}
          title="Go to notification settings"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Settings')}
          title="Go to settings"
        />
        <Button
          onPress={() => this.props.navigation.goBack(null)}
          title="Go back"
        />
      </ScrollView>
    )
  }
})
