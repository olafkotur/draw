import React from 'react';
import styles from './styles';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import Tile from '../Tile';
import { game, theme } from '../../../config';
import delay from 'delay';
import { HelperService } from '../../../services/helper';

interface IProps {
  pattern: number[][];
  color: string;
  size?: number;
  margin?: number;
  cycleColors?: boolean;
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
  width: any = { width: this.props.size ? (this.props.size * game.tileSize) + (this.props.size * (this.props.margin - 1)): '100%' };

  componentDidMount() {
    if (this.props.cycleColors) {
      this.cycleColors(0);
    }
  }

  handleTilePressed = (col: number, row: number, symbol: number) => {
    // Update the this.tiles[counter] with the new color value
    const newSymbol: number = symbol === 1 ? 0 : 1;
    this.tiles.forEach((tile: JSX.Element, i: number) => {
      if (tile.key === `${col}:${row}`) {
        this.tiles[i] =
        <Tile
          key={ `${col}:${row}` }
          col={ col } row={ row } symbol={ newSymbol }
          color={ newSymbol === 1 ? this.props.color : theme.white }
          blank={ row === -1 ? true : false }
          margin={ this.props.margin ? this.props.margin : 0 }
          handleTilePressed={ this.handleTilePressed }
        />
      }
    }); 
    this.setState({});

    // Allow parent to note the this.tiles[counter] change
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
            margin={ this.props.margin ? this.props.margin : 0 }
            handleTilePressed={ this.handleTilePressed }
            disabled={ this.props.cycleColors ? true : false }
          />
        );
      });
    });
  };

  cycleColors = async (counter: number): Promise<void> => {
    const previous: number = counter !== 0 ? counter - 1 : this.tiles.length - 1;
    this.tiles[previous] = <Tile
      key={ this.tiles[previous].key }
      col={ this.tiles[previous].props.col } 
      row={ this.tiles[previous].props.row } 
      symbol={ this.tiles[previous].props.symbol }
      margin={ this.tiles[previous].props.margin }
      color={ theme.white }
      disabled
    />

    this.tiles[counter] = <Tile
      key={ this.tiles[counter].key }
      col={ this.tiles[counter].props.col } 
      row={ this.tiles[counter].props.row } 
      symbol={ this.tiles[counter].props.symbol }
      margin={ this.tiles[counter].props.margin }
      color={ HelperService.getRandomColor() }
      disabled
    />

    this.setState({});
  
    await delay(500);
    this.cycleColors(counter === this.tiles.length - 1 ? 0 : counter + 1);
  };

  render(): React.ReactElement {
    return (
      <View style={{ ...styles.container, ...this.width }} >
        { this.tiles }
      </View>
    );
  } 
}
