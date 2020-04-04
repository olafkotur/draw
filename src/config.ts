import { Platform } from 'react-native';

export const theme = {
  font: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  primary: '#2b2d42', // Gunmetal
  secondary: '#9c89b8', // Lavendar
  tertiary: '#7e9181', // Green
  quaternary: '#564256', // Purple
  white: '#fffdfd',
  red: '#B33939',
  blue: '#227093',
  yellow: '#CCAE62',
  purple: '#40407A'
};

export const game = {
  tileSize: 30,
  length: 60,
  playerTypes: ['artist']
};