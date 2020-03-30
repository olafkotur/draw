import React from 'react';
import { View, StatusBar } from 'react-native';
import SafeAreaView from '../../components/SafeAreaView';
import styles from './styles';
import Canvas from '../../components/Canvas';

interface IProps {
  navigation: any;
}

interface IState {
}

export default class Create extends React.Component<IProps> {  
  static navigationOptions = {
    header: null
  };

  state: IState = {
  };

  render(): React.ReactElement {
    return (
      <SafeAreaView style={ styles.container } >

        <StatusBar barStyle='light-content' />

        <Canvas />

      </SafeAreaView>
    );
  } 
}
