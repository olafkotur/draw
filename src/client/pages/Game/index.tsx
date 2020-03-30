import React from 'react';
import styles from './styles';
import { View, SafeAreaView, StatusBar } from 'react-native';

interface IProps {
  navigation: any;
}

interface IState {
}

export default class Game extends React.Component<IProps> {  
  static navigationOptions = {
    header: null
  };

  state: IState = {
  };

  render(): React.ReactElement {
    return (
      <SafeAreaView style={ styles.container } >

        <StatusBar barStyle='light-content' />

      </SafeAreaView>
    );
  } 
}
