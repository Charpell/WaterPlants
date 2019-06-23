import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';


const screens = createStackNavigator({
  Welcome: { screen: Welcome }
})

export default createAppContainer(screens);