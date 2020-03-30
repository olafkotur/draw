import React from 'react';
import * as Font from 'expo-font';
import { View, StyleSheet } from 'react-native';
import { theme } from './src/config';
import Navigator from './src/services/navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    justifyContent: 'center',
  },
});

export default class App extends React.Component<{}> {

  componentDidMount() {
    Font.loadAsync({
      'Courier': require('./assets/fonts/Courier.ttf')
    });
  }

  render() {
    return (
      <View style={ styles.container } >
        <Navigator />
      </View>
    );
  }
};
