import React from 'react';
import Expo, { AppLoading } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { HomeScreen } from './src/screens';
import { Text } from 'react-native';
import { fontAssets } from './helpers';

EStyleSheet.build({ $Colors: Colors });

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  }

  componentDidMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    await Promise.all(fontAssets)
      .then(() => this.setState({ fontLoaded: true }));
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return <HomeScreen />;
  }
}

// Expo.registerRootComponent(App);
