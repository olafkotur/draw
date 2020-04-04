import React from 'react';
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

export default class App extends React.Component<{}> {

  render() {
    return (
      <View style={ styles.container } >
        <Navigator />
      </View>
    );
  }
};
