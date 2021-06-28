import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HelloWorld from './HelloWorld';
import Paths from './Paths';
import {helloWorldOptions} from './navigationOptions';

const AppStack = createStackNavigator();
const AppNavigation = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        component={HelloWorld}
        name={Paths.HelloWorld}
        options={helloWorldOptions}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
