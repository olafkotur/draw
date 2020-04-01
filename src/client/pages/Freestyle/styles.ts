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

  text: {
    color: theme.white,
    fontSize: 14
  },

  bottomLeftInfo: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    marginLeft: 20,
    bottom: 20
  },

  bottomLeftButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    margin: 5
  },

  exitButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: theme.quaternary,
    borderRadius: 10,
    marginLeft: 5,
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 25,
    right: 20,
  },
});
