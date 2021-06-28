import * as RN from 'react-native';

import {subscribeTestNotification} from '@Redux/Stores/Common';
import {delay, takeLeading} from 'typed-redux-saga';

export function* watchNotificationsForTest() {
  while (true) {
    yield* delay(+(Math.random().toFixed(1) + 1) * 100000);

    if (RN.Platform.OS === 'android') {
      RN.ToastAndroid.show('Redux-saga is working!', 1000);
    } else {
      RN.Alert.alert('Redux-saga is working!');
    }
  }
}

export default function* awesomeSaga() {
  yield* takeLeading(subscribeTestNotification, watchNotificationsForTest);
}
