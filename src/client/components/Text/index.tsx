import React from 'react';
import { Text as RNText }  from 'react-native';
import styles from './styles';

interface IProps extends Partial<RNText> {
  style?: any;
}

export default class Text extends React.Component<IProps> {
  
  render(): JSX.Element {
    return (
      <RNText 
        { ...RNText }
        style={ { ...styles.container, ...this.props.style } } >
        { this.props.children }
      </RNText>
    );
  } 
}
