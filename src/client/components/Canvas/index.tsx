import React from 'react';
import styles from './styles';
import { View, Dimensions } from 'react-native';
import Tile from '../Tile';
import { PatternService } from '../../../services/pattern';
import { game } from '../../../config';

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

  handleTilePressed = (counter: number, symbol: number) => {
    this.tiles[counter] = this.detectTile(symbol, counter);
  };

  generateTiles = (): void => {
    const pattern: number[][] = this.props.pattern;
    this.tiles = [];

    // Generate tiles based on pattern
    let counter: number = 0;
    pattern.forEach((col: number[], i: number) => {
      col.forEach((row: number, j: number) => {
        this.tiles.push(this.detectTile(row, counter));
        counter++;
      });
    });
  };

  detectTile = (symbol: number, counter: number): JSX.Element => {
    if (symbol === 1) {
      return ( 
        <Tile
          key={ Math.random() } 
          color={ this.props.color } 
          active
          margin={ this.props.margin }
          handleTilePressed={ (): void => this.handleTilePressed(counter, symbol) }
        />
      );
    }
    else if (symbol === 0) {
      return ( 
        <Tile 
          key={ Math.random() } 
          color={ this.props.color } 
          margin={ this.props.margin }
          handleTilePressed={ (): void => this.handleTilePressed(counter, symbol) }
        />
      );
    }
    else if (symbol === -1) {
      return ( 
        <Tile
          key={ Math.random() } 
          color={ this.props.color } 
          blank 
          margin={ this.props.margin }
          handleTilePressed={ (): void => this.handleTilePressed(counter, symbol) }
        />
      );
    }
    else {
      return ( 
        <Tile 
          key={ Math.random() } 
          color={ this.props.color } 
          disabled 
          margin={ this.props.margin } 
          handleTilePressed={ (): void => this.handleTilePressed(counter, symbol) }
        /> 
      );
    }
  };

  render(): React.ReactElement {
    return (
      <View style={{ ...styles.container, ...this.width }} >
        { this.tiles }
      </View>
    );
  } 
}
