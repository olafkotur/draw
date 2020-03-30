import React from 'react';
import { View, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import SafeAreaView from '../../components/SafeAreaView';
import styles from './styles';
import Canvas from '../../components/Canvas';
import { PatternService } from '../../../services/pattern';
import Text from '../../components/Text';
import Score from '../../components/Score';

interface IProps {
  navigation: any;
}

interface IState {
  name: string;
}

export default class Create extends React.Component<IProps> {  
  constructor(props: IProps) {
    super(props);
    this.logoPattern =  PatternService.translatePattern('-1-0/0-01/0010/-11-/');
    this.defaultName = 'panda-flower';
  }

  static navigationOptions = {
    header: null
  };

  logoPattern: number[][];
  defaultName: string;

  state: IState = {
    name: this.defaultName,
  };

  render(): React.ReactElement {
    return (
      <SafeAreaView style={ styles.container } >

        <StatusBar barStyle='light-content' />

        <Canvas
          pattern={ this.logoPattern }
          size={ 5 } 
          margin
        />

        <View style={ styles.gameInfoContainer } >

          <Score
            artist={ 75 }
            games={ 4 }
            watcher={ 50 }
          />

          <Text style={ styles.instructionText }>choose a nickname</Text>

          <TextInput
            style={ styles.nameInput }
            value={ this.state.name }
            onChangeText={ (e: string): void => this.setState({ name: e }) }
            placeholder={ this.defaultName }
            autoCapitalize={ 'none' }
            underlineColorAndroid={'rgba(0,0,0,0)'}
            placeholderTextColor={'#c0c0c0'}
            maxLength={ 16 }
          />

          <TouchableOpacity
            style={ styles.startButton } >
            <Text style={ styles.startText }>start</Text>
          </TouchableOpacity>

        </View>

      </SafeAreaView>
    );
  } 
}
