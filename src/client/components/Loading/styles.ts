import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../config';

const height: number = Dimensions.get('window').height;
const width: number = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 20,
    color: theme.white,
  }
});
