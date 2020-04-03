import React from 'react';
import * as Font from 'expo-font';
import { View, StyleSheet } from 'react-native';
import { theme } from './src/config';
import Navigator from './src/services/navigation';

console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    justifyContent: 'center',
  },
});

interface IState {
  isUpdating: boolean;
}

export default class App extends React.Component<{}> {

  state: IState = {
    isUpdating: true,
  }

  componentDidMount = () => {
    Font.loadAsync({
      'Courier': require('./assets/fonts/Courier.ttf')
    }).then(() => this.setState({ isUpdating: false }));
  }

  render() {
    if (!this.state.isUpdating) {
      return (
        <View style={ styles.container } >
          <Navigator />
        </View>
      );
    }
    else {
      return (
        <View />
      );
    }
  }
};
