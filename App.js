import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Memory from './src/screens/new_memory'
import Memories from './src/screens/memories'


const getTabBarIcon = (navigation, focused, tintColor) => {
  // You can return any component that you like here!
  const { routeName } = navigation.state;
  var iconName;

  if (routeName === 'Home') {
    iconName = 'image'
  } else if (routeName === 'New Memory') {
    iconName = 'plus';
  }

  return <Icon name={iconName} size={25} color={tintColor} />;
};

const TabNavigator = createBottomTabNavigator({
  'Home': { screen: Memories },
  'New Memory' : { screen: Memory },
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) =>
      getTabBarIcon(navigation, focused, tintColor),
  }),
  tabBarOptions: {
    activeTintColor: '#584EAF',
    inactiveTintColor: 'gray',
    showLabel: true
  },
});

export default createAppContainer(TabNavigator);