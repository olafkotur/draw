import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../config';

const height: number = Dimensions.get('window').height;
const width: number = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  playButton: {
    width: width * 0.7,
    backgroundColor: theme.tertiary,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15
  },

  playText: {
    fontSize: 20,
    color: theme.white
  },

  exitButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: theme.quaternary,
    borderRadius: 10,
    marginRight: 20,
    marginLeft: 5,
  },

  text: {
    color: theme.white,
    fontSize: 14
  }
});
