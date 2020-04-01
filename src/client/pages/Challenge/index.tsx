import React from 'react';
import styles from './styles';
import { View, StatusBar, TouchableOpacity, Image, TextInput } from 'react-native';
import SafeAreaView from '../../components/SafeAreaView';
import Canvas from '../../components/Canvas';
import { IPlayerData, IGameInfo, IGuessData } from '../../../models';
import Text from '../../components/Text';
import { game } from '../../../config';
import GuessButtons from '../../components/GuessButtons';

interface IProps {
  navigation: any;
}

interface IState {
  formattedTime: string;
  guessData: IGuessData[];
  guess: string;
}

export default class Challenge extends React.Component<IProps> {  
  constructor(props: IProps) {
    super(props);
    this.playerData = this.props.navigation.getParam('playerData');
    this.gameInfo = { type: 'artist', opponentName: 'grass-hopper', taskName: 'heart', pointsAwarded: 15 };
    this.timeRemaining = game.length;
    this.state.guessData = [{ value: '-', isLiked: false }, { value: '-', isLiked: false }, { value: '-', isLiked: false }];
  }

  static navigationOptions = {
    header: null
  };

  playerData: IPlayerData;
  gameInfo: IGameInfo;
  timeRemaining: number;

  state: IState = {
    formattedTime: '5:00',
    guessData: [],
    guess: ''
  };

  componentDidMount = () => {
    this.startTimer();
  }

  startTimer = (): void => {
    setTimeout(() => {
      this.timeRemaining -= 1;
      this.formatTime(this.timeRemaining);
      if (this.timeRemaining > 0) this.startTimer();
    }, 1000);
  };

  formatTime = (remaining: number): void => {
    const minutes: number = Math.floor(remaining / 60);
    const seconds: number = remaining - (60 * minutes);

    if (seconds < 10) {
      this.setState({ formattedTime: `${minutes}:0${seconds}` });
      return 
    }
    else {
      this.setState({ formattedTime: `${minutes}:${seconds}` });
    }
  };

  handleLiked = (guessData: IGuessData) => {
    const temp: IGuessData[] = this.state.guessData;
    this.state.guessData.forEach((data: IGuessData, i: number) => {
      if (data.value == guessData.value) {
        temp[i].isLiked = !guessData.isLiked;
      }
    });
    this.setState({ guessData: temp });
  };

  handleGuessSend = (): void => {
    const guessData: IGuessData[] = [];
    guessData.push(this.state.guessData[1]);
    guessData.push(this.state.guessData[2]);
    guessData.push({ value: this.state.guess, isLiked: false});
    this.setState({ guessData });
  }

  handleExit = () => {
    this.timeRemaining = 0;
    this.props.navigation.replace('Home');
  };

  render(): React.ReactElement {
    return (
      <SafeAreaView style={ styles.container } >

        <StatusBar barStyle='light-content' />

        <Canvas />

        {/* Player information */}
        <View style={ styles.versusContainer }>
          <Text style={ styles.playerNameText } >{ this.playerData.nickName }</Text>
          <Text style={ styles.versusText }>VS</Text>
          <Text style={ styles.opponentNameText }>{ this.gameInfo.opponentName }</Text>
        </View>

        {/* Guess Cards */}
        <View style={ styles.guessContainer } >
          <Text style={ styles.text } >tap to like</Text>
          <GuessButtons 
            data={ this.state.guessData }
            handleLiked={ this.handleLiked }
          />
        </View>

        {/* Guess Input */}
        <Text style={ styles.guessText } >enter your guess...</Text>
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
          />

          <TouchableOpacity
            style={ styles.guessSendButton }
            onPress={ this.handleGuessSend } >
            <Text style={ styles.text } >send</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom left information */}
        <View style={ styles.bottomLeftInfo } >
          <View
            style={ styles.taskInfoContainer } >
            <Text style={ styles.text } >{ this.gameInfo.taskName }</Text>
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
    );
  } 
}
