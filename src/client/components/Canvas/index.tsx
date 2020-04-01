import React from 'react';
import styles from './styles';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import Tile from '../Tile';
import { PatternService } from '../../../services/pattern';
import { game, theme } from '../../../config';

interface IProps {
  pattern: number[][];
  color: string;
  size?: number;
  margin?: boolean;
  handleTilePressed?: (col: number, row: number, symbol: number) => void;
}

export default class Canvas extends React.Component<IProps> {  
  constructor(props: IProps) {
    super(props);
    this.pattern = props.pattern;
    this.generateTiles();
  };

  pattern: number[][];
  tiles: JSX.Element[] = [];
  width: any = { width: this.props.size ? (this.props.size * game.tileSize) + (this.props.size * 5 - 1): '100%' };

  handleTilePressed = (col: number, row: number, symbol: number) => {
    // Update the tile with the new color value
    const newSymbol: number = symbol === 1 ? 0 : 1;
    this.tiles.forEach((tile: JSX.Element, i: number) => {
      if (tile.key === `${col}:${row}`) {
        this.tiles[i] =
        <Tile
          key={ `${col}:${row}` }
          col={ col } row={ row } symbol={ newSymbol }
          color={ newSymbol === 1 ? this.props.color : theme.white }
          blank={ row === -1 ? true : false }
          margin={ this.props.margin ? true : false }
          handleTilePressed={ this.handleTilePressed }
        />
      }
    }); this.setState({});

    // Allow parent to note the tile change
    if (this.props.handleTilePressed) {
      this.props.handleTilePressed(col, row, newSymbol);
    }
  };

  generateTiles = (): void => {
    // Generate tiles based on pattern
    this.tiles = [];
    this.pattern.forEach((col: number[], i: number) => {
      col.forEach((row: number, j: number) => {
        this.tiles.push(
          <Tile
            key={ `${i}:${j}` }
            col={ i } row={ j } symbol={ row }
            color={ row === 1 ? this.props.color : theme.white }
            blank={ row === -1 ? true : false }
            margin={ this.props.margin ? true : false }
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
