import React from 'react';
import { View, StatusBar } from 'react-native';
import SafeAreaView from '../../components/SafeAreaView';
import styles from './styles';
import Canvas from '../../components/Canvas';
import { PatternService } from '../../../services/pattern';

interface IProps {
  navigation: any;
}

interface IState {
}

export default class Create extends React.Component<IProps> {  
  constructor(props: IProps) {
    super(props);
    this.logoPattern =  PatternService.translatePattern('-1-0/0-01/0010/-11-/');
  }

  static navigationOptions = {
    header: null
  };

  state: IState = {
  };

  logoPattern: number[][];

  render(): React.ReactElement {
    return (
      <SafeAreaView style={ styles.container } >

        <StatusBar barStyle='light-content' />

        <Canvas
          pattern={ this.logoPattern }
          size={ 5 } 
          margin
        />

      </SafeAreaView>
    );
  } 
}
