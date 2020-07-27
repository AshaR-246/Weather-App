import * as React from 'react';
import { Text, View,Image, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

// You can import from local files

import WeatherScreen from './screens/WeatherScreen';



export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  

  WeatherScreen: WeatherScreen,

});

const AppContainer = createAppContainer(AppNavigator);
