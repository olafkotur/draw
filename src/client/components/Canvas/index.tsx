import React from 'react';
import styles from './styles';
import { View, Dimensions } from 'react-native';
import Tile from '../Tile';
import { PatternService } from '../../../services/pattern';

interface IProps {
  pattern?: number[][];
}

export default class Canvas extends React.Component<IProps> {  
  constructor(props: IProps) {
    super(props);
    this.pattern = this.props.pattern ? this.props.pattern : this.getGamePattern();
    this.generateTiles();
  }

  pattern: number[][];
  tiles: JSX.Element[] = [];

  getGamePattern = (): number[][] => {
    return PatternService.calculateGameCanvas(Dimensions.get('window').height, Dimensions.get('window').width);
  }

  generateTiles = (): void => {
    const pattern: number[][] = PatternService.calculateGameCanvas(Dimensions.get('window').height, Dimensions.get('window').width);

    // Generate tiles based on pattern
    pattern.forEach((col: number[]) => {
      col.forEach((row: number) => {
        if (row === 1) {
          this.tiles.push( <Tile key={ Math.random() } active={ true } /> );
        }
        else if (row === 0) {
          this.tiles.push( <Tile key={ Math.random() } active={ false } /> );
        }
        else {
          this.tiles.push( <Tile key={ Math.random() } disabled /> );
        }
      });
    });

  };

  render(): React.ReactElement {
    return (
      <View style={ styles.container } >
        { this.tiles }
      </View>
    );
  } 
}
