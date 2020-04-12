import React from 'react';
import { View, StatusBar, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import SafeAreaView from '../../components/SafeAreaView';
import styles from './styles';
import Canvas from '../../components/Canvas';
import { PatternService } from '../../../services/pattern';
import Text from '../../components/Text';
import { theme } from '../../../config';
import ColorPicker from '../../components/ColorPicker';

interface IProps {
  navigation: any;
}

interface IState {
  color: string;
}

export default class Home extends React.Component<IProps> {  
  constructor(props: IProps) {
    super(props);
    this.pattern = this.getFreestylePattern();
  }

  static navigationOptions = {
    header: null
  };

  state: IState = {
    color: theme.secondary
  };

  pattern: number[][];

  getFreestylePattern = (): number[][] => {
    return PatternService.calculateFreestyleCanvas(Dimensions.get('window').height, Dimensions.get('window').width);
  };

  handleColorChanged = (color: string): void => {
    this.setState({ color });
  };

  handleTilePressed = (col: number, row: number, symbol: number): void => {
    this.pattern[col][row] = symbol;
  };
  
  handleExit = (): void => {
    this.props.navigation.replace('Home');
  };

  render(): JSX.Element {
    return (
      <SafeAreaView style={ styles.container } >

        <StatusBar 
          translucent={ true }
          barStyle='light-content'
        />

        <Canvas
          pattern={ this.getFreestylePattern() }
          color={ this.state.color }
          handleTilePressed={ this.handleTilePressed }
        />

        <View style={ styles.colorContainer }>
          <ColorPicker handleColorChanged={ this.handleColorChanged } />
        </View>

        {/* Bottom left information */}
        {/* <View style={ styles.bottomLeftInfo } >
          <TouchableOpacity
            style={{ ...styles.bottomLeftButton, backgroundColor: theme.secondary }}
            onPress={ this.handleExit } >
            <Text style={ styles.text } >save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ ...styles.bottomLeftButton, backgroundColor: theme.red }}
            onPress={ this.handleExit } >
            <Text style={ styles.text } >delete</Text>
          </TouchableOpacity>
        </View> */}

        {/* Exit button */}
        <TouchableOpacity
          style={ styles.exitButton }
          onPress={ this.handleExit } >
          <Text style={ styles.text } >exit</Text>
        </TouchableOpacity>

      </SafeAreaView>
    );
  } 
}
