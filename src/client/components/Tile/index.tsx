import React from 'react';
import styles from './styles';
import { TouchableOpacity, View } from 'react-native';

interface IProps {
  col: number;
  row: number;
  symbol: number;
  color?: string;
  active?: boolean;
  disabled?: boolean;
  blank?: boolean;
  margin?: boolean;
  handleTilePressed?: (col: number, row: number, symbol: number) => void;
}

export default class Tile extends React.Component<IProps> {  

  render(): React.ReactElement {
    if (!this.props.blank) {
      return (
        <TouchableOpacity 
          style={{ ...styles.container, backgroundColor: this.props.color, margin: this.props.margin ? 5 : 0 }}
          onPress={ (): void => this.props.handleTilePressed(this.props.col, this.props.row, this.props.symbol) }
          disabled={ this.props.disabled }
        />
      );
    }
    else {
      return (
        <View style={{ ...styles.container, borderWidth: 0, margin: this.props.margin ? 5 : 0 }} />
      );
    }
  } 
}
