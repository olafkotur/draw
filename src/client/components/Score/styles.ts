import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../config';

const height: number = Dimensions.get('window').height;
const width: number = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },

  scoreText: {
    fontSize: 20,
    color: theme.white,
    paddingRight: 3
  },

  scoreGroup: {
    flexDirection: 'row',
    padding: 20
  },

  icon: {
    width: 20,
    height: 20
  }
});
