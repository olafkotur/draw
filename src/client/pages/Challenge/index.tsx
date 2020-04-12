import React from 'react';
import styles from './styles';
import { View, StatusBar, TouchableOpacity, Image, TextInput, Dimensions, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import SafeAreaView from '../../components/SafeAreaView';
import Canvas from '../../components/Canvas';
import { IPlayerData, IGameInfo, IGuessData } from '../../../models';
import Text from '../../components/Text';
import { game, theme } from '../../../config';
import GuessButtons from '../../components/GuessButtons';
import { PatternService } from '../../../services/pattern';
import Loading from '../../components/Loading';
import delay from 'delay';
import { HelperService } from '../../../services/helper';
import { ChallengeService } from '../../../services/challenge';
import { drawings } from '../../../imports/bot';

interface IProps {
  navigation: any;
}

interface IState {
  isLoading: boolean;
  isCanvasHidden: boolean;
  formattedTime: string;
  guessData: IGuessData[];
  guess: string;
}

export default class Challenge extends React.Component<IProps> {  
  constructor(props: IProps) {
    super(props);
    this.debug = false;
    this.playerData = this.props.navigation.getParam('playerData');
    this.gameInfo = ChallengeService.generateGameInfo();
    this.timeRemaining = game.length;
    this.state.guessData = [{ value: '-', isLiked: false }, { value: '-', isLiked: false }, { value: '-', isLiked: false }];
    this.pattern = PatternService.calculateChallengeCanvas(Dimensions.get('window').height, Dimensions.get('window').width);
  }

  static navigationOptions = {
    header: null
  };

  debug: boolean;
  playerData: IPlayerData;
  gameInfo: IGameInfo;
  pattern: number[][];
  timeRemaining: number;
  previousGuesses: string[] = [];
  startedGuessing: boolean = false;
  drawing: number[][];

  state: IState = {
    isLoading: true,
    isCanvasHidden: false,
    formattedTime: '',
    guessData: [],
    guess: ''
  };

  componentDidMount = async (): Promise<void> => {
    await delay(Math.floor(Math.random() * 1500) + 750);
    this.setState({ isLoading: false });
    this.startTimer();
  }

  startTimer = async (): Promise<Function> => {
    this.timeRemaining -= 1;
    this.setState({ formattedTime: HelperService.formatTime(this.timeRemaining) });
    
    if (this.timeRemaining > 0) {
      await delay(1000);
      return this.startTimer();
    } else {
      this.props.navigation.replace('Victory', { winType: 'not guessed', playerData: this.playerData, pattern: this.pattern });
    }
  };

  startGuessing = async (): Promise<Function> => {
    if (game.length - this.timeRemaining > HelperService.getRandomNumber(10, 15)) {
      const guess: string = ChallengeService.startGuessBot(this.gameInfo, this.previousGuesses);
      if (guess === '') {
        return;
      }

      this.previousGuesses.push(guess);
      this.setState({ guess });
      this.handleGuessSend();
      await delay(HelperService.getRandomNumber(3000, 8000));
    }
    await (delay(1000));
    return this.startGuessing();
  };

  handleHideCanvas = (): void => {
    this.setState({ isCanvasHidden: !this.state.isCanvasHidden });
  };

  handleTilePressed = (col: number, row: number, symbol: number): void => {
    if (!this.startedGuessing) {
      this.startedGuessing = true;
      this.gameInfo.type === 'artist' ? this.startGuessing() : null;
    }
    this.pattern[col][row] = symbol;
  };

  handleLiked = async (guessData: IGuessData, position: number): Promise<void> => {
    if (this.debug) {
      PatternService.debugPrintString(this.pattern);
    }
    else if (guessData.value !== '-') {
      this.state.guessData[position].isLiked = !guessData.isLiked;
      this.setState({});

      // Add the points to the user
      this.playerData.artistPoints += this.gameInfo.pointsAwarded;
      this.playerData.gamesPoints += 1;

      await delay(1000);
      this.props.navigation.replace('Victory', { winType: 'guessed', playerData: this.playerData, pattern: this.pattern });
    }
  };

  handleGuessSend = (): void => {
    // Skip if input is the same
    if (this.state.guess === this.state.guessData[2].value) {
      return;
    }

    const guessData: IGuessData[] = [];
    guessData.push(this.state.guessData[1]);
    guessData.push(this.state.guessData[2]);
    guessData.push({ value: this.state.guess, isLiked: false});
    this.setState({ guessData });
  };

  handleExit = (): void => {
    this.timeRemaining = 0;
    this.props.navigation.replace('Home');
  };

  render(): React.ReactElement {
    if (!this.state.isLoading) {
      return (          
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss } >
          
          <KeyboardAvoidingView 
            behavior={ Platform.OS == 'ios' ? 'padding' : 'height' }
            style={{ flex: 1 }} >

            <SafeAreaView style={ styles.container } >

              <StatusBar 
                translucent={ true }
                barStyle='light-content'
              />

              <View style={{ display: this.state.isCanvasHidden ? 'none' : 'flex' }}>
                <Canvas
                  pattern={ this.pattern }
                  color={ theme.secondary }
                  handleTilePressed={ this.handleTilePressed }
                />
              </View>

              {/* Player information */}
              <View style={ styles.versusContainer }>
                <Text style={ styles.playerNameText } >{ this.playerData.nickName }</Text>
                <Text style={ styles.versusText }>VS</Text>
                <Text style={ styles.opponentNameText }>{ this.gameInfo.opponentName }</Text>
              </View>

              {/* Guess Cards */}
              <View style={ styles.guessContainer } >
                <Text style={ styles.text } >tap to select winner</Text>
                <GuessButtons 
                  data={ this.state.guessData }
                  handleLiked={ this.handleLiked }
                  disabled={ this.gameInfo.type === 'watcher' }
                />
              </View>

              {/* Guess Input */}
              { this.gameInfo.type === 'watcher' ? <Text style={ styles.guessText } >enter your guess...</Text> : null }
              { this.gameInfo.type === 'watcher' ? 
              <View style={ styles.guessInputContainer }>
                <TextInput
                  style={ styles.guessInput }
                  value={ this.state.guess }
                  onChangeText={ (e: string): void => this.setState({ guess: e }) }
                  placeholder={ 'pooper-scooper' }
                  autoCapitalize={ 'none' }
                  underlineColorAndroid={'rgba(0,0,0,0)'}
                  placeholderTextColor={'#c0c0c0'}
                  maxLength={ 16 }
                  onFocus={ this.handleHideCanvas }
                  onEndEditing={ this.handleHideCanvas }
                />

                <TouchableOpacity
                  style={ styles.guessSendButton }
                  onPress={ this.handleGuessSend } >
                  <Text style={ styles.text } >send</Text>
                </TouchableOpacity>
              </View> : null }

              {/* Bottom left information */}
              <View style={ styles.bottomLeftInfo } >
                <View
                  style={ styles.taskInfoContainer } >
                  <Text style={ styles.text } >{ this.gameInfo.type === 'artist' ? this.gameInfo.taskName : '?' }</Text>
                </View>

                <Text style={ styles.text } >{ this.gameInfo.pointsAwarded }</Text>
                <Image
                  style={ styles.typeIcon }
                  source={ this.gameInfo.type === 'artist' ? require('../../../../assets/icons/brush.png') : require('../../../../assets/icons/brush.png') }
                />
              </View>

              {/* Bottom right information */}
              <View style={ styles.bottomRightInfo } >
                <Text style={ styles.text } >{ this.state.formattedTime }</Text>

                <TouchableOpacity
                  style={ styles.exitButton }
                  onPress={ this.handleExit } >
                  <Text style={ styles.text } >exit</Text>
                </TouchableOpacity>
              </View>

            </SafeAreaView>

          </KeyboardAvoidingView>

        </TouchableWithoutFeedback>
      );
    } else {
      return <Loading />
    }
  } 
}
