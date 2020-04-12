import React from 'react';
import { SafeAreaView as RNSafeAreaView }  from 'react-native';
import styles from './styles';

interface IProps extends Partial<RNSafeAreaView> {
  style?: any;
}

export default class SafeAreaView extends React.Component<IProps> {
  
  render(): JSX.Element {

    return (
      <RNSafeAreaView 
        { ...RNSafeAreaView }
        style={ { ...styles.container, ...this.props.style } } >
        { this.props.children }
      </RNSafeAreaView>
    );
  } 
}
