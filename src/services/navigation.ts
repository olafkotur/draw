import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Create from '../client/pages/Create/index';
import Game from '../client/pages/Game';
import Victory from '../client/pages/Victory';

export default createAppContainer(
  createStackNavigator({
    Create,
    Game,
    Victory
  })
);
