import React from 'react';
import { View, StatusBar, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import SafeAreaView from '../../components/SafeAreaView';
import styles from './styles';
import Canvas from '../../components/Canvas';
import { PatternService } from '../../../services/pattern';
import Text from '../../components/Text';
import Score from '../../components/Score';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { logoPattern } from '../../../patterns';
import { IPlayerData } from '../../../models';
import { StorageService } from '../../../services/storage';
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
  }

  static navigationOptions = {
    header: null
  };

  state: IState = {
    color: theme.secondary
  };

  getChallengePattern = (): number[][] => {
    return PatternService.calculateFreestyleCanvas(Dimensions.get('window').height, Dimensions.get('window').width);
  };

  handleColorChanged = (color: string) => {
    this.setState({ color });
  };
  
  handleExit = () => {
    this.props.navigation.replace('Home');
  };

  render(): JSX.Element {
    return (
      <SafeAreaView style={ styles.container } >

        <StatusBar barStyle='light-content' />

        <Canvas 
          pattern={ this.getChallengePattern() }
          color={ this.state.color }
        />

        <View style={ styles.colorContainer }>
          <ColorPicker handleColorChanged={ this.handleColorChanged } />
        </View>

        {/* Bottom left information */}
        <View style={ styles.bottomLeftInfo } >
          <TouchableOpacity
            style={{ ...styles.bottomLeftButton, backgroundColor: theme.secondary }}
            onPress={ this.handleExit } >
            <Text style={ styles.text } >save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ ...styles.bottomLeftButton, backgroundColor: theme.tertiary }}
            onPress={ this.handleExit } >
            <Text style={ styles.text } >clear</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ ...styles.bottomLeftButton, backgroundColor: theme.red }}
            onPress={ this.handleExit } >
            <Text style={ styles.text } >delete</Text>
          </TouchableOpacity>
        </View>

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
