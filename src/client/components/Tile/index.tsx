import React from 'react';
import styles from './styles';
import { TouchableOpacity, View } from 'react-native';
import { theme } from '../../../config';

interface IProps {
  active?: boolean;
  disabled?: boolean;
  blank?: boolean;
  margin?: boolean;
  color: string;
  handleTilePressed?: () => void;
}

interface IState {
  active: boolean;
  backgroundColor: string;
}

export default class Tile extends React.Component<IProps> {  

  state: IState = {
    active: this.props.active ? true : false,
    backgroundColor: this.props.active ? this.props.color : theme.white
  };

  backgroundColor: string = theme.white;

  handleTilePressed = (): void => {
    this.backgroundColor = !this.state.active ? this.props.color : theme.white;
    this.setState({ active: !this.state.active });
    this.props.handleTilePressed();
  };

  render(): React.ReactElement {
    if (!this.props.disabled) {
      if (!this.props.blank) {
        return (
          <TouchableOpacity 
            style={{ ...styles.container, backgroundColor: this.backgroundColor, margin: this.props.margin ? 5 : 0 }}
            onPress={ this.handleTilePressed }
          />
        );
      }
      else {
        return (
          <View style={{ ...styles.container, borderWidth: 0, margin: this.props.margin ? 5 : 0 }} />
        );
      }
    } else {
      return null;
    }
  } 
}
