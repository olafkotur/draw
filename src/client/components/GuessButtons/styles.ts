import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../config';

const height: number = Dimensions.get('window').height;
const width: number = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height * 0.08,
    justifyContent: 'center',
    marginVertical: 10,
    flexDirection: 'row'
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
  }
});
