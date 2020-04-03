import React from 'react';
import styles from './styles';
import { View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import Text from '../../components/Text';
import { IPlayerData } from '../../../models';
import Score from '../../components/Score';
import Canvas from '../../components/Canvas';
import { theme } from '../../../config';

interface IProps {
  navigation: any;
}

export default class Victory extends React.Component<IProps> {  
  constructor(props: IProps) {
    super(props);
    this.playerData = this.props.navigation.getParam('playerData');
    this.winType = this.props.navigation.getParam('winType');
    this.pattern = this.props.navigation.getParam('pattern');
  };

  static navigationOptions = {
    header: null
  };

  winType: string;
  playerData: IPlayerData
  pattern: number[][];

  handlePlayAgain = (): void => {
    this.props.navigation.replace('Challenge', { playerData: this.playerData });
  };

  handleExit = (): void => {
    this.props.navigation.replace('Home');
  };

  render(): React.ReactElement {
    return (
      <SafeAreaView style={ styles.container } >

        <StatusBar barStyle='light-content' />

        <Canvas
          pattern={ this.pattern }
          color={ theme.secondary }
          ignoreInactive
        />

        <Score
          artist={ this.playerData.artistPoints }
          games={ this.playerData.gamesPoints }
          watcher={ this.playerData.watchPoints }
        />

        <TouchableOpacity
          style={ styles.playButton } 
          onPress={ this.handlePlayAgain } >
          <Text style={ styles.playText }>play again</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={ styles.exitButton }
          onPress={ this.handleExit } >
          <Text style={ styles.text } >menu</Text>
        </TouchableOpacity>

      </SafeAreaView>
    );
  } 
}
