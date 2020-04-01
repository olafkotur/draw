import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../client/pages/Home/index';
import Challenge from '../client/pages/Challenge';
import Victory from '../client/pages/Victory';

export default createAppContainer(
  createStackNavigator({
    Home,
    Challenge,
    Victory
  })
);
