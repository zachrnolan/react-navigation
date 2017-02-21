/**
 * @flow
 */

import React from 'react';
import {
  Button,
  Text,
  ScrollView,
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import MyNavScreen from './MyNavScreen'
import MyProfileScreen from './MyProfileScreen'
import MySettingsScreen from './MySettingsScreen'

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen
    banner="Home Screen"
    navigation={navigation}
  />
);

const MyNotificationsSettingsScreen = ({ navigation }) => (
  <MyNavScreen
    banner="Notification Settings"
    navigation={navigation}
  />
);

const MainTab = StackNavigator({
  Home: {
    screen: MyHomeScreen,
    path: '/',
    navigationOptions: {
      title: () => 'Welcome',
    },
  },
  Profile: {
    screen: MyProfileScreen,
    path: '/people/:name',
    navigationOptions: {
      title: ({ state }) => `${state.params.name}'s Profile!`,
    },
  },
});

const SettingsTab = StackNavigator({
  Settings: {
    screen: MySettingsScreen,
    path: '/',
    navigationOptions: {
      title: () => 'Settings',
    },
  },
  NotifSettings: {
    screen: MyNotificationsSettingsScreen,
    navigationOptions: {
      title: () => 'Notification Settings',
    },
  },
});

const StacksInTabs = TabNavigator({
  MainTab: {
    screen: MainTab,
    path: '/',
    navigationOptions: {
      tabBar: () => ({
        label: 'Home',
      }),
    },
  },
  SettingsTab: {
    screen: SettingsTab,
    path: '/settings',
    navigationOptions: {
      tabBar: () => ({
        label: 'Settings',
      }),
    },
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
});

export default StacksInTabs;
