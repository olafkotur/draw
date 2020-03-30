import React from 'react';
import styles from './styles';
import { View, Dimensions } from 'react-native';
import Tile from '../Tile';
import { PatternService } from '../../../services/pattern';
import { game } from '../../../config';

interface IProps {
  pattern?: number[][];
  size?: number;
  margin?: boolean;
}

export default class Canvas extends React.Component<IProps> {  
  constructor(props: IProps) {
    super(props);
    this.pattern = this.props.pattern ? this.props.pattern : this.getGamePattern();
    this.generateTiles();
  }

  pattern: number[][];
  tiles: JSX.Element[] = [];
  width: any = { width: this.props.size ? (this.props.size * game.tileSize) + (this.props.size * 5 - 1): '100%' }

  getGamePattern = (): number[][] => {
    return PatternService.calculateGameCanvas(Dimensions.get('window').height, Dimensions.get('window').width);
  }

  generateTiles = (): void => {
    const pattern: number[][] = this.pattern;

    // Generate tiles based on pattern
    pattern.forEach((col: number[]) => {
      col.forEach((row: number) => {
        if (row === 1) {
          this.tiles.push( <Tile key={ Math.random() } active margin={ this.props.margin } /> );
        }
        else if (row === 0) {
          this.tiles.push( <Tile key={ Math.random() } margin={ this.props.margin } /> );
        }
        else if (row === -1) {
          this.tiles.push( <Tile key={ Math.random() } blank margin={ this.props.margin } /> );
        }
        else {
          this.tiles.push( <Tile key={ Math.random() } disabled margin={ this.props.margin } /> );
        }
      });
    });

  };

  render(): React.ReactElement {
    return (
      <View style={{ ...styles.container, ...this.width }} >
        { this.tiles }
      </View>
    );
  } 
}
