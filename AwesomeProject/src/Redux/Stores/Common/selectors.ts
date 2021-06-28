import {AppState} from '@Redux';

export const getCounter = (state: AppState) => state.common.counter;
