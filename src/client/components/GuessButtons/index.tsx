import React from 'react';
import { View, Image, ScrollView, TouchableOpacity }  from 'react-native';
import styles from './styles';
import Text from '../Text';
import { theme } from '../../../config';
import { IGuessData } from '../../../models';

interface IProps {
  data: IGuessData[];
  handleLiked: (data: IGuessData) => void;
}

export default class GuessButtons extends React.Component<IProps> {

  handleLiked = (data: IGuessData) => {
    if (data.value === '-') {
      return;
    }
    this.props.handleLiked(data);
  };

  render(): JSX.Element {
    return (
      <View style={ styles.container } >
        <TouchableOpacity
          style={{ ...styles.cardContainer, backgroundColor: this.props.data[0].isLiked ? theme.tertiary : theme.white }}
          onPress={ (): void => this.handleLiked(this.props.data[0]) } >
          <Text style={ styles.cardText } >{ this.props.data[0].value }</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.cardContainer, backgroundColor: this.props.data[1].isLiked ? theme.tertiary : theme.white }}
          onPress={ (): void => this.handleLiked(this.props.data[1]) } >
          <Text style={ styles.cardText } >{ this.props.data[1].value }</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.cardContainer, backgroundColor: this.props.data[2].isLiked ? theme.tertiary : theme.white }}
          onPress={ (): void => this.handleLiked(this.props.data[2]) } >
          <Text style={ styles.cardText } >{ this.props.data[2].value }</Text>
        </TouchableOpacity>
      </View>
    );
  } 
}
