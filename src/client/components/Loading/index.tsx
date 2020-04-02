import React from 'react';
import styles from './styles';
import { StatusBar } from 'react-native';
import SafeAreaView from '../SafeAreaView';
import Text from '../Text';
import Canvas from '../Canvas';
import { HelperService } from '../../../services/helper';
import { PatternService } from '../../../services/pattern';
import { loading } from '../../../patterns';

interface IProps {
}

export default class Tile extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.pattern = PatternService.translatePattern(loading);
  }
  
  pattern: number[][];

  render(): React.ReactElement {
    return (
      <SafeAreaView style={ styles.container } >

        <StatusBar barStyle='light-content' />

        <Text style={ styles.text }>loading...</Text>
        <Canvas
          pattern={ this.pattern }
          color={ HelperService.getRandomColor() }
          margin={ 10 }
          cycleColors
        />

      </SafeAreaView>
    );
  } 
}
