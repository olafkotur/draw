import { StyleSheet, Dimensions, Platform } from 'react-native';
import { theme } from '../../../config';

const height: number = Dimensions.get('window').height;
const width: number = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  gameInfoContainer: {
    marginTop: height * 0.2
  },

  instructionText: {
    fontSize: 12,
    color: theme.white,
    textAlign: 'center'
  },

  nameInput: {
    width: width * 0.7,
    backgroundColor: theme.white,
    paddingVertical: Platform.OS === 'ios' ? 18 : 15,
    borderRadius: 15,
    marginTop: 5,
    paddingLeft: 20,
    fontFamily: 'Courier'
  },

  challengeButton: {
    width: width * 0.7,
    backgroundColor: theme.quaternary,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
  },

  freestyleButton: {
    width: width * 0.7,
    backgroundColor: theme.tertiary,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 50
  },

  startText: {
    fontSize: 20,
    color: theme.white
  },
});
