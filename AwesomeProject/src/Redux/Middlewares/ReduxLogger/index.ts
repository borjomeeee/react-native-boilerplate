import {Middleware} from 'redux';

import {AppState} from '@Redux';
import {reduxLoggerIsEnabled} from '@App/Config';

export const reduxLogger: Middleware<{}, AppState> = () => next => action => {
  next(action);

  reduxLoggerIsEnabled && console.log('redux --> ' + action.type);
};
