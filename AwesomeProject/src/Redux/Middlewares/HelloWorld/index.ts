import * as RN from 'react-native';

import {Middleware} from 'redux';
import {isSameAction} from '@Lib/Utils/Redux';
import {AppState} from '@Redux';
import {add} from '@Redux/Stores/Common';

export const sayHello: Middleware<{}, AppState> =
  ({getState}) =>
  next =>
  action => {
    next(action);

    if (isSameAction(add, action)) {
      const counter = getState().common.counter;
      if (counter % 5 === 0) {
        RN.Alert.alert('Hello!');
      }
    }
  };
