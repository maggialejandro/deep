import React, { Component } from 'react';
import { Text, Platform } from 'react-native';
import {
  DrawerNavigator,
  StackNavigator,
 } from 'react-navigation';


class HomeScreen extends Component {
  render() {
    return <Text> Home Screen </Text>
  }
}

class PageScreen extends Component {
  render() {
    return <Text> Page Screen </Text>
  }
}

const PageNavigator = StackNavigator({
  Busqueda: {
    screen: PageScreen,
    path: 'page',
  },
});

const AppDrawerNavigator = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Page: {
    screen: PageNavigator,
  },
}, {
  initialRouteName: 'Home',
});

const prefix = Platform.OS == 'android'
  ? 'deeplinking://deeplinking/' : 'deeplinking://';

export default class App extends Component {
  render () {
    return <AppDrawerNavigator uriPrefix={prefix} />
  }
};
