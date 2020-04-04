import { StyleSheet, Dimensions, Platform } from 'react-native';
import { theme } from '../../../config';

const height: number = Dimensions.get('window').height;
const width: number = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  versusContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  playerNameText: {
    color: theme.tertiary,
    fontSize: 16
  },

  versusText: {
    color: theme.white,
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 10
  },

  opponentNameText: {
    color: theme.secondary,
    fontSize: 16
  },

  guessContainer: {
    alignItems: 'center',
  },  

  cardContainer: {
    width: (width * 0.3) - 5,
    height: '100%',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  cardText: {
    fontSize: 16
  },

  text: {
    color: theme.white,
    fontSize: 14
  },

  guessInputContainer: {
    flexDirection: 'row'
  },

  guessText: {
    color: theme.white,
    alignSelf: 'flex-start',
    marginLeft: width * 0.07,
    marginTop: 10
  },

  guessInput: {
    width: width * 0.7,
    backgroundColor: theme.white,
    paddingVertical: Platform.OS === 'ios' ? 18 : 15,
    borderRadius: 15,
    marginTop: 5,
    paddingLeft: 20,
    fontFamily: theme.font
  },

  guessSendButton: {
    width: width * 0.17,
    backgroundColor: theme.tertiary,
    paddingVertical: Platform.OS === 'ios' ? 18 : 15,
    borderRadius: 15,
    marginTop: 5,
    marginLeft: width * 0.03,
    alignItems: 'center'

  },

  bottomLeftInfo: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20
  },

  bottomRightInfo: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20
  },

  taskInfoContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: theme.tertiary,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 5
  },

  exitButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: theme.quaternary,
    borderRadius: 10,
    marginRight: 20,
    marginLeft: 5,
  },

  typeIcon: {
    height: 14,
    width: 14
  }
});
