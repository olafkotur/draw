import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../config';

const height: number = Dimensions.get('window').height;
const width: number = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 12,
    color: theme.white
  },

  colorContainer: {
    flexDirection: 'row',
  },

  colorButton: {
    margin: width * 0.025,
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 2
  },


});
