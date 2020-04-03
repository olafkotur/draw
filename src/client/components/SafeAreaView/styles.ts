import { StyleSheet, Platform, PixelRatio } from 'react-native';

let paddingTop = 0;
if(Platform.OS === 'android') {
  if(PixelRatio.get() > 1) {
    paddingTop = 15;
  } else {
    paddingTop = 10;
  }
}

export default StyleSheet.create({
  container: {
    paddingTop
  },
});
