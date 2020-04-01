import React from 'react';
import { View, TouchableOpacity }  from 'react-native';
import styles from './styles';
import Text from '../Text';
import { theme } from '../../../config';

interface IProps {
  handleColorChanged: (color: string) => void;
}

interface IState {
  focused: string;
}

export default class ColorPicker extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.colors = [theme.secondary, theme.tertiary, theme.quaternary, theme.red, theme.blue, theme.yellow, theme.purple];
    this.focused = theme.secondary;
    this.generateColors(true);
  }

  colors: string[];
  colorItems: JSX.Element[];
  focused: string;

  state: IState = {
    focused: theme.secondary
  };

  handleColorChanged = (color: string): void => {
    this.focused = color;
    this.generateColors();
    this.props.handleColorChanged(color);
  };

  generateColors = (skipState?: boolean) => {
    this.colorItems = [];
    this.colors.forEach((color: string): void => {
      this.colorItems.push(
        <TouchableOpacity
          key={ color }
          style={{ ...styles.colorButton, backgroundColor: color, borderColor: this.focused === color ? theme.white : 'transparent' }}
          onPress={ (): void => this.handleColorChanged(color) }
        />
      );
    });
    if (!skipState) this.setState({});
  };

  render(): JSX.Element {
    return (
      <View style={ styles.container } >
        
        <View style={ styles.colorContainer } >
          { this.colorItems }
        </View>

      </View>
    );
  } 
}
