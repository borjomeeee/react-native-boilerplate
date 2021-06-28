import createSagaMiddleware from 'redux-saga';
import {AnyAction, configureStore, Dispatch} from '@reduxjs/toolkit';
import reducer from './Stores/index';

import rootSaga from './Sagas';
import * as Middlewares from './Middlewares';

let _dispatch: Dispatch | undefined;
export const dispatch = (action: AnyAction) => {
  _dispatch?.(action);
};

export function createStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer,
    middleware: [...Object.values(Middlewares), sagaMiddleware],
  });
  sagaMiddleware.run(rootSaga);

  _dispatch = store.dispatch;
  return {store};
}
export type AppState = ReturnType<typeof reducer>;
