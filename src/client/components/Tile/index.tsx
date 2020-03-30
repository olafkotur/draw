import React from 'react';
import styles from './styles';
import { TouchableOpacity, View } from 'react-native';

interface IProps {
  active?: boolean;
  disabled?: boolean;
  blank?: boolean;
  margin?: boolean;
  handleTilePressed?: () => void;
}

interface IState {
  active: boolean;
  backgroundColor: { backgroundColor: string };
}

export default class Tile extends React.Component<IProps> {  

  state: IState = {
    active: this.props.active ? true : false,
    backgroundColor: this.props.active ? styles.active : styles.inactive
  };

  backgroundColor: { backgroundColor: string } = this.props.active ? styles.active : styles.inactive;

  handleTilePressed = (): void => {
    this.backgroundColor = !this.state.active ? styles.active : styles.inactive;
    this.setState({ active: !this.state.active });
  };

  render(): React.ReactElement {
    if (!this.props.disabled) {
      if (!this.props.blank) {
        return (
          <TouchableOpacity 
            style={{ ...styles.container, ...this.backgroundColor, margin: this.props.margin ? 5 : 0 }}
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
