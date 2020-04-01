import React from 'react';
import styles from './styles';
import { View, Dimensions } from 'react-native';
import Tile from '../Tile';
import { PatternService } from '../../../services/pattern';
import { game, theme } from '../../../config';

interface IProps {
  pattern: number[][];
  color: string;
  size?: number;
  margin?: boolean;
}

export default class Canvas extends React.Component<IProps> {  
  constructor(props: IProps) {
    super(props);
    this.generateTiles();
  }

  tiles: JSX.Element[] = [];
  width: any = { width: this.props.size ? (this.props.size * game.tileSize) + (this.props.size * 5 - 1): '100%' }
  counter: number = 0;

  handleTilePressed = (col: number, row: number, symbol: number) => {
    this.tiles.forEach((tile: JSX.Element, i: number) => {
      const newSymbol: number = symbol === 1 ? 0 : 1;
      if (tile.key === `${col}:${row}`) {
        this.tiles[i] =
        <Tile
          key={ `${col}:${row}` }
          col={ col } row={ row } symbol={ newSymbol }
          color={ newSymbol === 1 ? this.props.color : theme.white }
          blank={ row === -1 ? true : false }
          handleTilePressed={ this.handleTilePressed }
        />
      }
    });
    this.setState({});
  };

  generateTiles = (): void => {
    const pattern: number[][] = this.props.pattern;

    // Generate tiles based on pattern
    this.tiles = [];
    pattern.forEach((col: number[], i: number) => {
      col.forEach((row: number, j: number) => {
        this.tiles.push(
          <Tile
            key={ `${i}:${j}` }
            col={ i } row={ j } symbol={ row }
            color={ row === 1 ? this.props.color : theme.white }
            blank={ row === -1 ? true : false }
            handleTilePressed={ this.handleTilePressed }
          />
        );
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
