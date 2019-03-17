import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

//App screens.
import Memory from './src/screens/new_memory'
import Memories from './src/screens/memories'

// Import config styles.
import colors from './src/config/styles';

//Function to get the proper icon.
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

//setup the tab bar navigator.
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
    activeTintColor: colors.MAIN_COLOR,
    inactiveTintColor: 'gray',
    showLabel: false
  },
});

//Encapsulate the navigator into container.
export default createAppContainer(TabNavigator);