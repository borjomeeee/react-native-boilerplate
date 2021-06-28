/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import AppNavigation from '@Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStore} from '@Redux';
import {Provider} from 'react-redux';
import {startNetworkLogging} from 'react-native-network-logger';
import {networkLoggerIsEnabled} from '@App/Config';
import {NetworkLogger} from '@UI';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

networkLoggerIsEnabled && startNetworkLogging();
const {store} = createStore();

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer onReady={() => SplashScreen.hide()}>
          <AppNavigation />
          {networkLoggerIsEnabled && <NetworkLogger />}
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
