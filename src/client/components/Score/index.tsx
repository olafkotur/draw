import React from 'react';
import { View, Image }  from 'react-native';
import styles from './styles';
import Text from '../Text';

interface IProps {
  artist: number;
  games: number;
  watcher: number;
}

export default class Score extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.artistIcon = require('../../../../assets/icons/brush.png');
    this.gamesIcon = require('../../../../assets/icons/controller.png');
    this.watcherIcon = require('../../../../assets/icons/eye.png');
  }

  artistIcon: any;
  gamesIcon: any;
  watcherIcon: any;
  
  render(): JSX.Element {
    return (
      <View style={ styles.container } >

        <View style={ styles.scoreGroup } >
          <Text style={ styles.scoreText } >{ this.props.artist }</Text>
          <Image source={ this.artistIcon } style={ styles.icon } />
        </View>

        <View style={ styles.scoreGroup } >
          <Text style={ styles.scoreText } >{ this.props.games }</Text>
          <Image source={ this.gamesIcon } style={ styles.icon } />
        </View>

        <View style={ styles.scoreGroup } >
          <Text style={ styles.scoreText } >{ this.props.watcher }</Text>
          <Image source={ this.watcherIcon } style={ styles.icon } />
        </View>

      </View>
    );
  } 
}
