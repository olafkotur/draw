import { StyleSheet, Dimensions } from 'react-native';
import { theme, game } from '../../../config';

const height: number = Dimensions.get('window').height;
const width: number = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    width: game.tileSize,
    height: game.tileSize,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },

  active: {
    backgroundColor: theme.secondary
  },

  inactive: {
    backgroundColor: theme.white
  }
});
