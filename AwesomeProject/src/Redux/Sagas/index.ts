import {all} from 'redux-saga/effects';
import awesomeSaga from './AwesomeSaga';

export default function* rootSaga() {
  yield all([awesomeSaga()]);
}
