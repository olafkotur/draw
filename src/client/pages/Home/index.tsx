import React from 'react';
import { View, StatusBar, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
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
import { MiscService } from '../../../services/misc';

interface IProps {
  navigation: any;
}

interface IState {
  playerData: IPlayerData;
}

export default class Home extends React.Component<IProps> {  
  constructor(props: IProps) {
    super(props);
    this.logoPattern = PatternService.translatePattern(logoPattern);
  }

  static navigationOptions = {
    header: null
  };

  logoPattern: number[][];
  defaultName: string = 'panda-flower';

  state: IState = {
    playerData: { nickName: '', artistPoints: 0, gamesPoints: 0, watchPoints: 0 }
  };

  componentDidMount = async () => {
    const playerData: IPlayerData = await StorageService.retrieveSecurePlayerData();
    if (playerData) {
      this.setState({ playerData });
    }
  };

  handleStartChallenge = () => {
    if (!this.state.playerData.nickName) {
      this.state.playerData.nickName = this.defaultName;
    }
    this.props.navigation.replace('Challenge', { playerData: this.state.playerData });
  };

  handleStartFreestyle = () => {
    this.props.navigation.replace('Freestyle');
  };
  

  render(): JSX.Element {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={ Platform.OS == 'ios' ? 'padding' : 'height' }
        keyboardVerticalOffset={ Header.HEIGHT + 25 } >

        <TouchableWithoutFeedback onPress={ Keyboard.dismiss } >
        
          <SafeAreaView style={ styles.container } >

            <StatusBar barStyle='light-content' />

            <Canvas
              pattern={ this.logoPattern }
              color={ MiscService.getRandomColor() }
              size={ 5 } 
              margin
            />

            <View style={ styles.gameInfoContainer } >

              <Score
                artist={ this.state.playerData.artistPoints }
                games={ this.state.playerData.gamesPoints }
                watcher={ this.state.playerData.watchPoints }
              />

              <Text style={ styles.instructionText }>choose a nickname</Text>

              <TextInput
                style={ styles.nameInput }
                value={ this.state.playerData.nickName }
                onChangeText={ (e: string): void => this.setState({ playerData: { ...this.state.playerData, nickName: e } }) }
                placeholder={ this.defaultName }
                autoCapitalize={ 'none' }
                underlineColorAndroid={'rgba(0,0,0,0)'}
                placeholderTextColor={'#c0c0c0'}
                maxLength={ 16 }
              />

              <TouchableOpacity
                style={ styles.challengeButton } 
                onPress={ this.handleStartChallenge } >
                <Text style={ styles.startText }>challenge</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={ styles.freestyleButton } 
                onPress={ this.handleStartFreestyle } >
                <Text style={ styles.startText }>freestyle</Text>
              </TouchableOpacity>

            </View>

          </SafeAreaView>

        </TouchableWithoutFeedback>

      </KeyboardAvoidingView>
    );
  } 
}
