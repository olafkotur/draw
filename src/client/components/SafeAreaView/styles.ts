import { StyleSheet, Platform, PixelRatio } from 'react-native';

let paddingTop = 0;
if(Platform.OS === 'android') {
  if(PixelRatio.get() > 1) {
    paddingTop = 38;
  } else {
    paddingTop = 25;
  }
}

export default StyleSheet.create({
  container: {
    paddingTop
  },
});
